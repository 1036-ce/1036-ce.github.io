## std::variant : a more perfect union

```cpp
// in c++14 without std::variant
struct Staff {
    union Data {
        int i;
        double d;
        string s;
    } data;
    enum Type { INT, DOUBLE, STRING } type;
};

// in c++17 with std::variant
struct Staff {
    std::variant<int, double, string> data;
};
```

### 成员函数

```cpp
// index()
std::variant<int, double, std::string> data;
data = 1;           // data.index() == 0
std::cout << data.index() << std::endl;
data = 1.f;         // data.index() == 1
std::cout << data.index() << std::endl;
data = "123123";    // data.index() == 2
std::cout << data.index() << std::endl;

// valueless_by_exception()

// emplace()
std::variant<int, double, std::string> data;
data.emplace<int>(33);
std::cout << std::get<int>(data) << std::endl;
data.emplace<0>(22);
std::cout << std::get<int>(data) << std::endl;

// swap()
std::variant<int, double, std::string> data, 
std::variant<int, double, std::string> tmp;     // here, tmp is initialized as int value, so tmp == 0
data.emplace<1>(33.f);
std::cout << std::get<double>(data) << std::endl;   // 33
std::cout << std::get<0>(tmp) << std::endl;         // 0
// ===============
data.swap(tmp);
// ===============
std::cout << std::get<double>(tmp) << std::endl;    // 33
std::cout << std::get<0>(data) << std::endl;        // 0
```

### 非成员函数

```cpp
// std::get
std::variant<int, double, std::string> data;
data = "123123"
std::get<2>(data);              // "123123"
std::get<std::string>(data);    // "123123"

// throw an error
std::get<1>(data)
// throw an error
std::get<int>(data)
```

```cpp
// std::get_if()
// 参数为std::variant类型变量的指针
// 返回指向值的指针，出错时返回nullptr

std::variant<int, double, std::string> data;
data = 12;
auto p1 = std::get_if<2>(&data);
assert(p1 == nullptr);
auto p2 = std::get_if<int>(&data);
assert(*p2 == 12);
```

```cpp
// std::visit()

using var_t = std::variant<int, double, std::string>;
std::variant<int, double, std::string> data;
data = "123123";

std::visit([](auto &&arg) { std::cout << arg << std::endl; }, data);

var_t val = std::visit([](auto &&arg) -> var_t { return arg + arg; }, data);

std::cout << std::get<std::string>(val) << std::endl;

std::visit(
    [](auto &&v) {
        using T = std::remove_cvref_t<decltype(v)>;

        if constexpr (std::is_same_v<T, int>) {
            std::cout << "value is an integer: " << v << std::endl;
        } else if constexpr (std::is_same_v<T, double>) {
            std::cout << "value is a double: " << v << std::endl;
        } else {
            std::cout << "testet" << std::endl;
        }
    },
    ret);
```

```cpp
// holds_alternative<typename T>(std::variant)
// 检查是否一个std::variat类型的变量含有指定的类型的值

std::variant<int, std::string> v = "abc";
assert(std::holds_alternative<int>(v) == false);
assert(std::holds_alternative<std::string>(v) == true);
```
