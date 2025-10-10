## make

```
targets: prerequisites
    command
    command
    command
```

`targets`是文件，以空格分割

`prerequisites`是文件，以空格分割，也被称为依赖项

`command`是用于创建`targets`的命令

`$@`是一个自动变量表示`targets`

`*`,`%`都是通配符，不要直接使用`*`,而是要包在`wildcard`函数中（因为在没有匹配项是，`*`不会被扩展而是保持原样），例如：

```
thing_wrong := *.o # Don't do this! '*' will not get expanded
thing_right := $(wildcard *.o)
```

### 自动变量

```make
hey: one two
	# Outputs "hey", since this is the target name
	echo $@

	# Outputs all prerequisites newer than the target
	echo $?

	# Outputs all prerequisites
	echo $^

	# Outputs the first prerequisite
	echo $<

	touch hey

one:
	touch one

two:
	touch two

clean:
	rm -f hey one two
```
