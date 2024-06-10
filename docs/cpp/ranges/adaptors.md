## range adaptors

### views::all
包含一个`range`种的所有元素的`view`

```cpp
int main() {
    std::vector<int> vec{1,2,3,4,5};

    // here
	for (auto n: vec | all) {
		std::cout << n << " ";
	}
	return 0;
}
/**
output:

1 2 3 4 5

*/
```

### views::filter 
```cpp
int main() {
    std::vector<int> vec{1,2,3,4,5};

	auto even = [](int v) { return v % 2 == 0; };

	for (auto n: vec | filter(even)) {
		std::cout << n << " ";
	}
	return 0;
}
/**
output:

2 4 
*/
```

### views::transform

```cpp
int main() {
    std::vector<int> vec{1,2,3,4,5};

	auto doub = [](int v) { return v * 2; };

	for (auto n: vec | transform(doub)) {
		std::cout << n << " ";
	}
	return 0;
}

/**
output:
2 4 6 8 10
*/
```

### views::take

取前N个元素

```cpp
int main() {
    std::vector<int> vec{1,2,3,4,5};
    
	for (auto n: vec | take(2)) {
		std::cout << n << " ";
	}
	return 0;
}

/**
output:
1 2 
*/
```

### views::take_while

取满足条件的元素，直到第一次不满足条件

```cpp
int main() {
    std::vector<int> vec{1,2,3,4,5};

	auto tw = [](int v) { return v < 3; };
    
	for (auto n: vec | take_while(tw)) {
		std::cout << n << " ";
	}
	return 0;
}

/**
output:
1 2 
*/
```

### views::drop

跳过前N个元素


```cpp
int main() {
    std::vector<int> vec{1,2,3,4,5};

	for (auto n: vec | drop(2)) {
		std::cout << n << " ";
	}
	return 0;
}

/**
output:
3 4 5
*/
```

### views::drop_while

与`take_while`类似

```cpp
int main() {
    std::vector<int> vec{1,2,3,4,5};
    auto dw = [](int v) { return v < 3; };

    for (auto n: vec | drop_while(dw)) {
        std::cout << n << " ";
    }
    return 0;
}

/**
output:
3 4 5
*/
```

### views::join

展平一个`view`

```cpp
int main() {
	vector<vector<int>> v1{{1, 2}, {3, 4, 5}, {6}, {7, 8, 9, 10}};

    for (auto n: vec | join) {
        std::cout << n << " ";
    }
    return 0;
}

/**
output:
1 2 3 4 5 6 7 8 9 10
*/
```

### views::split

将一个`view`按照`delim`划分为多个子`view`

```cpp
int main() {
	auto print = [](const auto& view) {
		for (const auto ele : view) {
			std::cout << ele;
		}
		std::cout << std::endl;
	};

	auto s{"hello cpp 20"sv};
	auto delim{" "sv};
	for (auto word : s | split(delim)) {
        print(word);
	}
}
/**
output:

hello
cpp
20
*/
```

### views::lazy_split

功能和使用方法与`split`相同

不同：
1. `lazy_split`只有在实际访问元素时才执行分割操作

如果输入范围较小且需要频繁访问划分出的子`view`，使用`split`

如果输入范围较大且不需要频繁访问，使用`lazy_split`

### views::counted


```cpp
int main() {
    std::vector<int> vec{1,2,3,4,5};

    for (auto n: counted(vec.begin() + 1, 3)) {
        std::cout << n << " ";
    }
    return 0;
}

/**
output:
2 3 4
*/
```

### views::common


### views::reverse


```cpp
int main() {
    std::vector<int> vec{1,2,3,4,5};

    for (auto n: vec | reverse)) {
        std::cout << n << " ";
    }
    return 0;
}

/**
output:
5 4 3 2 1
*/
```

### views::elements


```cpp
int main() {
	std::vector<std::tuple<int, char, std::string>> vt {
		{1, ',', "11"},
		{2, '.', "22"},
		{3, '-', "33"},
		{4, '[', "44"},
	};

	for (auto n : vt | elements<0>) {
		std::cout << n << " ";
	}
    std::cout << std::endl;
	for (auto n : vt | elements<1>) {
		std::cout << n << " ";
	}
    std::cout << std::endl;
	for (auto n : vt | elements<2>) {
		std::cout << n << " ";
	}
    std::cout << std::endl;

	return 0;
}

/**
output:
1 2 3 4
, . - [
11 22 33 44
*/
```

### views::keys

```cpp
int main() {
	std::map<int, std::string> mp{
		{1,"11"},
		{2,"22"},
		{3,"33"},
		{4,"44"},
	};

	for (auto n : mp | keys) {
		std::cout << n << " ";
	}

    return 0;
}

/**
output:
1 2 3 4
*/
```

### views::values

```cpp
int main() {
	std::map<int, std::string> mp{
		{1,"11"},
		{2,"22"},
		{3,"33"},
		{4,"44"},
	};

	for (auto n : mp | values) {
		std::cout << n << " ";
	}

    return 0;
}

/**
output:
11 22 33 44
*/
```
