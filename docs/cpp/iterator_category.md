## 迭代器类别

cpp标准库定义了6种迭代器类别

### 输入迭代器(Input Iterator)

- 只读访问容器中的元素。
- 只能单向移动（向前）。
- 适用于一次性遍历，如从输入流读取数据。
- 支持操作：==, !=, *, ->, ++（前置和后置）。

### 输出迭代器(Output Iterator)

- 只写访问容器中的元素。
- 只能单向移动（向前）。
- 适用于一次性写入，如输出到输出流。
- 支持操作：*（仅用于赋值），++（前置和后置）。

### 前向迭代器(Forward Iterator)

- 既可以读也可以写访问容器中的元素。
- 只能单向移动（向前）。
- 可以多次遍历同一范围的元素。
- 支持操作：==, !=, *, ->, ++（前置和后置）。

### 双向迭代器(Bidirectional Iterator)

- 既可以读也可以写访问容器中的元素。
- 可以双向移动（向前和向后）。
- 适用于链表等双向结构。
- 支持操作：==, !=, *, ->, ++（前置和后置），--（前置和后置）。

### 随机访问迭代器(Random Access Iterator)

- 既可以读也可以写访问容器中的元素。
- 可以双向移动，并且可以直接跳转到任意元素。
- 适用于数组、向量等随机访问结构。
- 支持操作：==, !=, *, ->, ++（前置和后置），--（前置和后置），+, -, +=, -=, []。

### 连续迭代器(Contiguous Iterator)

c++20新增的迭代器类别
通过保证所表示的元素在**内存中连续存储**来完善 random_access_iterator 。

> [cppreference iterator_tags](https://en.cppreference.com/w/cpp/iterator/iterator_tags)
> [cppreference iterator_traits](https://en.cppreference.com/w/cpp/iterator/iterator_traits)
