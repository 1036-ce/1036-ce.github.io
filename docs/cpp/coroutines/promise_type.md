## promise type
一个协程的行为是由它的Promise对象控制的

一个Promise对象有如下接口:

```cpp
class Coroutine {
public:
    struct promise_type {
        Coroutine get_return_object();

        // for most coroutine, the initial_suspend method will return std::suspend_always or std::suspend_never
        // but NOT ALL
        auto initial_suspend();

        // after the `return_void` or `return_value` or `unhandled_exception` 
        // methods have called and all local variables have been destructed, 
        // the final_suspend will be called to execture some additional logic 
        // before the execution is returned back to the called/resumer
        auto final_suspend();

        // catch exception
        void unhandled_exception();

        // for `co_return;`, the return_void() method is called
        void return_void();

        // for `co_return <expr> ;`, the return_value(<expr>) method is called
        auto return_value();

        auto await_transform();

        // customising the behaviour of `co_yield`
        auto yield_value() noexcept;

        static Coroutine get_return_object_on_allocation_failure();
    };
};
```

## 协程执行过程

对于一个协程函数, 以下面的函数为例
```cpp
task<> func() {
    <body-statements>
}
```
编译器通过从它的返回类型提取promise类型，并将携程函数改造为如下形式

```cpp
{
    co_await promise.initial_suspend();
    try {
        <body-statements>
    }
    catch() {
        promise.unhandled_exception();
    }
FinalSuspend:
    co_await promise.final_suspend();
}
```

当调用协程函数时，在执行协程主体代码之前会执行很多步骤:
1. 使用`operator new`分配协程帧(可选)
    如果`promise_type`自定义了`operator new`方法，则调用该方法，否则调用全局的`operator new`
2. 将函数参数复制到协程帧中
3. 调用`promise`类型对象的构造器，构造promise对象
4. 调用`promise.get_return_object()`得到返回结果`res`, 在协程第一次被挂起时这个返回结果将被返回给协程调用者.
5. `co_await promise.initial_suspend()`
    对于大多数协程`initial_suspend()`方法返回`std::suspend_always`或者`std::suspend_never`
6. 当`co_await promise.initial_suspend()`恢复时，协程开始执行`<body-statements>`部分

当在`<body-statements>`中执行到`co_return`语句时,会执行如下步骤
1. 调用`promise.return_void()`或`promise.return_value(<expr>)`
2. 按照创建的相反顺序销毁所有局部变量
3. 执行`co_await promise.final_suspend()`

如果执行由于一个异常离开`<body-statements>`,将会执行如下步骤
1. 捕获异常，然后执行`promise.unhandled_exception()`
2. 执行`co_await promise.final_suspend()`
    在final_suspend()方法中，可以挂起协程，也可以直接返回到调用者(`std::suspend_never`)。
    如果挂起协程，那么之后就只能调用`destroy()`方法，而不能`resume`(这会导致未定义行为).
    一般不建议直接返回到调用者,而是通过在外部调用`destroy`的方法来销毁协程帧,因为这样便于编译器优化
    

销毁协程帧的步骤:
1. 调用Promise对象的析构函数
2. 调用函数参数的析构函数
3. 调用`operator delete`释放协程帧的内存占用
4. 执行回到协程调用者或协程恢复者

## 协程句柄(coroutine_handle)

coroutine_handle 的接口如下所示

```cpp
template<typename Promise = void>
struct coroutine_handle;

// Type-erased corountine handle. Can refer to any kind of coroutine
// Donesn't allow access to the promise object;
template<>
struct coroutine_handle<void> {

    // constructs to the null handle
    constexpr coroutine_handle();

    // convert to/from a void* for passing into C-style interop functions
    constexpr void* address() const noexcept;
    static constexpr coroutine_handle from_address(void* addr);

    // query if the handle is non-null.
    constexpr explicit operator bool() const noexcept;

    // query if the coroutine is suspended at the final_suspend point.
    // undefined behaviour if coroutine is not currently suspended.
    bool done() const;

    // resume/destroy the suspended corountine
    void resume();
    void destroy();
};

// coroutine handle for coroutines with a known promise type.
// template argument must exactly match coroutine's promise type
template <typename Promise>
struct coroutine_handle : coroutine_handle<> {
    using coroutine_handle<>::coroutine_handle;

    static constexpr coroutine_handle from_address(void* addr);

    // access to the coroutine's promise object;
    Promise& promise() const;

    // you can reconstruct the coroutine handle from the promise object
    static coroutine_handle from_promise(Promise& promise);
};
```

## 自定义`co_await`表达式的行为

1. 在`promise_type`中定义一个`await_transform`方法, 则编译器会将所有的`co_await <expr>`转换为`co_await promise.await_transform(<expr>)`
2. 可以通过将`await_transform`函数设置为`=delete`来禁止等待, 例如
```cpp
template <typename T>
class generator_promise {
    //...

    // Disable any use of co_await within this type of coroutine
    template<typename U>
    std::suspend_never await_transform(U&&) = delete;
}
```

## 自定义`co_yield`表达式的行为

编译器将`co_yield <expr>`转换为`co_await promise.yield_value(<expr>)`
使用示例如下：
```cpp
template<typename T>
class generator_promise {
    T* valuePtr;
public:
    std::suspend_always yield_value(T& value) noexcept {
        valuePtr = std::addressof(value);
        return {}
    }
};
```
