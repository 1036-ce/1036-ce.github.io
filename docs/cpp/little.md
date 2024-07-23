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
