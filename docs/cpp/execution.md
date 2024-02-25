## std::execution

使用execution时，需要链接到tbb库，cmake示例如下

```cmake
find_package(TBB REQUIRED COMPONENTS tbb)
target_link_libraries(execution fmt::fmt tbb)
```
在使用并行算法时，做大量的测试是个好主意。若算法或谓词本身不能很好地用于并行化，那么最终可能会获得最小的性能增益，或出现意想不到的副作用。

```cpp
#include <chrono>
#include <fmt/chrono.h>
#include <fmt/format.h>
#include <iostream>
#include <execution>

using dur_t = std::chrono::duration<double, std::milli>;

int main() {
	std::vector<unsigned int> v(1000 * 1000);
	for (int i = 0; i < v.size(); ++i)
		v.at(i) = i;
	auto mul2 = [](int n) { return n * 2; };
	// no policy
	auto t1 = std::chrono::steady_clock::now();
	std::transform(v.begin(), v.end(), v.begin(), mul2);  // !here
	dur_t dur1 = std::chrono::steady_clock::now() - t1;
	std::cout << fmt::format("no policy: {:.3}ms\n", dur1.count());

	// seq
	t1 = std::chrono::steady_clock::now();
	std::transform(std::execution::seq, v.begin(), v.end(), v.begin(), mul2); // !here
	dur1 = std::chrono::steady_clock::now() - t1;
	std::cout << fmt::format("execution seq: {:.3}ms\n", dur1.count());

	// par
	t1 = std::chrono::steady_clock::now();
	std::transform(std::execution::par, v.begin(), v.end(), v.begin(), mul2); // !here
	dur1 = std::chrono::steady_clock::now() - t1;
	std::cout << fmt::format("execution par: {:.3}ms\n", dur1.count());

	// par_unseq
	t1 = std::chrono::steady_clock::now();
	std::transform(std::execution::par_unseq, v.begin(), v.end(), v.begin(), mul2); //! here
	dur1 = std::chrono::steady_clock::now() - t1;
	std::cout << fmt::format("execution par_unseq: {:.3}ms\n", dur1.count());
	return 0;
}


// 输出：
/**
no policy: 14.9ms
execution seq: 16.5ms
execution par: 6.24ms
execution par_unseq: 2.16ms
*/
```
