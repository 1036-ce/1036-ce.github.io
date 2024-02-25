## std::thread

`std::thread`对象表示一个线程，对象与线程之间是一对一的关系。线程对象不能被赋值或复制，但可以移动


```cpp
// 构造函数如下
explicit thread(Function&& f, Args&& ...args);
```
在构造函数执行完成后，函数会**立即执行**

创建线程后，必须在线程上使用`join()`或`detach()`

- `join()`： 阻塞调用线程的执行，直到被调用线程执行完成

- `detach()`: 允许被调用线程独立于调用线程继续运行

示例代码:
```cpp
#include <fmt/core.h>
#include <iostream>
#include <thread>

using namespace fmt;

void sleepms(unsigned int ms) {
	using std::chrono::milliseconds;
	std::this_thread::sleep_for(milliseconds(ms));
}

void fthread(const int n) {
	std::cout << format("This is t{}\n", n);
	for (int i = 0; i < 5; ++i) {
		sleepms(100 * n);
		std::cout << format("t{}: {}\n", n, i + 1);
	}
	std::cout << format("Finishing t{}\n", n);
}

int main() {
	std::thread t1(fthread, 1);
	std::thread t2(fthread, 2);
	std::cout << "start of main()\n";
	t1.join();
	t2.join(); 
	std::cout << "end of main()\n";
}

// 输出如下：
/* This is t1
 * This is t2
 * t1: 1
 * t2: 1
 * t1: 2
 * t1: 3
 * t2: 2
 * t1: 4
 * t1: 5
 * Finishing t1
 * t2: 3
 * t2: 4
 * t2: 5
 * Finishing t2
 * end of main() */
```
