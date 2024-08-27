## function try block

function try block 的语法与普通的 try-catch 语句相似，
但 **try 关键字放在整个函数体前面，而不是仅包裹函数体的一部分**

```cpp
class MyClass {
public:
    MyClass(int x) try : member(x) {
        // 函数体
        if (x < 0) {
            throw std::runtime_error("Invalid value for x");
        }
    } catch (const std::exception& e) {
        // 异常处理
        std::cerr << "Exception caught: " << e.what() << std::endl;
    }

private:
    int member;
};

void fun() try {

} catch(`<args>`) {

}
```

### 使用场景

1. 构造函数中成员初始化失败时的异常处理：构造函数的初始化列表有时可能会抛出异常（例如，动态分配内存失败），
在这种情况下，function try block 可以捕获异常，并执行相应的处理逻辑。

2. 析构函数中的异常处理：类似地，function try block 也可用于捕获析构函数中的异常，尽管在析构函数中抛出异常通常被认为是不好的实践。

### 注意事项

1. 在 catch 块中，如果没有重新抛出异常，构造函数的异常处理会使对象构造失败，且不会创建对象。

2. 在 function try block 中捕获异常后，可以选择继续抛出异常，这样异常会被进一步传播。

function try block 提供了一种机制，使得开发者可以在构造函数或其他函数的初始化阶段捕获和处理异常，这对于资源管理和确保程序的健壮性非常重要。
