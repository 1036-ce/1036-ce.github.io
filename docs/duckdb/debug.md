1. gdb调试sqllogictests

```bash
gdb --args build/debug/test/unittest test/sql/projection/test_simple_projection.test
break query_break if line==43  # line为test文件中sql对应的行号
run
```
