## constexpr

`constexpr` 在c++11中被引进，可以用于修饰变量，普通函数，构造函数，析构函数四种实体.
通过使用 constexpr，可以确保某些计算在编译阶段完成，从而提高程序的效率。

### constexpr 变量

```cpp
constexpr int square(int x) {
    return x * x;
}

constexpr int result = square(5); // result 是一个编译时常量，值为25
```
上述代码中的`result`被`constexpr`修饰，表明它是一个编译时常量，`result`的值在编译时计算

### constexpr 普通函数

**`constexpr`函数默认是`inline`的**

```cpp
constexpr int square(int x) {
    return x * x;
}

constexpr int r1 = square(5); // r1 是一个编译时常量，值为25

int x;
std::cin >> x;
int r2 = square(x) // r2，x都不是编译时常量，也可以用来调用constexpr函数
```

`constexpr`函数的参数即可以是编译时常量，也可以不是编译时常量
如果参数为编译时常量，函数在编译时执行，否则在运行时执行

在c++14及之前，`constexpr`函数只能有一个`return`语句，不能有任何其他语句
c++14之后，移除了上述限制，不过`constexpr`函数仍然不能包含：
1. goto语句
2. 带有除了`case`和`default`之外标签的语句
```cpp
constexpr int square(int x) {
	switch (x) {
	case 1: {
		return x + x;
	}
	default: return 3;
	}
}
```
3. try block

在c++20之前，`constexpr`函数不能是虚函数，也不能是[function try block](https://1036-ce.github.io/docs/cpp/function_try_block)
