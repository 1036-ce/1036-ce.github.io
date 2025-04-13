## shared memory

### POSIX 共享内存

常用函数：

```c
#include <sys/mman.h>
#include <sys/stat.h>   /* For mode constatns */
#include <fcntl.h>      /* For O_* constatns */
#include <unistd.h>     /* For ftruncate */

int shm_open(const char* name, int oflag, mode_t mode);
int shm_unlink(const char *name);
int ftruncate(int fd, off_t length);
void *mmap(void addr, size_t length, int prot, int flags, int fd, off_t offset);
int munmap(void addr, size_t length);
```

使用示例

```c 
#include <sys/mman.h>
#include <sys/stat.h>   /* For mode constatns */
#include <fcntl.h>      /* For O_* constatns */
#include <unistd.h>     /* For ftruncate */
#include <stdio.h>
#include <stdlib.h>

int main() {
  const char *name = "shm";
  int size = 4096;

  int fd = shm_open(name, O_CREAT | O_RDWR, 0666);
  if (fd == -1) {
    perror("shm_open");
    exit(1);
  }

  // 设置共享内存大小
  ftruncate(fd, size);

  char *ptr = (char*)mmap(NULL, size, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
  if (ptr == MAP_FAILED) {
    perror("mmap");
    exit(1);
  }

  /* Your code */

  munmap(ptr, size);
  close(fd);
  shm_unlink(name);
}
```

使用POSIX创建的共享内存以文件形式存在与`/dev/shm`中

因此也更容易与操作系统的`select`, `epool`机制结合

一般推荐使用POSIX共享内存

### System V 共享内存

常用函数：

```c
#include <sys/shm.h>

int shmget(key_t key, size_t size, int shmflg);
void* shmat(int shmid, const void* shmaddr, int shmflg);
int shmdt(const void* shmaddr);
int shmctl(int shmid, int op, struct shmid_ds *buf);
```

使用示例

```c 
#include <sys/shm.h>

int main() {
  // 创建
  int shmid = shmget(1234, SIZE, IPC_CREAT | 0666);
  void *ptr = shmat(shmid, NULL, 0);
  // 使用 ptr 通信
  // 清理
  shmdt(ptr);
  shmctl(shmid, IPC_RMID, NULL);
}
```
