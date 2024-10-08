## container's allocator copy

### copy constructor

allocator通过调用`std::allocator_traits<allocator_type>::select_on_container_copy_construction(other.get_allocator())`获得

```cpp
container(const container& other): alloc(std::allocator_traits<allocator_type>::select_on_container_copy_construction(other.get_allocator())) {}
```

### move constructor

通过正常的移动语义构造allocator, 一般不需要特殊处理

```cpp
vector(vector&&) = default;
```

### allocator-extended move constructor 

example:
```cpp
container(container&& other, const Allocator& alloc);
```

如果`alloc == other.get_allocator()`, 直接移动整个容器

如果`alloc != other.get_allocator()`, 要逐个元素移动

```cpp
container(container&& other, const Allocator& alloc) {
    if (alloc != other.get_allocator()) {
        // 逐个元素移动
    }
    else {
        // 直接移动整个元素
    }
}
```

### copy assignment operator

下面使用`pocca_v`表示`std::allocator_traits<allocator_type>::propagate_on_container_copy_assignment::value`

如果`pocca_v`为`true`, `this->allocator` 应被 `other.allocator` 的拷贝替换

如果替换后的`this.allocator`的新值(`new_allocator`)与旧值(`old_allocator`)不同, 则应该使用`old_allocator`析构元素并释放内存

然后由`new_allocator`重新分配内存。重新分配内存后，再执行元素的复制操作。


如果`pocca_v`为`false`, `this->allocator`保持不变

```cpp
container& operator(const container& other) {
    using pocca = std::allocator_traits<allocator_type>::propagate_on_container_copy_assignment;
    if (std::address_of(other) != this) {
        if (pocca::value) {
            if (this->allocator != other.allocator) {
                // 1. 使用old_allocator 析构元素、释放内存
                
                // 2. this->allocator = other.get_allocator()

                // 3. 使用allocator 重新分配内存（刚好能够装下other的所有元素）

                // 4. 从other中复制元素
                
                return *this;
            }
            // allocator = other.get_allocator()
        }
        /**
        * 如果other.size() == size(), 逐个元素复制即可
        * 如果other.size() > size(), 可能需要使用allocator扩容（不一定，取决于实现）
        * 如果other.size() < size(), 先将other的元素逐个复制，然后将剩下的元素析构（是否回收内存取决于实现）
        **/
    }
    return *this;
}
```

### move assignment operator

下面使用`pocma_v`表示`std::allocator_traits<allocator_type>::propagate_on_container_move_assignment::value`

如果`pocma_v`为`true`, `this->allocator`应被`other.allocator`替换

如果`pocma_v`为`false`且`this->allocator != other.allocator`, 则必须逐个移动元素, `this->allocator`保持不变

```cpp
container& operator=(container&& other) {
    using pocma = std::allocator_traits<allocator_type>::propagate_on_container_move_assignment;
    if (std::address_of(other) != this) {
        if (!pocma::value && this.allocator != other.allocator) {
            // 1. 逐个移动元素

            // 2. 清空other
        }
        else {
            // 1. 元素整体移动

            // 2. this->allocator = std::move(other.allocator);
            
            // 3. 清空other
        }
    }
    return *this;
}
```

### swap

下面使用`pocsa_v`表示`std::allocator_traits<allocator_type>::propagate_on_container_swap::value`

如果`pocs_v`为`true`, 使用非成员(non-member)的非限定(unqualified)的`swap`交换`allocator`

如果`pocs_v`为`false`, 不交换`allocator`, 如果`this->get_allocator() != other.get_allocator()`, 是一个ub,
标准库的处理是直接终止程序

```cpp
// deque::swap 示例
void swap(deque& other) {
    using pocs = T_alloc_traits::propagate_on_container_swap;

    assert(pocs::value || get_T_allocator() == other.get_T_allocator());

    impl.swap_data(other.impl);

    if (pocs::value) {
        using std::swap;
        swap(get_T_allocator(), other.get_T_allocator());
    }
}
```

从上面代码可以看出，使用unqualified non-member swap的方法是:

```cpp
using std::swap
swap(obj1, obj2);
```
