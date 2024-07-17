[toc]

## 查看内存

gdb中`x`命令可用来查看内存

`x`命令格式为：`x/nfu <addr>`

- n为正整数，表示需要显示的内存单元个数
- f为格式
    - x：显示16进制
    - d：显示10进制
    - o：显示8进制
    - t：显示2进制
- u为显示的内存单元大小
    - b：1个字节
    - h：2个字节
    - w：4个字节
    - g：8个字节

也可以使用`x/s <addr>`显示字符串

## 查看寄存器

```gdb
i registers <reg>		//打印寄存器内容
```

## 设置命令行参数

```gdb
set args <argument>
# or
run <argument>
```

## 断点 (breakpoint)

### 条件断点
```gdb
# cond is short for condition
cond <breakpoint number> <conditional statement>

# example: 当断点2处的变量pos==2时停止执行
cond 2 pos==2
```

```gdb
# 查看断点信息
info b

# 禁用断点
disable <breakpoint number>

# 启用断点
enable <breakpoint number>

```

## watchpoint

1. `watch <expr>` : 当`<expr>`变化时，暂停执行
2. `rwatch <expr>` : 当`<expr>`被读时，暂停执行
3. `awatch <expr>` : 当`<expr>`被读或被写时，暂停执行
4. `info watchpoints` : 查看所有的`watchpoint`
5. `watch -location <expr>`: 
    对于普通的`watch`，在离开`expr`的作用域后，`watchpoint`会失效
    ```
    Watchpoint 3 deleted because the program has left the block in
    which its expression is valid.
    ```
    使用`-location`选项告诉gdb改为监视`expr`使用的内存，可以避免`watchpoint`失效
    不过，如果该内存被其他变量重用，该`watchpoint`可能会导致虚假通知


## [catchpoint](https://blog.csdn.net/qq_33726635/article/details/118368075)

用于捕获事件(抛出异常，加载动态库)
