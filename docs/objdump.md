## objdump

objdump 用于显示可执行文件、目标文件、库和其他二进制文件的详细信息。
是一个GNU工具链中的强大工具，可以用于分析程序的二进制代码、调试信息、符号表

### 常用选项
1. -d / --disassemble

反汇编文件的所有可执行部分。它会将机器代码转换为汇编代码，这对于调试非常有用。
```bash
objdump -d <文件名>
```

2. -D / --disassemble-all
反汇编文件的所有部分，而不仅仅是可执行部分。

```bash
objdump -D <文件名>
```

3. -t / --syms / --symbols
显示文件中的符号表。符号表包含了所有符号的名称、地址和类型等信息。
```bash
objdump -t <文件名>
```

4. -S / --source
结合源代码和反汇编的机器代码一起显示（如果源代码可用）。这对于理解程序的执行逻辑非常有帮助。
```bash
objdump -S <文件名>
```

5. -h / --section-headers / --headers
显示文件的节头信息，包括每个节的大小、虚拟地址、偏移等信息。

```bash
objdump -h <文件名>
```

6. -x / --all-headers
显示文件的所有头信息，包括符号表、段表、程序头等。

```bash
objdump -x <文件名>
```

7. -r / --reloc
显示重定位信息。这对理解链接器是如何处理符号的有帮助。

```bash
objdump -r <文件名>
```

8. -p / --private-headers
显示与目标文件格式相关的专用信息。

```bash
objdump -p <文件名>
```

9. -g / --debugging
显示调试信息，这对于调试器开发或深入分析编译器输出很有帮助。

```bash
objdump -g <文件名>
```

10. -C / --demangle
使符号名变得更加易读，尤其是对C++符号进行解码。
```bash
objdump -C -t <文件名>
```

```bash

objdump -C -t <文件名>
```
