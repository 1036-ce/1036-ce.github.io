## allocator_traits

### member types

#### propagate_on_container_copy_assignment

如果`Alloc::propagate_on_container_copy_assignment`存在，则等于它,
否则为`std::false_type`

表示在**容器**的**拷贝赋值(不是拷贝构造)**操作中，分配器是否应该从一个容器传播到另一个容器,
如果为`true_type`,则在执行拷贝操作时，会将分配器从赋值源容器传递给目标容器。
如果为`false_type`，则在执行拷贝操作时，不会将分配器从赋值源容器传递给目标容器。

#### propagate_on_container_move_assignment

如果`Alloc::propagate_on_container_move_assignment`存在，则等于它,
否则为`std::false_type`

表示在**容器**的**移动赋值**操作中，分配器是否应该从一个容器传播到另一个容器,
如果为`true_type`,则在执行移动操作时，会将分配器从赋值源容器传递给目标容器。
如果为`false_type`，则在执行移动操作时，不会将分配器从赋值源容器传递给目标容器。

#### propagate_on_container_swap

如果`Alloc::propagate_on_container_swap`存在，则等于它,
否则为`std::false_type`

表示在**容器**的**交换**操作中，分配器是否应该从一个容器传播到另一个容器,
如果为`true_type`,则在执行交换操作时，分配器会被交换
如果为`false_type`，则在执行交换操作时，分配器不会被交换。

```cpp

// 可能的std::vector::swap()实现
void swap(vector& other) {
    std::swap(data, other.data);
    std::swap(sz, other.sz);
    std::swap(cap, other.cap);

    if (std::allocator_traits<Alloc>::propagate_on_container_swap::value) {
        // by ADL to find swap
        swap(alloc, other.alloc);
    }
}

```

### member functions

#### select_on_container_copy_construction

函数原型
```cpp
static Alloc select_on_container_copy_construction(const Alloc& a);
```
所有的标准库容器在拷贝构造函数中需要复制`Allocator`时都调用了该函数，
**该函数允许`Allocator`类型意识到容器在被复制，并在需要时修改自身的状态。**

如果`Allocator`类型实现了该函数，则调用该函数得到`a`的拷贝构造版本。
否则，直接返回`a`

> [cppreference](https://en.cppreference.com/w/cpp/memory/allocator_traits/select_on_container_copy_construction)
