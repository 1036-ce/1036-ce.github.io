## memory order

### 为什么需要memory order

如果不使用任何同步机制（例如 mutex 或 atomic），在多线程中读写同一个变量，
那么，程序的结果是难以预料的。简单来说，编译器以及 CPU 的一些行为，会影响到程序的执行结果：

即使是简单的语句，C++ 也不保证是原子操作。
CPU 可能会调整指令的执行顺序。
在 CPU cache 的影响下，一个 CPU 执行了某个指令，不会立即被其它 CPU 看见。

原子操作说的是，一个操作的状态要么就是未执行，要么就是已完成，不会看见中间状态。例如，在 C++11 中，下面程序的结果是未定义的：




```cpp
          int64_t i = 0;     // global variable
Thread-1:              Thread-2:
i = 100;               std::cout << i;
````
C++ 并不保证i = 100是原子操作，因为在某些 CPU Architecture 中，
写入int64_t需要两个 CPU 指令，所以 Thread-2 可能会读取到i在赋值过程的中间状态。

另一方面，为了优化程序的执行性能，CPU 可能会调整指令的执行顺序。
为阐述这一点，下面的例子中，让我们假设所有操作都是原子操作：

```
          int x = 0;     // global variable
          int y = 0;     // global variable
		  
Thread-1:              Thread-2:
x = 100;               while (y != 200)
y = 200;                   ;
                       std::cout << x;
```
如果 CPU 没有乱序执行指令，那么 Thread-2 将输出100。
然而，对于 Thread-1 来说，x = 100;和y = 200;这两个语句之间没有依赖关系，
因此，Thread-1 允许调整语句的执行顺序：

```
Thread-1:
y = 200;
x = 100;
```
在这种情况下，Thread-2 将输出0或100。

CPU cache 也会影响到程序的行为。下面的例子中，假设从时间上来讲，A 操作先于 B 操作发生：

```
          int x = 0;     // global variable
		  
Thread-1:                      Thread-2:
x = 100;    // A               std::cout << x;    // B
```

尽管从时间上来讲，A 先于 B，但 CPU cache 的影响下，
Thread-2 不能保证立即看到 A 操作的结果，所以 Thread-2 可能输出0或100。

### Relaxed ordering

在这种模型下，std::atomic的load()和store()都要带上memory_order_relaxed参数。

Relaxed ordering 仅仅保证load()和store()是原子操作，除此之外，不提供任何跨线程的同步。

　　先看看一个简单的例子：

```cpp 
            std::atomic<int> x = 0; 
            std::atomic<int> y = 0;

Thread-1:                              
r1 = y.load(memory_order_relaxed); // A
x.store(r1, memory_order_relaxed); // B

Thread-2:
r2 = x.load(memory_order_relaxed); // C
y.store(42, memory_order_relaxed); // D
```

由于A,B,C,D四个语句之间没有任何依赖关系，编译器可以重排他们的执行顺序

在D->A->B->C 顺序下，`r1==r2==42`

在A->B->C->D 顺序下, `r1==r2==0`

如果某个操作只要求是原子操作，除此之外，不需要其它同步的保障，就可以使用 Relaxed ordering。程序计数器是一种典型的应用场景：

```cpp
#include <cassert>
#include <vector>
#include <iostream>
#include <thread>
#include <atomic>
std::atomic<int> cnt = {0};
void f()
{
    for (int n = 0; n < 1000; ++n) {
        cnt.fetch_add(1, std::memory_order_relaxed);
    }
}
int main()
{
    std::vector<std::thread> v;
    for (int n = 0; n < 10; ++n) {
        v.emplace_back(f);
    }
    for (auto& t : v) {
        t.join();
    }
    assert(cnt == 10000);    // never failed
    return 0;
}
```

### memory order

c++11 atomic提供了6种memory order，来在编程语言层面对编译器和cpu实施的重排指令行为进行控制

1. memory_order_relaxed: 无fencing作用，cpu和编译器可以重排指令

2. memory_order_consume: 后面依赖此原子变量的访存指令勿重排至此条指令之前, 
    性能比memory_order_acquire高(在c++26中已弃用)

3. memory_order_acquire: 后面访存指令禁止重排至此条指令之前

4. memory_order_release: 前面访存指令禁止重排到此条指令之后。

5. memory_order_acq_rel: memory_order_acquire + memory_order_release

6. memory_order_seq_cst: memory_order_acq_rel + 所有使用seq_cst的指令有严格的全序关系


多线程编程时，通过这些标志位，来读写原子变量，可以组合出4种同步模型：

- Relaxed ordering

- Release-Acquire ordering

- Release-Consume ordering

- Sequentially-consistent ordering

默认情况下，std::atomic使用的是Sequentially-consistent ordering(最严格的同步模型)。
但在某些场景下，合理使用其它3种ordering，可以让编译器优化生成的代码，从而提高性能。


### Release-Acquire ordering

在这种模型下，store()使用memory_order_release，而load()使用memory_order_acquire。这种模型有两种效果，第一种是可以限制 CPU 指令的重排：

- 在store()**之前**的所有读写操作(包括非原子的和Relaxed atomic的)，不允许被移动到这个store()的后面。 // write-release语义

- 在load()**之后**的所有读写操作(包括非原子的和Relaxed atomic的)，不允许被移动到这个load()的前面。 // read-acquire语义

**该模型可以保证：如果Thread-1的store()的那个值，成功被Thread-2的load()到了，那么Thread-1在store()之前对内存的所有写入操作，此时对Thread-2来说都是可见的**

```cpp
#include <atomic>
#include <cassert>
#include <string>
#include <thread>
 
std::atomic<std::string*> ptr;
int data;
 
void producer()
{
    std::string* p = new std::string("Hello");
    data = 42;
    ptr.store(p, std::memory_order_release);
}
 
void consumer()
{
    std::string* p2;
    while (!(p2 = ptr.load(std::memory_order_acquire)))
        ;
    assert(*p2 == "Hello"); // never fires
    assert(data == 42); // never fires
}
 
int main()
{
    std::thread t1(producer);
    std::thread t2(consumer);
    t1.join(); 
    t2.join();
}
```

### Release-Consume ordering

**因为memory_order_consume在未来已被弃用，不介绍该节**

### Sequentially-consistent ordering
