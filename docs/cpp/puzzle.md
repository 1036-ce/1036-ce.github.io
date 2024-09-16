1. cpp友元问题

`weak_ptr_base`是`weak_ptr`的基类，`enable_shared_from_this`是`weak_ptr_base`的友元
`weak_ptr_base`有一个私有成员函数`assign()`, `enable_shared_from_this`有一个`weak_ptr`类型
的成员`wp`, 在`enable_shared_from_this`的某个成员函数`fun`中，`wp`可以访问`weak_ptr_base`的
私有成员函数`assign`，为什么？如下:

```cpp
class enable_shared_from_this;

class weak_ptr_base {
// ......
private:
    void assign();

    friend class enable_shared_from_this;
};

class weak_ptr : public weak_ptr_base {
};

class enable_shared_from_this {
public:
    void fun() {
        wp.assign();   // why?
    }
private:
    weak_ptr wp;
};

```
