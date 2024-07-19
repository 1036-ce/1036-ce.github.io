### 在CMake中使用AddressSanitizer

```cmake
add_executable(main main.cpp)
target_link_options(main PRIVATE -fsanitize=address)
target_compile_options(main PRIVATE -fsanitize=address)
```
