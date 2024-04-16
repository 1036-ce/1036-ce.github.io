## 在`co_await <expr>`表达式中获取`awaiter`对象的方法

```cpp
template <typename P, typename T>
decltype(auto) get_awaitable(P& promise, T&& expr) {
    if constexpr(has_any_await_transform_member_v<P>)
        return promise.await_transform(static_cast<T&&>(expr));
    else
        return static_cast<T&&>(expr);
}

template <typenamt Awaitable>
decltype(auto) get_awaiter(Awaitable&& awaitable) {
    if constexpr(has_member_operator_co_await_v(Awaitable))
        return static_cast<Awaitable&&>(awaitable).operator coawait();
    else if constexpr (has_non_member_operator_co_await_v<Awaitable&&>)
        return operator co_await(static_cast<Awaitable&&>(awaitbale);
    else
        return static_cast<Awaitable&&>(awaitable);
}
```

## 对于有返回类型为void或bool的await_suspend()方法的co_await执行流程
```cpp
{
    auto&& value = <expr>;
    auto&& awaitable = get_awaitable(promise, static_cast<decltype(value)>(value));
    auto&& awaiter = get_awaiter(static_cast<decltype(awaitable)>(awaitable));
    if (!awaiter.awaitr_ready) {
        using handle_t = std::coroutine_handle<P>;
        using await_suspend_result_t =
                decltype(awaiter.await_suspend(handlt_t::fromt_promise(p)));

        <suspend-point>;

        if constexpr(std::is_void_v<await_suspend_result_t>) {
            awaiter.await_suspend(handle_t::from_promise(p));
            <return-to-caller-or-resumer>;
        }
        else {
            static_assert(
                    std::is_same_v<await_suspend_result_t, bool>,
                    "await_suspend() must return 'void' or 'bool'.");

            if (awaiter.await_suspend(handle_t::from_promise(p)))
                <return-to-caller-or-resumer>
        }

        <resume-point>;
    }

    return awaiter.await_resume();
}
```

## 对于使用对称传输的await_suspend()方法的co_await执行流程:
```cpp
{
    decltype(auto) value = <expr>;
    decltype(auto) awaitable = 
        get_awaitable(promise, static_cast<decltype(value)&&>(value));
    decltype(auto) awaiter = 
        get_awaiter(static_cast<decltype(awaitable>&&)(awaitable));

    if (!awaiter.await_ready()) {
        using handle_t = std::coroutine_handle<P>;

        // <suspend-coroutine>

        auto h = awaiter.await_suspend(handle_t::from_promise(p));
        h.resume();
        // <return-to-caller-or-resumer>

        // <resume-point>
    }

    return awaiter.await_resume();
}
```
