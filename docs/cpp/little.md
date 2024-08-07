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
