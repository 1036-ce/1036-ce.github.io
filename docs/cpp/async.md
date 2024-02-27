## std::async

`std::async` 异步运行一个函数，并返回一个**携带目标函数返回值**（`std::thread`不允许有返回值）的`std::future`对象

## std::future
### method
- `get()`: 用于取出目标函数的返回值，`get()`是阻塞式的，会等到异步函数完成
- `wait()`: 等待直到结果可用，阻塞式
- `wait_for()`: 等待一段时间
- `wait_until()`: 等待直到某个指定的**时刻**

## std::launch
`std::launch` 是一个枚举，包含`async`和`deferred`
- `async`标志启用异步操作
- `deferred` 标志启用延迟计算，在调用`std::future`的`get`函数时才执行函数
`async`和`deferred`是位映射的，可以按位或:`async | deferred` （默认值）

示例代码：
```cpp
#include <chrono>
#include <fmt/core.h>
#include <fmt/chrono.h>
#include <future>
#include <iostream>

using launch = std::launch;
using secs   = std::chrono::duration<double>;

struct prime_time {
	secs dur{};
	uint64_t count{};
};

prime_time count_primes(const uint64_t &max) {
	prime_time ret{};
	constexpr auto isprime = [](const uint64_t &n) {
		for (uint64_t i{2}; i < n / 2; ++i) {
			if (n % i == 0)
				return false;
		}
		return true;
	};
	uint64_t start{2};
	uint64_t end{max};
	auto t1 = std::chrono::steady_clock::now();
	for (uint64_t i{start}; i <= end; ++i) {
		if (isprime(i))
			++ret.count;
	}
	ret.dur = std::chrono::steady_clock::now() - t1;
	return ret;
}

int main() {
	constexpr uint64_t MAX_PRIME{0x1ffff};
	auto primes1 = std::async(launch::deferred, count_primes, MAX_PRIME);
	auto pt = primes1.get();
	std::cout << fmt::format("primes: {} {:.3}\n", pt.count, pt.dur);
	return 0;
}
```
