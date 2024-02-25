## 协程的重要概念

### promise 承诺对象

承诺对象的表现形式必须是`result::promise_type`， **`result`为协程函数的返回值**

承诺对象是一个接口，其必须实现以下函数：

- `auto get_return_object()`：
- `auto initial_suspend()`：
- `void return_value(T v)`
- `void yield_valud(T v)`
- `auto final_suspend() noexpect`

```cpp
struct Promise {
	struct promise_type {
		auto get_return_object() {}

		auto initial_suspend() {}

		auto final_suspend() {}

		void unhandled_exception() {}

		void return_void() {}
	};
};

Promise CoroutineFunc() {
	std::cout << "before co_await" << std::endl;
	co_await Awaiter();
	std::cout << "after co_await" << std::endl;
}
```

