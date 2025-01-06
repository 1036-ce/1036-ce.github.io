## git

work tree 指工作区
index/stage 指暂存区

### `git add` 与 `git commit`

`git add`时，将对文件的**修改**从工作区添加到暂存区

`git commit`时，把暂存区内的所有修改提交到当前分支，同时清空暂存区

### 撤销工作区的修改

```
git checkout -- file    // 撤销单个文件的修改

git checkout .          // 撤销工作区所有的修改
```

### 撤销暂存区的修改

```
git reset HEAD file    // 撤销单个文件的修改, 将这些修改从暂存区移回工作区

git reset HEAD .       // 撤销暂存区的所有文件的修改, 将这些修改从暂存区移回工作区
```
