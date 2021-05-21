---
title: 👍Anaconda-Python-水漂浅探池深浅.
categories:
  - tools
tags:
  - Anaconda
  - Python
date: 2021-05-20 09:05:02
cover: https://i.loli.net/2021/05/20/jJcYbf6mIBnFwlM.jpg
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-05-21 10:41:39
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\tools\anaconda.md
 * @Description:
 * @!: *********************************************************************
-->

- [简介](#简介)
- [安装](#安装)
- [测试](#测试)
- [配置文件位置](#配置文件位置)
- [镜像加速&代理](#镜像加速代理)
- [修改依赖路径](#修改依赖路径)
- [PyTorch](#pytorch)
- [安装依赖](#安装依赖)
- [激活终端](#激活终端)
- [实例](#实例)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 简介

> anaconda 官网: https://www.anaconda.com/products/individual

> [请问大神们，pip install 和 conda install 有什么区别吗？](https://www.zhihu.com/question/395145313)

- 简单来说,它是 Python 的一个发行版,其中打包了很多附加工具,比如 `Jupyter`,`conda` 等等

  - 可以理解为 anaconda 内置了 python,所以设备上安装的其他 Python 环境完全可以卸载掉了

  - Python 一般会自带 pip 这个包管理器,anaconda 也不例外; 而且 anaconda 还带有另一个更强大的包管理器: `conda`

> 此文章很清晰的介绍了 Anaconda 的安装使用: https://zhuanlan.zhihu.com/p/75717350

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 安装

- 可以选择官网下载安装包安装,我这里是用的 `scoop `安装的

  - 下载->安装->配置环境变量->改变运行环境, 在 scoop 中一步就可以完成,很方便 (官方的库中没有这个软件,需要添加其他库,`dorado`)

  - 这样安装避免了很多麻烦和错误,非常推荐!

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 测试

- 一个很关键的步骤: `重启电脑`. 如果没重启的话,环境变量有可能不生效,肯定无法正常打开.

- 然后测试: 能显示出来东西就对了

  ```
  conda --version
  conda info
  ```

- 安装后开始菜单会出来这么几个东西:

  <img src="https://i.loli.net/2021/05/20/huxAGIKqRzfLw1B.png" alt="20210520093618" />

  第一个就是 anaconda 主体;二三是终端,不用管它;四和六是附带的第三方软件.

---

- 点第一个,会弹出几次黑框,然后出现下面面板就没问题了.

  <img src="https://i.loli.net/2021/05/20/gjLsbtl8XuP2Dxi.png" alt="20210520094007" />

- 报错,无法打开:

  1. 尝试管理员模式

  2. 检查系统是不是开了 http 代理 (挂-了-梯-子?),把 http 模式换成 PAC 模式试试,我遇到这个错误可以这样解决

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 配置文件位置

- Windows 中:

  - conda: `C:\Users\用户名\.condarc`

  - pip: `C:\Users\用户名\pip\pip.ini`

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 镜像加速&代理

> 清华镜像站给了教程: [Anaconda 镜像使用帮助](https://mirror.tuna.tsinghua.edu.cn/help/anaconda/)

- 添加进设置:

  <img src="https://i.loli.net/2021/05/20/LRMdx5KAIEvGpkg.png" alt="20210520095331" />

- 官方给的 https 协议的,会报错:

  ```
  PS D:\Game\Github\Blog-private> conda search cuda
  Loading channels: failed

  CondaHTTPError: HTTP 000 CONNECTION FAILED for url <https://mirrors.bfsu.edu.cn/anaconda/pkgs/main/win-64/repodata.json>
  Elapsed: -

  An HTTP error occurred when trying to retrieve this URL.
  HTTP errors are often intermittent, and a simple retry will get you on your way.
  'https://mirrors.bfsu.edu.cn/anaconda/pkgs/main/win-64'
  ```

  ***

- 找了半天教程,发现只有一篇有效: `https -> http`

  > [Anaconda 使用 conda 连接网络出现错误](https://segmentfault.com/q/1010000008668178)

  ```
  channels:
    - defaults
  show_channel_urls: true
  default_channels:
    - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
    - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
  custom_channels:
    conda-forge: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
    msys2: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
    bioconda: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
    menpo: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
    pytorch: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
    simpleitk: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  ```

---

- pip

  ```
  [global]
  index-url = http://mirrors.aliyun.com/pypi/simple/
  [install]
  trusted-host = mirrors.aliyun.com
  ```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 修改依赖路径

- conda 和 pip 共同的第三方依赖安装路径 (Anaconda 的依赖路径在其内部,不需要修改)

  ```
  ❯   python -m site
  sys.path = [
      'D:\\Game\\Github\\Blog-private',
      'D:\\Game\\Scoop\\apps\\anaconda3\\current\\python38.zip',
      'D:\\Game\\Scoop\\apps\\anaconda3\\current\\DLLs',
      'D:\\Game\\Scoop\\apps\\anaconda3\\current\\lib',
      'D:\\Game\\Scoop\\apps\\anaconda3\\current',
      'D:\\Game\\Scoop\\apps\\anaconda3\\current\\lib\\site-packages',
      'D:\\Game\\Scoop\\apps\\anaconda3\\current\\lib\\site-packages\\locket-0.2.1-py3.8.egg',
      'D:\\Game\\Scoop\\apps\\anaconda3\\current\\lib\\site-packages\\win32',
      'D:\\Game\\Scoop\\apps\\anaconda3\\current\\lib\\site-packages\\win32\\lib',
      'D:\\Game\\Scoop\\apps\\anaconda3\\current\\lib\\site-packages\\Pythonwin',
  ]
  USER_BASE: 'C:\\Users\\29845\\AppData\\Roaming\\Python' (exists)
  USER_SITE: 'C:\\Users\\29845\\AppData\\Roaming\\Python\\Python38\\site-packages' (doesn't exist)
  ENABLE_USER_SITE: False
  ```

> [pip install 默认安装路径修改](https://www.cnblogs.com/maggieq8324/p/12099068.html)

- 依赖路径

  ```
  python -m site
  ```

- 配置文件路径 (修改.py 文件)

  ```
  python -m site -help
  ```

- 修改配置文件(注意路径是'\',另外注意是否有转义字符,会导致出错)

  ```py
  # for distutils.commands.install
  # These values are initialized by the getuserbase() and getusersitepackages()
  # functions, through the main() function when Python starts.
  USER_SITE = "D:\Game\Scoop\persist\\anaconda3\Scripts"
  USER_BASE = "D:\Game\Scoop\persist\\anaconda3\site-packages"
  ```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# PyTorch

> [windows10 下安装 GPU 版 pytorch 简明教程](https://zhuanlan.zhihu.com/p/54350088)

> [PyTorch 官网](https://pytorch.org/get-started/locally)

> [利用 Conda 安装深度学习框架 Pytorch](https://zhuanlan.zhihu.com/p/106394476)

- 安装:

  - with CUDA 版本:

    ```
    conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch
    ```

    [下载并安装 CUDA (需要注册 NVIDIA)](https://developer.nvidia.com/cuda-zone)

  ***

  - 测试了一下,[`cuDNN Library`](https://developer.nvidia.com/cudnn)也是必须的,没配置的话会报错:

    ```
    RuntimeError: cuDNN error: CUDNN_STATUS_EXECUTION_FAILED
    ```

    解压,把`bin\`添加进 path

---

- 测试 (以下图方式进入 Open with python) :

  <img src="https://i.loli.net/2021/05/20/T1Q6di82UE3sKV7.png" alt="20210520190432" />

  测试下方命令就可以了

  ```
  import torch
  x = torch.rand(5, 3)
  print(x)
  ```

  ***

- 预期结果:

  ```
  tensor([[0.3380, 0.3845, 0.3217],
          [0.8337, 0.9050, 0.2650],
          [0.2979, 0.7141, 0.9069],
          [0.1449, 0.1132, 0.1375],
          [0.4675, 0.3947, 0.1426]])
  ```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 安装依赖

> [pip 和 conda 批量导出、安装组件(requirements.txt)](https://blog.csdn.net/chekongfu/article/details/83187591)

---

# 激活终端

```
conda init 终端名(powershell)
```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 实例

> 通过一段音频,合成相似声音的项目: [CorentinJ/Real-Time-Voice-Cloning](https://github.com/CorentinJ/Real-Time-Voice-Cloning)

- CUDA: on,可以看到 python 调用了 `CPU+GPU`

  <img src="https://i.loli.net/2021/05/21/kPiAlhCcUYmWZwd.png" alt="20210521102521" />

- 深度学习项目吃显存好离谱啊!

  <img src="https://i.loli.net/2021/05/21/mB2WXqxHsfRIwaJ.png" alt="20210521104118" />
