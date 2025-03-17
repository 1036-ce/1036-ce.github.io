## shuffle

`std::shuffle`随机排序给定范围内的元素, 时间复杂度O(N)

### usage

```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <random>
#include <vector>
 
int main()
{
    std::vector<int> v{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
 
    std::random_device rd;
    std::mt19937 g(rd());
 
    std::shuffle(v.begin(), v.end(), g);
 
    std::copy(v.begin(), v.end(), std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
}
```

### implement

内部实现使用Fisher-Yates洗牌算法

Fisher-Yates算法：
    
    每次从未处理的数据中随即选出一个数字，将该数字放在已处理的数据的尾部

```cpp
template<class RandomIt, class URBG>
void shuffle(RandomIt first, RandomIt last, URBG&& g)
{
    typedef typename std::iterator_traits<RandomIt>::difference_type diff_t;
    typedef std::uniform_int_distribution<diff_t> distr_t;
    typedef typename distr_t::param_type param_t;
 
    distr_t D;
    for (diff_t i = last - first - 1; i > 0; --i)
    {
        using std::swap;
        swap(first[i], first[D(g, param_t(0, i))]);
    }
}
```
