## 随机数

**随机数=随机数引擎+随机分布**

### 产生随机数

c++使用`std::random_device`产生随机数

### 随机数引擎

c++提供三种随机数引擎：linear_congruential_engine，mersenne_twister_engine,
subtract_with_carry_engine

第一种使用线性同余算法
第二种使用梅森旋转算法
第三种使用带进位的线性同余算法

第二种最好也最常用

### 随机数分布

使得产生的随机数服从某种统计学上的分布函数

标准库提供的分布有：

```cpp
// 均匀分布
std::uniform_int_distribution;
std::uniform_real_distribution;

// 伯努利分布

// 泊松分布

// 正态分布
std::normal_distribution;

// 抽样分布
```

### 代码示例
```cpp

// rand  = engine + distribution
int rand() {
	std::random_device rd;  // 产生随机数的设备
	std::mt19937 engine(rd());  // mt19937是梅森引擎的预定义参数的版本
	std::uniform_int_distribution<> distr(0, 1000);  // 使用均匀分布
	return distr(engine);
}

```
