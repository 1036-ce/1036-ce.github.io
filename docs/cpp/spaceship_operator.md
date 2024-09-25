## operator<=>: spaceship operator

### 返回值类型

`operator<=>`有三种返回类型（在设计之初有5种，`std::strong_equality`和`std::weak_equality`被删除)

1. `std::strong_ordering`
      不允许不可比较的值，即`a<b`, `a>b`, `a == b`中有且仅有一个为真
    - `std::strong_ordering::less`: 第一个操作数小于第二个操作数
    - `std::strong_ordering::equal`: 第一个操作数**等于**第二个操作数,
        具有可替代性，即如果`a==b`一定意味着`f(a)`等于`f(b)`
    - `std::strong_ordering::equivalent`: 与`equal`相同
    - `std::strong_ordering::greater`: 第一个操作数大于第二个操作数

2. `std::weak_ordering`
      不允许不可比较的值，即`a<b`, `a>b`, `a == b`中有且仅有一个为真
    - `std::weak_ordering::less`: 第一个操作数小于第二个操作数
    - `std::weak_ordering::equivalent`: 第一个操作数**等价于**第二个操作数, 
        不具有可替代性,即如果`a==b`并不意味着`f(a)`一定等于 ` f(b)`
    - `std::weak_ordering::greater`: 第一个操作数大于第二个操作数
3. `std::partial_ordering`
        允许不可比较的值，即`a<b`,`a>b`,`a == b`可以均为假
    - `std::partial_ordering::less`: 第一个操作数严格小于第二个操作数
    - `std::partial_ordering::equivalent`：第一个操作数**等价于**第二个操作数, 不具有可替代性，即如果`a==b`并不意味着`f(a)`一定等于`f(b)`
    - `std::partial_ordering::greater`: 第一个操作数严格大于第二个操作数
    - `std::partial_ordering::unordered`: 两个操作数之间不具有确定的大小关系


***

**当不使用`operator<=>`的`=default`实现，而是自定义时，`operator<=>`只生成四个比较操作符(<=, <, >, >=), 所以需要手动添加`operator==`函数，才能够生成完整的6个比较操作符**

```cpp
// Wrong example
struct Data {
	int a;
	int b;
	std::strong_ordering operator<=>(const Data& other) const {
        // custom implementation
	}
};

int main() {
	Data t1{.a = 1, .b = 2};
	Data t2{.a = 3, .b = 4};

	if (t1 < t2) {
		std::cout << "t1 < t2" << std::endl;
	}
	else if (t1 == t2) {    // error! 
		std::cout << "t1 == t2" << std::endl;
	}
	else if (t1 > t2){
		std::cout << "t1 > t2" << std::endl;
	}
	else {
		std::cout << "error" << std::endl;
	}
	return 0;
}

// Right example
struct Data {
	int a;
	int b;
	std::strong_ordering operator<=>(const Data& other) const {
        // custom implementation
	}

    bool operator==(const Data& other) const {
        // 
    }
};

int main() {
	Data t1{.a = 1, .b = 2};
	Data t2{.a = 3, .b = 4};

	if (t1 < t2) {
		std::cout << "t1 < t2" << std::endl;
	}
	else if (t1 == t2) {    // error! 
		std::cout << "t1 == t2" << std::endl;
	}
	else if (t1 > t2){
		std::cout << "t1 > t2" << std::endl;
	}
    else if (t1 != t2) {
		std::cout << "t1 != t2" << std::endl;
    }
	else {
		std::cout << "error" << std::endl;
	}
	return 0;
}
```
