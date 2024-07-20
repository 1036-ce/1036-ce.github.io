## std::tie

```cpp
template< class... Types >
std::tuple<Types&...> tie( Types&... args ) noexcept;
```

### 使用

```cpp
	int a = 1, b = 2, c = 3;

    // decltype(d) == std::tuple<int&, int&, int&>
	auto d = std::tie(a, b, c);
```

### 可用于`operator<`的定义

```cpp
struct S
{
    int n;
    std::string s;
    float d;
 
    friend bool operator<(const S& lhs, const S& rhs) noexcept
    {
        // compares lhs.n to rhs.n,
        // then lhs.s to rhs.s,
        // then lhs.d to rhs.d
        // in that order, first non-equal result is returned
        // or false if all elements are equal
        return std::tie(lhs.n, lhs.s, lhs.d) < std::tie(rhs.n, rhs.s, rhs.d);
    }
};
```
