
##  Git的常用操作概述
![](http://i.imgur.com/cnUlnFg.jpg)

###GitHub简介
   ![](http://i.imgur.com/F7ZOd2w.jpg)

   Git是一个分布式的版本控制系统，最初由Linus Torvalds编写，用作Linux内核代码的管理。在推出后，Git在其它项目中也取得了很大成功，尤其是在Ruby社区中。目前，包括Rubinius、Merb和Bitcoin在内的很多知名项目都使用了Git。Git同样可以被诸如Capistrano和Vlad the Deployer这样的部署工具所使用。注册
### 注册 
    要托管到github，那你就应该要有一个属于你自己的github帐号，所以你应该先到github.com注册
    打开浏览器
    在地址栏输入地址：github.com
    填写用户名、邮箱、密码
    点击Sign up即可简单地注册

***

   ![](http://i.imgur.com/QZrdk5w.png)
### 创建仓库
    完成注册，进入github平台，
    点击new repositories 
    新建一个新项目（你也可以加入到一个已有的项目）
    输入仓库名字，和仓库的描述
![](http://i.imgur.com/r9XzLbj.png)
### 记录项目地址
    点击右边栏的剪切板图标，记录下你的项目地址。

![](http://i.imgur.com/cszqjgV.png)
***

### 上传项目至GitHub
 ![](http://i.imgur.com/lNl4oF2.jpg)   
 1.首先你要在本地计算机中安装一个git客户端。你可以直接使用GitHub客户端，也可以用其他。因本人使用的是msysgit，所以这里以msysgit作为介绍（msysgit同样也是目前最为广泛及实用的工具之一）。打开msysgit.github.io下载并安装最新版本的msysgit安装完成后，进入到要托管的项目根目录，右键启动Git Bash命令行.

 2.输入git  clone  接着将先前记录下来的地址复制到后面，回车.

 3.将下载下来的项目文件夹的所有文件及文件夹，包括.git文件夹在内，全部拷贝到你的托管项目的根目录（或者将你的托管项目拷贝到该目录）cd test进入到该托管项目的根目录。

 4.输入git add .    将改动的地方添加到版本管理器.

 5.输入git  commit -m "changes log"  提交到本地的版本控制库里，引号里面是你对本次提交的说明信息。

 6.最后输入git push -u origin master  将你本地的仓库提交到你的github账号里，此时会要求你输入你的github的账号和密码。

 7.回到你的github.com中的项目页。里面的文件已经发生改变. 

  ![](http://i.imgur.com/VvnAdSy.png)
 
### 查看远程分支
***
>加上-a参数可以查看远程分支，远程分支会用红色表示出来（如果你开了颜色支持的话）：


*$ git branch -a
  master
  remote
  tungway
  v1.52
* zrong
  remotes/origin/master
  remotes/origin/tungway
  remotes/origin/v1.52
  remotes/origin/zrong*

###删除远程分支和tag


 在Git v1.7.0 之后，可以使用这种语法删除远程分支：

 $ git push origin --delete <branchName>
删除tag这么用：

git push origin --delete tag <tagname>

否则，可以使用这种语法，推送一个空分支到远程分支，其实就相当于删除远程分支：

git push origin :<branchName>
这是删除tag的方法，推送一个空tag到远程tag：

git tag -d <tagname>
git push origin :refs/tags/<tagname>
两种语法作用完全相同。

删除不存在对应远程分支的本地分支
***

####假设这样一种情况：

我创建了本地分支b1并pull到远程分支 origin/b1；
其他人在本地使用fetch或pull创建了本地的b1分支；
我删除了 origin/b1 远程分支；
其他人再次执行fetch或者pull并不会删除这个他们本地的 b1 分支，运行 git branch -a 也不能看出这个branch被删除了，如何处理？
使用下面的代码查看b1的状态：

*$ git remote show origin
* remote origin
  Fetch URL: git@github.com:xxx/xxx.git
  Push  URL: git@github.com:xxx/xxx.git
  HEAD branch: master
  Remote branches:
    master                 tracked
    refs/remotes/origin/b1 stale (use 'git remote prune' to remove)
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)*

   这时候能够看到b1是stale的，使用 git remote prune origin 可以将其从本地版本库中去除。

更简单的方法是使用这个命令，它在fetch之后删除掉没有与远程分支对应的本地分支：
***

####git fetch -p 重命名远程分支

>在git中重命名远程分支，其实就是先删除远程分支，然后重命名本地分支，再重新提交一个远程分支。


例如下面的例子中，我需要把 devel 分支重命名为 develop 分支：

*$ git branch -av
* devel                             752bb84 Merge pull request #158 from Gwill/devel
  master                            53b27b8 Merge pull request #138 from tdlrobin/master
  zrong                             2ae98d8 modify CCFileUtils, export getFileData
  remotes/origin/HEAD               -> origin/master
  remotes/origin/add_build_script   d4a8c4f Merge branch 'master' into add_build_script
  remotes/origin/devel              752bb84 Merge pull request #158 from Gwill/devel
  remotes/origin/devel_qt51         62208f1 update .gitignore
  remotes/origin/master             53b27b8 Merge pull request #138 from tdlrobin/master
  remotes/origin/zrong              2ae98d8 modify CCFileUtils, export getFileData*
### 删除远程分支：

#### $ git push --delete origin devel
*To git@github.com:zrong/quick-cocos2d-x.git*
 - [deleted]         devel
#### 重命名本地分支：

git branch -m devel develop
#### 推送本地分支：
***

*$ git push origin develop
Counting objects: 92, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (48/48), done.
Writing objects: 100% (58/58), 1.38 MiB, done.
Total 58 (delta 34), reused 12 (delta 5)
To git@github.com:zrong/quick-cocos2d-x.git
 * [new branch]      develop -> develop*
然而，在 github 上操作的时候，我在删除远程分支时碰到这个错误：


*$ git push --delete origin devel
remote: error: refusing to delete the current branch: refs/heads/devel
To git@github.com:zrong/quick-cocos2d-x.git
 ! [remote rejected] devel (deletion of the current branch prohibited)
error: failed to push some refs to 'git@github.com:zrong/quick-cocos2d-x.git'*
这是由于在 github 中，devel 是项目的默认分支。要解决此问题，这样操作：

进入 github 中该项目的 Settings 页面；
设置 Default Branch 为其他的分支（例如 master）；
重新执行删除远程分支命令。
把本地tag推送到远程

#### git push --tags
### 获取远程tag

### git fetch origin tag <tagname>
  ![](http://i.imgur.com/kQhFeni.jpg)
### 参考文章

>https://makandracards.com/makandra/621-git-delete-a-branch-local-or-remote

>http://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-both-locally-and-in-github

>http://www.cnblogs.com/deepnighttwo/archive/2011/06/18/2084438.html

>http://stackoverflow.com/questions/14040754/deleting-remote-master-branch-refused-due-to-being-current-branch

>http://weli.iteye.com/blog/1441582
###关联文章

>修改了SSH默认端口之后，如何配置git？
>
安装gitolite
>
>在CentOS上编译安装Ruby 1.9
>
>读写FREByteArray
>
>对RTMP视频流进行BitmapData.draw()出错的解决办法