## std::any

`std::any`是一个可以装入所有`copyable`类型的容器

### 成员函数

```cpp
// emplace
std::any a;
a.emplace<std::string>("123123");
assert(std::any_cast<std::string>(a) == std::string("123123"));

// reset
std::any a;
a.emplace<std::string>("123123");
a.reset();
assert(a.has_value() == false);

// swap
std::any a = std::make_any<std::string>("123123");
std::any b = std::make_any<int>(8);
a.swap(b);
assert(std::any_cast<int>(a) == 8);
assert(std::any_cast<std::string>(b) == std::string("123123"));

// has_value
std::any a;
a.emplace<std::string>("123123");
assert(a.has_value() == true);
a.reset();
assert(a.has_value() == false);

// type
std::any a = std::make_any<std::string>("123123");
assert(a.type() == typeid(std::string));
```

### 非成员函数

```cpp
// std::swap
// 与成员函数`swap`功能相同

// std::any_cast
std::any a = std::make_any<std::string>("123123");
assert(std::any_cast<std::string>(b) == std::string("123123"));

// std::make_any
std::any a = std::make_any<std::string>("123123");
assert(std::any_cast<std::string>(b) == std::string("123123"));
```
