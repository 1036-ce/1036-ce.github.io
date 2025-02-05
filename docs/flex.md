## flex

[flex文档](https://westes.github.io/flex/manual/)

flex将输入文件分为三个区`definitions`, `rules`, `user code`, 使用`%%`分割

```txt
definitions
%%
rules
%%
user code
```

- flex支持c++的scanner

- `definitions`中`%top`块被放置在所有生成内容的顶部,可以有多个`%top`块，并且他们的输出顺序与出现的顺序相同

- 在`definitions`中可以通过`%option`指定选项, `option`可见[link](https://westes.github.io/flex/manual/Actions.html#Actions)

- 在`definitions`中指定的`%s`,`%x`指定启动条件(start conditions), [详见](https://westes.github.io/flex/manual/Start-Conditions.html#Start-Conditions) (十分重要)
