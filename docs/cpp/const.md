## const

1. 如果`const`位于`*`的左侧，则指针指向的内容为只读

2. 如果`const`位于`*`的右侧，则指针本身为只读

**引用同理**

```cpp
int a = 12;
int b = 13;
const int *p1 = &a;
int const *p2 = &a;
int* const p3 = &a;
const int* const p4 = &a;

// *p1 = 13; error
// p1 = &b;  ok
// *p2 = 13; error
// p2 = &b;  ok
// *p3 = 13; ok
// p3 = &b;  error
// p4 = &b;  error
// *p4 = 13; error

``` 
