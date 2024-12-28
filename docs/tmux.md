## tmux

tmux 是C/S架构，分为client和server，日常使用时的tmux窗口是client

### tmux子命令

1. `new-session` or `new`

example: 
```sh
tmux new-session [-d] [-s session-name] [shell-command]
```

`-d` ：后台启动
`-s session-name`: session 名字
`shell-command`: 启动后执行的命令

2. `attach-session` or `attach`

启动一个client，并将`target session`attach到该client

example:
```sh
tmux attach-session [-d] [-t target-session-name]
tmux attach [-d] [-t target-session-name]
```

`-d`: 将`session`attach到该client时，其他attach到该`session`的client将被deattach
`-t target-session-name`: 想要attach的session 名字

4. `new-window` or `neww`

在现有session中创建一个新的`window`

example
```sh
tmux new-window [-d] [-S] [-n window-name] [shell-command]
```

`-d`: 创建一个新`window`, 但不跳转过去
`-S`: 如果已经有名为`window-name`, 不再创建新的`window`
`-n window-name`: window的名字
`shell-command`: 创建`window`执行的命令


