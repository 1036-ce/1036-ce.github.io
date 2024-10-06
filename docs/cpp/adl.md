## ADL(Argument Dependent Lookup)

ADL：参数相关查找. 它允许编译器在遇到函数调用时，根据函数参数的类型去
函数参数类型所在的命名空间中查找函数定义.

### example code

```cpp
namespace MyNamespace
{
    class MyClass {};
    void doSomething(MyClass) {}
}

MyNamespace::MyClass obj; // global object

int main()
{
    doSomething(obj); // Works Fine - MyNamespace::doSomething() is called.
}
```

ADL tells the compiler to not just look at the local scope, but also the **namespaces that
contain the argument's type**. Thus, in the above code, the compiler finds that the object 
`obj`, which is the argument of the function `doSomething()`, belongs to the namespace 
`MyNamespace`. So, it looks at that namespace to locate the declration of `doSomething`.

### ADL的问题

考虑以下两个例子

```cpp
std::swap(obj1, obj2);
```

```cpp
using std::swap;
swap(obj1, obj2);
```

其中，`obj1` `obj2`都是`namespace A`中`class MyClass`的实例, 
如果`std::swap(A::MyClass&, A::MyClass&)`和`A::swap(MyClass&, MyClass&)`都被定义，
那么第一个例子将会产生一个对`std::swap()`的调用，而第二个例子会编译失败.

```cpp
namespace MyNamespace
{
    class MyClass {};
    void doSomething(MyClass) {}
	void swap(MyClass& lhs, MyClass& rhs) {
		std::cout << "aaa" << std::endl;
	}
}

namespace std {
	void swap(MyNamespace::MyClass& lhs, MyNamespace::MyClass& rhs) {
		std::cout << "aaa" << std::endl;
	}
}

// MyNamespace::MyClass obj; // global object

int main() {
	MyNamespace::MyClass a, b;
	using std::swap;
	swap(a, b);
}
```

### refrence
> [stackoverflow](https://stackoverflow.com/questions/8111677/what-is-argument-dependent-lookup-aka-adl-or-koenig-lookup)
