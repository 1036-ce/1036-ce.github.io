## conditional variable

`std::conditional_variable`是c++11引入的同步原语，主要用于线程之间的等待和通知。
其内部实现依赖于操作系统的同步机制（在linux上是pthread_cond_t)

### api

1. notify_one: 唤醒一个阻塞的线程
2. notify_all: 唤醒所有阻塞的线程
3. wait: 阻塞直到被唤醒
4. wait_for: 阻塞当前线程直到被唤醒或超时
5. wait_until: 阻塞当前线程直到被唤醒或到达指定时间

### usage

使用conditional_variable实现交替打印数字

```cpp
#include <condition_variable>
#include <cstdio>
#include <thread>

using namespace std::chrono_literals;

std::mutex m;
std::condition_variable cv;
int turn = 1;

uint32_t tid2uint(std::thread::id tid) {
  return *reinterpret_cast<uint32_t*>(&tid) % 100;
}

void print_odd() {
  auto tid = tid2uint(std::this_thread::get_id());
  std::unique_lock<std::mutex> ul(m);
  int num = 1;
  while (true) {
    cv.wait(ul, []() { return turn == 0; });
    printf("%d: %d\n", tid, num);
    std::this_thread::sleep_for(1s);
    num += 2;
    turn = 1;
    cv.notify_one();
  }
}

void print_even() {
  auto tid = tid2uint(std::this_thread::get_id());
  std::unique_lock<std::mutex> ul(m);
  int num = 0;
  while (true) {
    cv.wait(ul, []() { return turn == 1; });
    printf("%d: %d\n", tid, num);
    std::this_thread::sleep_for(1s);
    num += 2;
    turn = 0;
    cv.notify_one();
  }
}

int main() {
  std::thread t1(print_even);
  std::thread t0(print_odd);
  printf("t0's tid is %d, t1's tid is %d\n", tid2uint(t0.get_id()), tid2uint(t1.get_id()));
  t1.join();
  t0.join();
  return 0;
}
```

> [cppreference](https://en.cppreference.com/w/cpp/thread/condition_variable)
