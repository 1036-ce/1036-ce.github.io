## 简介
`std::enable_if` 在c++-11中引入

```cpp
template <bool B, class T = void>
struct enable_if;
```
如果B为真，则enable_if会拥有一个`type`，而且`type == T`
如果B为假，则enable_if没有`type`

`std::enable_if`可以以多种形式使用：
1. 作为返回类型（不适用与构造函数和析构函数）
2. 作为附加的函数参数（不适用与运算符重载）
3. 作为类模板或函数模板参数

## 使用说明

**`std::enable_if`的主要功能是对模板进行条件限制，当为真时启用该模板，为假时禁用该模板**

下面依次介绍`std::enable_if`作为返回类型、函数参数、模板参数时的例子

### 作为返回类型

```cpp
template <typename T>
typename std::enable_if_t<std::is_integral_v<T>, T>
foo(T x) {
	std::cout << "foo int" << std::endl;
	return x * 2;
}

template <typename T>
typename std::enable_if_t<std::is_floating_point_v<T>, T>
foo(T x) {
	std::cout << "foo float" << std::endl;
	return x * 0.5;
}

int main(int argc, char *argv[]) {
	std::cout << foo(1) << std::endl;
	std::cout << foo(1.0) << std::endl;
}

/**
output:
foo int
2
foo float
0.5
*/
```

### 作为函数参数

```cpp
template <typename T>
T foo(T x, typename std::enable_if_t<std::is_integral_v<T>, int> = 0) {
	std::cout << "foo int" << std::endl;
	return x * 2;
}

template <typename T>
T foo(T x, typename std::enable_if_t<std::is_floating_point_v<T>, int> = 0) {
	std::cout << "foo float" << std::endl;
	return x * 0.5;
}

int main(int argc, char *argv[]) {
	std::cout << foo(1) << std::endl;
	std::cout << foo(1.0) << std::endl;
}

/**
output:
foo int
2
foo float
0.5
*/
```

### 作为模板参数

```cpp
template<typename T, std::enable_if_t<std::is_integral_v<T>, int> = 0>
T foo(T x) {
	std::cout << "foo int" << std::endl;
	return x * 2;
}

template<typename T, std::enable_if_t<std::is_floating_point_v<T>, int> = 0>
T foo(T x) {
	std::cout << "foo float" << std::endl;
	return x * 0.5;
}

int main(int argc, char *argv[]) {
	std::cout << foo(1) << std::endl;
	std::cout << foo(1.0) << std::endl;
}

/**
output:
foo int
2
foo float
0.5
*/
```
