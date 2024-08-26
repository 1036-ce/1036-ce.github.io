## noexcept

`noexcept`是cpp11引入的新特性，指定函数是否可能会引发异常
它可以帮助编译器进行更好的优化

**类的析构函数默认是`noexcept`的**

***

- noexcept(true) 等价于noexcept, 表明该函数不会引发异常，如果函数出现异常，调用`std::terminate`终止程序

- noexcept(false) 与不使用noexcept等价，表明函数可能会抛出异常。

- noexcept(`<function>`): noexcept 可以作为一个运算符，它接受一个函数名，返回bool值表示函数是否为`noexcept`
示例如下:

```cpp 
void fun() noexcept {
}

void bar() noexcept(noexcept(fun)) {
}

int main() {
    std::cout << noexcept(bar) << std::endl; // 1
}
```
在上面的示例中，如果函数`fun`是`noexcept`,那么函数`bar`也是`noexcept`的，
如果函数`fun`不是`noexcept`,那么函数`bar`也不是`noexcept`的

***
使用 noexcept 的注意事项

1. 不滥用：不要随意地将 noexcept 用于所有函数。它应该仅用于那些明确不会抛出异常的函数，尤其是在库或框架代码中。

2. 慎重考虑库函数的 noexcept：如果你声明一个函数为 noexcept，但它可能会抛出异常
（比如通过调用一个非 noexcept 的函数），这可能会导致 std::terminate 被调用，从而使得程序更难以调试。
