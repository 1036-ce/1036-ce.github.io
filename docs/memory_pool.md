最近实现了一个基于freelist的内存池，在这里总结一下

首先介绍freelist:
freelist与linkedList非常像，不同之处在于freelist直接将next指针存储在value字段中
这意味着在freelist中的节点都是没有值的，只有一个指向像一个节点的指针,
这种结构十分适合用于管理内存池中的空闲内存块

![](./memory_pool.assets/1.png)
