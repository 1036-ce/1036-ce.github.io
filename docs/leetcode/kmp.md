## kmp 算法

kmp算法分为两个主要步骤1. 构建`next`数组，2. 使用`next`数组进行查找

```cpp
// 1. 构建next数组
vector<int> build_next(const string& target) {
    int n = target.size();
    vector<int> next(n, -1);
    for (int i = 1; i < n; ++i) {
        int j = next[i - 1];
        while (j >= 0 && target[j] == target[i - 1]) {
            j = next[j];
        }
        next[i] = j + 1;
    }
    return next;
}
```

### next数组的属性

`next[0]`一定为`-1`, 表示如果在0处不匹配，需要将`str`的查找位置向右移动1位

其他元素一定大于等于0，表示如果在此处不匹配，需要将`target`的查找位置移动到`next[i]`处

也就是说`target`字符串的 `[0, next[i])` 和 `[i - next[i], i)` 的子串一定相同

```cpp
// 2. 使用next数组进行查找
// 返回`target`在`str`第一次出现的位置，如果没有，返回-1
int search(const string& str, const string& target) {
    vector<int> next = build_next(target);
    int pos = 0;
    int ret = -1;
    for (int i = 0; i < str.size(); ++i) {
        if (str[i] == target[pos]) {
            ++pos;
            if (pos == target.size()) {
                ret = i - target.size() + 1;
                break;
            }
        }
        else {
            pos = next[pos];
            while (pos >= 0 && str[i] != target[pos]) {
                pos = next[pos];
            }
            ++pos;
        }
    }
    return ret;
}
```
