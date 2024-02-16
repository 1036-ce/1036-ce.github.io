# cmake and gtest

## 在cmake项目中集成gtest的示例

### 项目结构如下：

```sh
├── CMakeLists.txt
├── run.sh
├── src
│   ├── CMakeLists.txt
│   └── multiply
│       ├── CMakeLists.txt
│       ├── multiply.cpp
│       └── multiply.h
└── test
    ├── CMakeLists.txt
    └── multiply_test.cpp
```

### 根目录下的CMakeLists.txt

```cmake
cmake_minimum_required(VERSION 3.26)
project(MultiplyTest LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

enable_testing()

add_subdirectory(src)
add_subdirectory(test)
```



### src目录下的CMakeLists.txt

```cmake
add_subdirectory(multiply)
```

### src/multiply/multiply.h 

```cpp
int multiply(int a, int b);

float multiply(float a, float b);

double multiply(double a, double b);
```



### src/multiply/multiply.cpp

```cpp
#include "multiply.h"

int multiply(int a, int b)
{
    return a*b;
}

float multiply(float a, float b)
{
    return a*b;
}

double multiply(double a, double b)
{
    return a*b;
}

```



### src/multiply目录下的CMakeLists.txt

```cmake
add_library(multiply multiply.cpp)
```



### test目录下的CMakeLists.txt

```cmake
find_package(GTest REQUIRED)

if (!GTest_FOUND)
	message(FATAL "GTest not found")
endif()

# 将我们写的tests编译成可执行文件
add_executable(multiply_test multiply_test.cpp)

# 把GTest和被测函数都链接到 可执行文件 上
target_link_libraries(multiply_test
 PRIVATE
  GTest::GTest
  multiply)

# 增加测试
add_test(multiply_gtests multiply_test)

```

### test/multiply_test.cpp

```cpp
#include "../src/multiply/multiply.h"
#include <gtest/gtest.h>

TEST(MultiplyTests, TestIntegerOne_One)
{
    const auto expected = 1;
    const auto actual = multiply(1, 1);
    ASSERT_EQ(expected, actual);
}

TEST(MultiplyTests, TestIntegerZero_Zero)
{
    const auto expected = 0;
    const auto actual = multiply(0, 0);
    ASSERT_EQ(expected, actual);
}

TEST(MultiplyTests, TestIntegerZero_One)
{
    const auto expected = 0;
    const auto actual = multiply(0, 1);
    ASSERT_EQ(actual, expected);
}

int main(int argc, char** argv)
{
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}

```

