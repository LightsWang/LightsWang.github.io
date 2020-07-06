---
title: githup 使用
date: 2020-07-06
tags:
 - githup
categories:
 - 笔记
---

<Boxx/>

## git 常用命令
### git config
- 用法：git config –global user.name “[name]”
- 用法：git config –global user.email “[email address]”
该命令将分别设置提交代码的用户名和电子邮件地址。

### git init
- 用法：git init [repository name]
该命令可用于创建一个新的代码库。

### git clone
- 用法：git clone [url]
该命令可用于通过指定的URL获取一个代码库。

### git add
- 用法：git add [file]
该命令可以将一个文件添加至stage(暂存区)。
- 用法：git add *
该命令可以将多个文件添加至stage(暂存区)。

### git commit
- 用法：git commit -m “[ Type in the commit message]”
该命令可以在版本历史记录中永久记录文件。

### git diff
- 用法：git diff
该命令可以显示尚未添加到stage的文件的变更。
- 用法：git diff –staged
该命令可以显示添加到stage的文件与当前最新版本之间的差异。
- 用法：git diff [first branch] [second branch]
该命令可以显示两个分支之间的差异。

### git reset
- 用法：git reset [file]
该命令将从stage中撤出指定的文件，但可以保留文件的内容。
- 用法：git reset [commit]
该命令可以撤销指定提交之后的所有提交，并在本地保留变更。
- 用法：git reset –hard [commit]
该命令将丢弃所有的历史记录，并回滚到指定的提交。
### git status
- 用法：git status
该命令将显示所有需要提交的文件。

### git rm
- 用法：git rm [file]
该命令将删除工作目录中的文件，并将删除动作添加到stage。

### git log
- 用法：git log
该命令可用于显示当前分支的版本历史记录。
- 用法：git log –follow[file]
该命令可用于显示某个文件的版本历史记录，包括文件的重命名。

### git show
- 用法：git show [commit]
该命令经显示指定提交的元数据以及内容变更。

### git tag
- 用法：git tag [commitID]
该命令可以给指定的提交添加标签。

### git branch
该命令将显示当前代码库中所有的本地分支。
- 用法：git branch [branch name]
该命令将创建一个分支。
- 用法：git branch -d [branch name]
该命令将删除指定的分支。

### git checkout
- 用法：git checkout [branch name]
你可以通过该命令切换分支。
- 用法：git checkout -b [branch name]
你可以通过该命令创建一个分支，并切换到新分支上。

### git merge
- 用法：git merge [branch name]
该命令可以将指定分支的历史记录合并到当前分支。

### git remote
- 用法：git remote add [variable name] [Remote Server Link]
你可以通过该命令将本地的代码库连接到远程服务器。

### git push
- 用法：git push [variable name] master
该命令可以将主分支上提交的变更发送到远程代码库。
- 用法：git push [variable name] [branch]
该命令可以将指定分支上的提交发送到远程代码库。
- 用法：git push –all [variable name]
该命令可以将所有分支发送到远程代码库。
- 用法：git push [variable name] :[branch name]
该命令可以删除远程代码库上的一个分支。

### git pull
- 用法：git pull [Repository Link]
该命令将获取远程服务器上的变更，并合并到你的工作目录。

### git stash
- 用法：git stash save
该命令将临时保存所有修改的文件。
- 用法：git stash pop
该命令将恢复最近一次stash（储藏）的文件。
- 用法：git stash list
该命令将显示stash的所有变更。
- 用法：git stash drop
该命令将丢弃最近一次stash的变更。

## GitHub Pages 的使用
>通俗来讲就是把静态文件部署在githup上，因此可以将自己的个人博客部署在githup pages上，githup pages也提供配置自己的域名

### 创建仓库
![图片alt](/img/githup-io.png)
<div>如图，仓库名字为xxx.github.io，其中xxx为你github的username</div>

### 部署
将已经打包编译过后的静态文件上传，当然也可以将代码和打包之后的文件一并上传，做法是另建一个分支存代码，可在项目中写两个脚本，发布的时候同时上传代码

### 配置自己的域名
在买到域名后，解析完成后，在Setting里面设置，等一下，还没完，有个坑，需要在本地建一个CANME的文件，内容写域名，如果没有这个文件，则每次提交代码的时候，设置好的域名会置空