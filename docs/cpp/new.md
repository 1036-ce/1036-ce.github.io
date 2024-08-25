## cpp's new operator

c++由三种`new`
- new operator: 偏顶层， 分配内存，同时在分配的内存调用构造函数进行初始化
- operator new: 底层，只分配内存，不初始化
- placement new: 底层，在分配好的内存上进行初始化

```cpp
Foo *p = new Foo();
```

上述`new`操作执行了如下三步：
1. 调用`operator new` 分配内存，大小等于`Foo`对象的大小
2. 调用`placement new`调用`Foo`构造函数，初始化对象
3. 返回指向该对象的指针


- new operator: 不可重载

- operator new: 可以重载，一般只在类中重载，重载时返回类型为`void*`，第一个参数类型为`size_t`，可以有第二、第N个参数
```cpp
class A {
public:
	A(int _a) : a(_a) {}
	void *operator new(std::size_t sz) {
		printf("222\n");
		void *ret = malloc(sz);
		return ret;
	}

private:
	int a;
};

int main() {
	// int *p = new int(1);
	A *p = new A(1);
}
```

- placement new: 不可重载

```cpp
// 在栈上
char buf[1024];
char *p = new (buf) char;
// 在堆上
char *buf = (char*)malloc(sizeof(char) * 1024);
char *p = new (buf) char;
```
