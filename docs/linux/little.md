### unzip解压中文乱码解决：

unzip -O CP936 xxx.zip (用GBK, GB18030也可以)

### 一次性fork多个子进程

```c 
  pid_t pid;
  for (int i = 0; i < 3; ++i) {
    pid = fork();
    if (pid == 0 || pid == -1) {
      break;
    }
  }

  // error handle
  if (pid == -1) {
    perror("fork");
    exit(1);
  }

  // child process
  if (pid == 0) {
    // do something
    exit(1)
  }

  // parent process
  // do something
```
