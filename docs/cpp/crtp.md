## crtp (curiously recurring template pattern)

crtp有两大特性
1. 继承自模板类
2. 派生类将滋生作为参数传递给模板基类

```cpp
template <typename Derived>
class Base {
public:
    void fun() {
        T& derived = static_cast<T&>(*this);
    }
};

class Derived : public Base<Derived> {
public:
    void fun() {
        std::cout << "Derived class " << std::endl;
    }
    // some code
};
```


### ref
> [wiki](https://en.wikipedia.org/wiki/Curiously_recurring_template_pattern#Polymorphic_copy_construction)

> [cppreference](https://en.cppreference.com/w/cpp/language/crtp)
