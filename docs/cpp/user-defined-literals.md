## 介绍
user-defined literals 在c++11引进，允许用户自定义后缀(整数、浮点数、字符、字符串)并产生相应的Object

在`<chrono>`中有使用, 例子如下

```cpp
#include <chrono>
#include <iostream>
#include <thread>

using namespace std::chrono_literals;

int main() {
	using namespace std::chrono;
	using namespace std::this_thread;
	using std::cout;
	auto t1 = steady_clock::now();
	cout << "sleep for 1.3 seconds\n";

    // user-defined literals 的使用
	sleep_for(1s + 300ms);
    
	cout << "sleep for 2 seconds\n";
	sleep_until(steady_clock::now() + 2s);
	duration<double> dur1 = steady_clock::now() - t1;
	cout << "total duration: " + std::to_string(dur1.count()) + " s\n";
	return 0;
}
```
通过`using namespace std::chrono_literals`引入`chrono_literals`, `chrono_literals `命名空间具有表示持续时间的符号，例如 1s 表示一秒，100ms 表示 100 毫秒


### 使用s后缀生成string对象

```cpp
#include <iostream>

int main() {
	using namespace std::literals;
    // a's type is string
	auto a = "asdasdasd"s;
	a.append("asdasd");
	std::cout << a << std::endl;

    // b's type is `string_view`
    auto b = "14r323432"sv;
	return 0;
}
```

参考：

[1] https://en.cppreference.com/w/cpp/language/user_literal

[2] https://en.cppreference.com/w/cpp/symbol_index/literals
