### lambda表达式转换为函数指针

```cpp
#include <iostream>

int main() {
    auto lambda = [](int a, int b) { return a + b; };

    // 使用 + 号将 lambda 转换为函数指针
    int (*func_ptr)(int, int) = +lambda;

    // 使用函数指针调用
    std::cout << func_ptr(3, 4) << std::endl;  // Output: 7

    return 0;
}
```

这种转换只有在lambda表达式**没有捕获外部变量**的情况下才有效

### 前置递增运算符与后置递增运算符

```cpp
class MyClass {
public:
    MyClass(int v) : value(v) {}

    // 前置递增运算符
    MyClass& operator++() {
        ++value;
        return *this;
    }

    // 后置递增运算符
    MyClass operator++(int) {
        MyClass temp = *this;
        ++value;
        return temp;
    }

    void print() const {
        std::cout << "Value: " << value << std::endl;
    }

private:
    int value;
};

int main() {
    MyClass obj(5);

    ++obj; // 前置递增
    obj.print(); // 输出：Value: 6

    obj++; // 后置递增
    obj.print(); // 输出：Value: 7

    return 0;
}
```

- 前置递增：增加值，然后返回增加后的值。通常实现返回对象的引用。
- 后置递增：返回当前值，然后增加值。通常实现返回对象的副本，**并且需要一个额外的int参数来区分**

这两种运算符重载时通常作为成员函数

### cpp空类的大小为1字节，为什么？
每个对象在内存中都需要一个唯一地址。如果空类的大小为 0，那么在内存中创建两个空类对象时，它们将有相同的地址

### 拷贝构造函数与operator=的调用时机

在用一个对象初始化另一个对象时，调用拷贝构造函数

在将一个已存在的对象赋值给一个已存在的对象时，调用`operator=`

```cpp
MyClass obj1;
MyClass obj2 = obj1;    // 调用拷贝构造函数

MyClass obj1;
MyClass obj2;
obj2 = obj1;            // 调用operator=
```

### 为什么基类的析构函数必须是虚函数?

析构函数用于在对象的生命周期结束时释放资源，如果在基类中没有将析构函数声明为虚函数，
那么在通过基类指针销毁一个派生类对象时，可能会导致不正确的行为。只执行了基类的析构函数
而没有执行派生类的析构函数。

### protected 访问限定符

类内部可以访问`protected`成员
继承该类的子类可以访问`protected`成员
类外部不能访问`protected`成员

### 移动语义如何提升`std::vector`的性能

`std::vector`是一个动态数组容器，它会根据需要自动调整容量，当`std::vector`的容量不足时，
会触发重新分配内存的过程：所有元素都会被复制到新分配的更大的内存块中。在没有移动语义时，
复制操作是通过拷贝构造函数进行的，这会引发**深拷贝**操作，增加开销。

### `(void)var`

变量`var`未使用，使用上述方法消除编译器警告

### raw string

c++-11中提出的

代码里嵌入一段原始字符串，该原始字符串不作任何转义，所见即所得，
这个特性对于编写代码时要输入多行字符串，或者含引号的字符串提供了巨大方便。

```cpp
#include <stdio.h>

int main() {
    const char *startup_tips = R"(
    Welcome to the OceanBase database implementation course.

    Copyright (c) 2021 OceanBase and/or its affiliates.

    Learn more about OceanBase at https://github.com/oceanbase/oceanbase
    Learn more about MiniOB at https://github.com/oceanbase/miniob

    )";

    prinf("%s\n", startup_tips);
    return 0;
}

// output: 
/*

    Welcome to the OceanBase database implementation course.

    Copyright (c) 2021 OceanBase and/or its affiliates.

    Learn more about OceanBase at https://github.com/oceanbase/oceanbase
    Learn more about MiniOB at https://github.com/oceanbase/miniob
    
                                                                                                 
*/

```
