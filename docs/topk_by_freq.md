## Misra–Gries 算法(找前K个出现频率最多的元素)

```cpp
vector<int> topk_by_freq(const vector<int>& nums, int k) {
  unordered_map<int, int> mp;
  for (const int& n: nums) {
    if (mp.count(n) > 0) {
      ++mp[n];
    }
    else if (mp.size() < k) {
      mp[n] = 1;
    }
    else {
      for (auto& [key, v]: mp) {
        if (--v == 0) {
          mp.erase(key);
        }
      }
    }
  }
  vector<int> ret;
  for (const auto& [key, _]: mp) {
    ret.push_back(key);
  }
  return ret;
};
```
