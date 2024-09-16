## declval

将类型`T`转换为引用类型，从而可以在`decltype`表达式中无需构造函数而调用成员成员函数。
`std::declval`通常用于模板中

```cpp
template<typename T>
typename std::add_rvalue_reference<T>::type declval() noexcept
{
    static_assert(false, "declval not allowed in an evaluated context");
}
```

### 使用场景

在写cpp时，通常需要使用`decltype`获得一个类成员的返回类型

```cpp
struct A {
    int foo();
};

int main() {
    decltype(A().foo()) val = 1; // this is ok
    return 0;
}
```

但是当类`A`没有默认构造函数时，上述方法不能使用
`std::declval`在这种情况下起作用

```cpp
struct A {
    A() = delete;
    int foo();
};

int main() {
    decltype(A().foo()) val = 1; // this is an error
    decltype(std::declval<A>().foo()) v1 = 1; // this is ok
    return 0;
}
```
