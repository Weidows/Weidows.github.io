---
title: 👍Anaconda-Python-水漂浅探池深浅.
password: ""
tags:
  - Anaconda
  - Python
date: 2021-05-20 09:05:02
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/jJcYbf6mIBnFwlM.jpg
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-13 02:55:59
 * @FilePath: \Blog-private\source\_posts\others\python\anaconda.md
 * @Description:
 * @!: *********************************************************************
-->

1. [简介](#简介)
2. [安装](#安装)
3. [测试](#测试)
4. [配置文件位置](#配置文件位置)
5. [镜像加速-代理](#镜像加速-代理)
6. [修改依赖路径](#修改依赖路径)
7. [PyTorch](#pytorch)
8. [CUDA-cuDNN](#cuda-cudnn)
9. [导出-安装依赖](#导出-安装依赖)
10. [实例](#实例)
11. [终端](#终端)
   1. [激活终端](#激活终端)
   2. [环境不一致](#环境不一致)
   3. [更新依赖](#更新依赖)
   4. [报错](#报错)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 简介

> anaconda 官网: https://www.anaconda.com/products/individual

- 简单来说,它是 Python 的一个发行版,其中打包了很多附加工具,比如 `Jupyter`,`conda` 等等

  - 可以理解为 anaconda 内置了 python,所以设备上安装的其他 Python 环境完全可以卸载掉了

  - Python 一般会自带 pip 这个包管理器,anaconda 也不例外; 而且 anaconda 还带有另一个更强大的包管理器: `conda`

  > [请问大神们，pip install 和 conda install 有什么区别吗？](https://www.zhihu.com/question/395145313)

> 此文章很清晰的介绍了 Anaconda 的安装使用: https://zhuanlan.zhihu.com/p/75717350

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 安装

- 可以选择官网下载安装包安装,我这里是用的 `scoop `安装的

  - 下载->安装->配置环境变量->改变运行环境, 在 scoop 中一步就可以完成,很方便 (官方的库中没有这个软件,需要添加其他库,`dorado`)

  - 这样安装避免了很多麻烦和错误,非常推荐!

  ***

- 小毛病

  anaconda 会把 scoop 里的环境识别为两个 (但实际上就一个)

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/X7dTaEoHmbr6W29.png" alt="20211002190135" />

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 测试

- 一个很关键的步骤: `重启电脑`. 如果没重启的话,环境变量有可能不生效,肯定无法正常打开.

- 然后测试: 能显示出来东西就对了

  ```
  conda --version
  conda info
  ```

- 安装后开始菜单会出来这么几个东西:

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/huxAGIKqRzfLw1B.png" alt="20210520093618" />

  第一个就是 anaconda 主体;二三是终端,不用管它;四和六是附带的第三方软件.

---

- 点第一个,会弹出几次黑框,然后出现下面面板就没问题了.

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/gjLsbtl8XuP2Dxi.png" alt="20210520094007" />

- 报错,无法打开:

  1. 尝试管理员模式

  2. 检查系统是不是开了 http 代理 (挂-了-梯-子?),把 http 模式换成 PAC 模式试试,我遇到这个错误可以这样解决

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 配置文件位置

- Windows 中:

  - conda: `~\.condarc 和 .conda\`

  - pip: `~\pip\pip.ini`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 镜像加速-代理

> 清华镜像站给了教程: [Anaconda 镜像使用帮助](https://mirror.tuna.tsinghua.edu.cn/help/anaconda/)

- 通过 navigator 添加进设置,或者直接修改 ~/.condarc

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/LRMdx5KAIEvGpkg.png" alt="20210520095331" />

- <details>

    <summary> 如果官方给的 https 协议的,会报错 </summary>

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

  - 最近又发现一个导致此错误的问题: 挂-梯,关掉试试.

  </details>

---

- pip

  ```
  [global]
  index-url = http://mirrors.aliyun.com/pypi/simple/
  [install]
  trusted-host = mirrors.aliyun.com
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 修改依赖路径

> [pip install 默认安装路径修改](https://www.cnblogs.com/maggieq8324/p/12099068.html)

- anaconda 安装后默认情况下 pip/conda 的库会堆在 anaconda 里面(所以一般不用动了)

- 依赖路径

  ```
  python -m site
  ```

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

- 配置文件路径 (非必要不然不要修改,此处可以更改上面的 USER_BASE/USER_SITE,但实测并未生效)

  ```
  python -m site -help
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## PyTorch

> [windows10 下安装 GPU 版 pytorch 简明教程](https://zhuanlan.zhihu.com/p/54350088) \
> [PyTorch 官网](https://pytorch.org/get-started/locally) \
> [利用 Conda 安装深度学习框架 Pytorch](https://zhuanlan.zhihu.com/p/106394476)

- 安装 (with CUDA 版本):

  ```
  conda install pytorch==1.9.0 torchvision==0.10.0 torchaudio==0.9.0 cudatoolkit=11.3 -c pytorch -c conda-forge
  ```

  ***

- 测试 (以下图方式进入 `Open with python`) :

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/T1Q6di82UE3sKV7.png" alt="20210520190432" />

  测试下方命令就可以了

  ```
  import torch
  x = torch.rand(5, 3)
  print(x)
  ```

  ***

- 预期结果: (说明 pytouch 没得问题)

  ```
  tensor([[0.3380, 0.3845, 0.3217],
          [0.8337, 0.9050, 0.2650],
          [0.2979, 0.7141, 0.9069],
          [0.1449, 0.1132, 0.1375],
          [0.4675, 0.3947, 0.1426]])
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## CUDA-cuDNN

- 这两个是为了调用显卡性能,加速训练.

  需要注册 NVIDIA 账号才能下载.

  > [下载并安装 CUDA](https://developer.nvidia.com/cuda-zone)

  > [下载并安装 cuDNN Library](https://developer.nvidia.com/cudnn)

  ***

- 通过 scoop 安装 CUDA (很有可能安装有问题,即使安装成功也是不能使用的)

  ```
  scoop install cuda
  ```

  ***

- 测试了一下, cuDNN Library 也是必须的,没配置的话会报错:

  ```
  RuntimeError: cuDNN error: CUDNN_STATUS_EXECUTION_FAILED
  ```

  `配置方法`: 解压,把`bin\`添加进 path

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 导出-安装依赖

> [pip 和 conda 批量导出、安装组件(requirements.txt)](https://blog.csdn.net/chekongfu/article/details/83187591)

- 安装依赖

  ```
  pip install -r requirements.txt
  conda install --file requirements.txt (尽量不要用,有很多问题)
  conda env create -f env.yaml
  ```

- 导出依赖

  ```
  pip freeze > requirements.txt
  conda list -e > requirements.txt
  conda env export > env.yaml

  ```

- <details>

    <summary> conda/pip 导出的 requirement.txt 有可能有个问题 </summary>

  ***

  - pip 导出的,以及安装报错

    ```txt
    anaconda-client @ file:///C:/ci/anaconda-client_1624480273070/work
    anaconda-navigator==2.1.0
    anyio==3.3.4
    appdirs==1.4.4
    argon2-cffi @ file:///C:/ci/argon2-cffi_1613037959010/work
    async-generator @ file:///home/ktietz/src/ci/async_generator_1611927993394/work
    attrs @ file:///tmp/build/80754af9/attrs_1620827162558/work
    audioread==2.1.9
    Babel @ file:///tmp/build/80754af9/babel_1620871417480/work
    backcall @ file:///home/ktietz/src/ci/backcall_1611930011877/work
    backports.functools-lru-cache @ file:///tmp/build/80754af9/backports.functools_lru_cache_1618170165463/work
    backports.tempfile @ file:///home/linux1/recipes/ci/backports.tempfile_1610991236607/work
    backports.weakref==1.0.post1
    beautifulsoup4 @ file:///home/linux1/recipes/ci/beautifulsoup4_1610988766420/work
    bleach @ file:///tmp/build/80754af9/bleach_1626470256873/work
    brotlipy==0.7.0
    ```

    ```
    ❯ pip install -r .\pip-list.bak
    Looking in indexes: http://mirrors.aliyun.com/pypi/simple/
    Processing c:\ci\anaconda-client_1624480273070\work
    ERROR: Could not install packages due to an OSError: [Errno 2] No such file or directory: 'C:\\ci\\anaconda-client_1624480273070\\work'
    ```

    解决办法就是硬匹配所有 ` @ file:` 把后面的删掉.

    ***

  </details>

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 实例

> 通过一段音频,合成相似声音的项目: [CorentinJ/Real-Time-Voice-Cloning](https://github.com/CorentinJ/Real-Time-Voice-Cloning)

- CUDA: on,可以看到 python 调用了 `CPU+GPU`

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/kPiAlhCcUYmWZwd.png" alt="20210521102521" />

- 深度学习项目吃显存好离谱啊!

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/mB2WXqxHsfRIwaJ.png" alt="20210521104118" />

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 终端

### 激活终端

```
conda init 终端名(powershell)
```

---

### 环境不一致

- 之前遇到个问题苦恼了很久:

  有一个 py 脚本我想通过 bat 脚本调用执行,但是一直报错

  ```
  Traceback (most recent call last):
    File "D:\Game\Scoop\apps\anaconda3\current\lib\site-packages\urllib3\connectionpool.py", line 688, in urlopen
      conn = self._get_conn(timeout=pool_timeout)
    File "D:\Game\Scoop\apps\anaconda3\current\lib\site-packages\urllib3\connectionpool.py", line 280, in _get_conn
      return conn or self._new_conn()
    File "D:\Game\Scoop\apps\anaconda3\current\lib\site-packages\urllib3\connectionpool.py", line 979, in _new_conn
      raise SSLError(
  urllib3.exceptions.SSLError: Can't connect to HTTPS URL because the SSL module is not available.
  ```

  大致意思就是缺少依赖,但是我已经装好依赖了,而且通过 PowerShell 可以正常运行

- 后来突然想到是 python 环境没开:

  ```
  conda activate base
  ```

  事情不大,烦恼不小

---

### 更新依赖

```
conda update --all
```

---

### 报错

```console
╭─    D:\Repo\Weidows\python   master                              ✔  22:53:48  ─╮
╰─ python
Fatal Python error: init_import_site: Failed to import the site module
Python runtime state: initialized
ModuleNotFoundError: No module named 'site'

Current thread 0x00002a54 (most recent call first):
<no Python frame>
```

由于使用 scoop 安装的,我以为是我自己环境的错误,后来发现是因为安装脚本中 `persist` 软链接会导致 anaconda 内部错误

这个库 `anaconda3_chawyehsu` 给的我启发,虽然这个安装脚本也不并不很好用

于是我在自己库中添加了一个: https://github.com/Weidows-projects/scoop-3rd/blob/main/bucket/anaconda3.json
