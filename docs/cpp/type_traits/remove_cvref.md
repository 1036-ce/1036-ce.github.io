## remove_cvref

> [cppreference](https://en.cppreference.com/w/cpp/types/remove_cvref)

**去除类型的const，引用，右值**

### 可能的实现

```cpp
template<class T>
struct remove_cvref
{
    // cv : const and volatile
    using type = std::remove_cv_t<std::remove_reference_t<T>>;
};
```

### 测试
```cpp
#include <iostream>
#include <type_traits>

int main() {
	std::cout << std::is_same_v<std::remove_cvref_t<int>, int> << std::endl;
	std::cout << std::is_same_v<std::remove_cvref_t<const int>, int> << std::endl;
	std::cout << std::is_same_v<std::remove_cvref_t<const int &>, int> << std::endl;
	std::cout << std::is_same_v<std::remove_cvref_t<const int &&>, int> << std::endl;
	return 0;
}

/**
* output
* 1
* 1
* 1
* 1
*/
```
