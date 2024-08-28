## 模板类的模板友元函数

通常需要在模板类内声明模板友元函数：

```cpp

#include <iostream>
template<typename T>
class Foo {
    public:
        Foo(const T& value = T());
        friend Foo<T> operator+ (const Foo<T>& lhs, const Foo<T>& rhs);
        friend std::ostream& operator<< (std::ostream& o, const Foo<T>& x);
    private:
        T value_;
};

    template<typename T>
Foo<T>::Foo(const T& value = T())
    : value_(value)
{ }
    template<typename T>
Foo<T> operator+ (const Foo<T>& lhs, const Foo<T>& rhs)
{ return Foo<T>(lhs.value_ + rhs.value_); }
    template<typename T>
std::ostream& operator<< (std::ostream& o, const Foo<T>& x)
{ return o << x.value_; }

int main()
{
    Foo<int> lhs(1);
    Foo<int> rhs(2);
    Foo<int> result = lhs + rhs;
    std::cout << result;
    // ...
}
```

然而，在编译上述代码时会遇到链接错误:

```
undefined reference to `operator+(Foo<int> const&, Foo<int> const&)'
undefined reference to `operator<<(std::ostream&, Foo<int> const&)'
```

这是因为编译器在处理类定义中的友元函数时，并不知道这些友元函数是模板，所以编译器假定它们为非模版, 如下：

```cpp
Foo<int> operator+ (const Foo<int>& lhs, const Foo<int>& rhs)
std::ostream& operator<< (std::ostream& o, const Foo<int>& x)
```
从而导致在链接时找不到这些函数的实现，出现链接错误

为了让编译器正确识别这些友元函数为模板函数，有两种方法：

1. 方法一

在类定义之前先声明这些函数，并且在类定义中声明友元函数时添加`<>`

```cpp
template<typename T> class Foo;  // pre-declare the template class itself
template<typename T> Foo<T> operator+ (const Foo<T>& lhs, const Foo<T>& rhs);
template<typename T> std::ostream& operator<< (std::ostream& o, const Foo<T>& x);

#include <iostream>
    template<typename T>
    class Foo {
        public:
            Foo(const T& value = T());
            friend Foo<T> operator+ <> (const Foo<T>& lhs, const Foo<T>& rhs);
            friend std::ostream& operator<< <> (std::ostream& o, const Foo<T>& x);
        private:
            T value_;
    };

template<typename T>
Foo<T>::Foo(const T& value = T())
    : value_(value) {}

template<typename T>
Foo<T> operator+ (const Foo<T>& lhs, const Foo<T>& rhs) { 
    return Foo<T>(lhs.value_ + rhs.value_); 
}

template<typename T>
std::ostream& operator<< (std::ostream& o, const Foo<T>& x) {
    return o << x.value_; 
}
```

2. 方法二

直接在类内部定义友元函数

```cpp

#include <iostream> template<typename T>
class Foo {
    public:
        Foo(const T& value = T());
        friend Foo<T> operator+ (const Foo<T>& lhs, const Foo<T>& rhs)
        {
            return Foo<T>(lhs.value_ + rhs.value_); 
        }
        friend std::ostream& operator<< (std::ostream& o, const Foo<T>& x)
        {
            return o << x.value_; 
        }
    private:
        T value_;
};
```
