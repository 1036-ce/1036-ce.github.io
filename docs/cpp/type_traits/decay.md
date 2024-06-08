## decay

> [cppreference](https://en.cppreference.com/w/cpp/types/decay)

```cpp
template <typename T>
struct decay
```

1. 如果`T`是一个数组, `decay_t<T> == T*`
2. 如果`T`是一个函数，`decay_t<T> == std::add_pointer<T>::type`，即为对应的函数指针
3. 否则,`decay_t<T> == std::remove_cvref_t<T>`
