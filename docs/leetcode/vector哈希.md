## 一个简单的vector的hash实现

**左移6位 + 右移2位 + 当前值的hash** 再与总的hash进行异或

最终得到vector的hash

```cpp
uint64_t vector_hash(const vector<int>& vec) {
    uint64_t ret = vec.size();
    auto hasher = hash<int>();
    for (int n: vec) {
        ret ^= hasher(n) + (ret << 6) + (ret >> 2);
    }
    return ret;
}
```
