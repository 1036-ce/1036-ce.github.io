## avx

### 基本格式

```txt
_mm[width]_[operation]_[datatype]
```

示例:
- `_mm256_add_ps`
    - _mm256: AVX, 256bit寄存器
    - add: 加法
    - ps: packed single (单精度浮点数，打包格式)


### datatype(数据类型)

#### 浮点数
- ps: packed single-precision float (float, 32位，打包多个)
- pd: packed double-precision float (double, 64位,打包多个)

```
_mm256_add_ps: 8个float相加
_mm256_add_pd: 4个double相加
```

#### 整数
- epi8 → packed signed int8
- epu8 → packed unsigned int8
- epi16 → packed signed int16
- epu16 → packed unsigned int16
- epi32 → packed signed int32
- epu32 → packed unsigned int32
- epi64 → packed signed int64
- epu64 → packed unsigned int64

### operation(操作) 
- add → 加法
- sub → 减法
- mul → 乘法
- div → 除法（仅浮点支持，整数要靠乘/移位替代）
- max / min → 最大 / 最小
- abs → 绝对值
- and / or / xor / andnot → 位运算
- cmpeq / cmpgt / cmplt → 比较（等于、大于、小于）
- load / store → 加载 / 存储
- loadu → unaligned（不要求地址对齐）
- load → aligned（要求地址对齐，性能更好）
