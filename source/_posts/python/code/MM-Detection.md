---
title: 🐳MM-Detection-Colab
password: ""
tags:
  - 深度学习
  - Colab
  - MMDetection
katex: false
comments: true
aside: true
date: 2022-06-07 17:06:50
cover: https://www.helloimg.com/images/2022/06/07/Zt0Zbz.jpg
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-04-20 23:11:24
 * @FilePath: \Blog-private\scaffolds\post.md
 * @Description:
 * @!: *********************************************************************
-->

## 序

- Colab 平台对于 `轻量级/边缘计算` 比较方便, 尤其是对这种教程性质的 notebook, 分享和运行都开箱即用

- 但另一方面:

  `因`: 免费版的 Colab 所给的硬件资源不是很稳定, 用太久的话会分不到 GPU, 虽然给的 GPU 肯定是比自己的开发机强很多, 但是跑大型项目肯定带不动 (而且 Colab 单次运行最多持续 6h, 一段时间没动作的话会断连, 断开后再过一阵 runtime 会被重置)

- `果`: 可以用它来学习下怎么搭环境以及一些小测试

  毕竟生产服务器申请不易 / 环境也不能乱动

  受系统和网络限制, 在开发机搭环境并不理想

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>


## 装环境

> 从安装到放弃到爬出坑 :( \
> 跟着这几篇装的环境:<sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup><sup id='cite_ref-3'>[\[3\]](#cite_note-3)</sup>, 有借鉴意义但是指导不明确 \
> 个人先跟着官方出的视频教程和 openbayes 上的 notebook 试了试水, 很深 <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>; 最后找到一个源库 tutorial-fork 的 colab-notebook <sup id='cite_ref-4'>[\[4\]](#cite_note-4)</sup> \

预先装上 cuda, cudnn (colab自带)

依赖链: `cuda -> pytorch -> mmcv-full -> mmdet`

每一步依赖前面环境的版本, 即使后面能装上也可能不适配, 任何一步有问题都 can't-run

![](https://www.helloimg.com/images/2022/06/06/ZtZpOm.png)


<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>



```python
# ====================可选, colab并不自带conda=====================
!conda create -n openmmlab -y
!conda activate openmmlab
!conda init
```

    /bin/bash: conda: command not found
    /bin/bash: conda: command not found
    /bin/bash: conda: command not found
    


```python
# ================== 一键装好环境 =======================
# 如果这里有问题可以重启一下内核: 代码执行程序 -> 重新启动代码执行程序

!python -m pip install --upgrade pip

# 注意对应机子配置: https://pytorch.org/
# install dependencies: (use cu111 because colab has CUDA 11.1)
%pip install torch==1.9.0+cu111 torchvision==0.10.0+cu111 -f https://download.pytorch.org/whl/torch_stable.html

# windows 平台不用装了, 一定会卡在这
# https://github.com/open-mmlab/mmcv/blob/master/README_zh-CN.md
%pip install mmcv-full -f https://download.openmmlab.com/mmcv/dist/cu111/torch1.9.0/index.html

# 与pip/conda同级的专门给mm-lab用的包管理器, 报错率很高
%pip install openmim

# 依赖 mmcv, 如果用mim装的话大概率有问题
%pip install mmsegmentation

# 后面要用到源码库的 config, 可选用源库安装
%pip install mmdet
# !rm -rf /content/mmdetection
!git clone https://github.com/open-mmlab/mmdetection.git
%cd mmdetection
# %pip install -e .

# 后续当前路径为 /content/mmdetection
```

    Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/
    Requirement already satisfied: pip in /usr/local/lib/python3.7/dist-packages (21.1.3)
    Collecting pip
      Downloading pip-22.1.2-py3-none-any.whl (2.1 MB)
    [K     |████████████████████████████████| 2.1 MB 4.8 MB/s 
    [?25hInstalling collected packages: pip
      Attempting uninstall: pip
        Found existing installation: pip 21.1.3
        Uninstalling pip-21.1.3:
          Successfully uninstalled pip-21.1.3
    Successfully installed pip-22.1.2
    Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/
    Looking in links: https://download.pytorch.org/whl/torch_stable.html
    Collecting torch==1.9.0+cu111
      Downloading https://download.pytorch.org/whl/cu111/torch-1.9.0%2Bcu111-cp37-cp37m-linux_x86_64.whl (2041.3 MB)
    [2K     [91m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m[91m╸[0m [32m2.0/2.0 GB[0m [31m81.2 MB/s[0m eta [36m0:00:01[0mtcmalloc: large alloc 2041348096 bytes == 0x2a2a000 @  0x7fdbaca001e7 0x4a3940 0x4a39cc 0x592b76 0x4df71e 0x59afff 0x515655 0x549576 0x593fce 0x511e2c 0x549576 0x593fce 0x511e2c 0x549576 0x593fce 0x511e2c 0x549576 0x593fce 0x511e2c 0x549576 0x593fce 0x511e2c 0x593dd7 0x511e2c 0x549576 0x593fce 0x548ae9 0x5127f1 0x549576 0x593fce 0x511e2c
    [2K     [91m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m[91m╸[0m [32m2.0/2.0 GB[0m [31m88.6 MB/s[0m eta [36m0:00:01[0mtcmalloc: large alloc 2551685120 bytes == 0x7c4f2000 @  0x7fdbaca01615 0x592b76 0x4df71e 0x59afff 0x515655 0x549576 0x593fce 0x511e2c 0x549576 0x593fce 0x511e2c 0x549576 0x593fce 0x511e2c 0x549576 0x593fce 0x511e2c 0x549576 0x593fce 0x511e2c 0x593dd7 0x511e2c 0x549576 0x593fce 0x548ae9 0x5127f1 0x549576 0x593fce 0x511e2c 0x549576 0x593fce
    tcmalloc: large alloc 2041348096 bytes == 0x2a2a000 @  0x7fdbaca001e7 0x4a3940 0x5b438c 0x5b46f7 0x59afff 0x515655 0x549576 0x593fce 0x511e2c 0x549576 0x593fce 0x511e2c 0x549576 0x4bcb19 0x59c019 0x595ef6 0x5fbece 0x594b72 0x548cc1 0x51566f 0x593dd7 0x548ae9 0x51566f 0x549576 0x593fce 0x548ae9 0x51566f 0x549576 0x593fce 0x548ae9 0x5127f1
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m2.0/2.0 GB[0m [31m858.4 kB/s[0m eta [36m0:00:00[0m
    [?25hCollecting torchvision==0.10.0+cu111
      Downloading https://download.pytorch.org/whl/cu111/torchvision-0.10.0%2Bcu111-cp37-cp37m-linux_x86_64.whl (23.2 MB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m23.2/23.2 MB[0m [31m38.2 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: typing-extensions in /usr/local/lib/python3.7/dist-packages (from torch==1.9.0+cu111) (4.2.0)
    Requirement already satisfied: pillow>=5.3.0 in /usr/local/lib/python3.7/dist-packages (from torchvision==0.10.0+cu111) (7.1.2)
    Requirement already satisfied: numpy in /usr/local/lib/python3.7/dist-packages (from torchvision==0.10.0+cu111) (1.21.6)
    Installing collected packages: torch, torchvision
      Attempting uninstall: torch
        Found existing installation: torch 1.11.0+cu113
        Uninstalling torch-1.11.0+cu113:
          Successfully uninstalled torch-1.11.0+cu113
      Attempting uninstall: torchvision
        Found existing installation: torchvision 0.12.0+cu113
        Uninstalling torchvision-0.12.0+cu113:
          Successfully uninstalled torchvision-0.12.0+cu113
    [31mERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.
    torchtext 0.12.0 requires torch==1.11.0, but you have torch 1.9.0+cu111 which is incompatible.
    torchaudio 0.11.0+cu113 requires torch==1.11.0, but you have torch 1.9.0+cu111 which is incompatible.[0m[31m
    [0mSuccessfully installed torch-1.9.0+cu111 torchvision-0.10.0+cu111
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mLooking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/
    Looking in links: https://download.openmmlab.com/mmcv/dist/cu111/torch1.9.0/index.html
    Collecting mmcv-full
      Downloading https://download.openmmlab.com/mmcv/dist/cu111/torch1.9.0/mmcv_full-1.5.2-cp37-cp37m-manylinux1_x86_64.whl (45.6 MB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m45.6/45.6 MB[0m [31m7.8 MB/s[0m eta [36m0:00:00[0m
    [?25hCollecting addict
      Downloading addict-2.4.0-py3-none-any.whl (3.8 kB)
    Requirement already satisfied: packaging in /usr/local/lib/python3.7/dist-packages (from mmcv-full) (21.3)
    Requirement already satisfied: numpy in /usr/local/lib/python3.7/dist-packages (from mmcv-full) (1.21.6)
    Collecting yapf
      Downloading yapf-0.32.0-py2.py3-none-any.whl (190 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m190.2/190.2 kB[0m [31m6.0 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: pyyaml in /usr/local/lib/python3.7/dist-packages (from mmcv-full) (3.13)
    Requirement already satisfied: opencv-python>=3 in /usr/local/lib/python3.7/dist-packages (from mmcv-full) (4.1.2.30)
    Requirement already satisfied: Pillow in /usr/local/lib/python3.7/dist-packages (from mmcv-full) (7.1.2)
    Requirement already satisfied: pyparsing!=3.0.5,>=2.0.2 in /usr/local/lib/python3.7/dist-packages (from packaging->mmcv-full) (3.0.9)
    Installing collected packages: yapf, addict, mmcv-full
    Successfully installed addict-2.4.0 mmcv-full-1.5.2 yapf-0.32.0
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mLooking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/
    Collecting openmim
      Downloading openmim-0.1.5.tar.gz (35 kB)
      Preparing metadata (setup.py) ... [?25l[?25hdone
    Requirement already satisfied: Click==7.1.2 in /usr/local/lib/python3.7/dist-packages (from openmim) (7.1.2)
    Collecting colorama
      Downloading colorama-0.4.4-py2.py3-none-any.whl (16 kB)
    Requirement already satisfied: requests in /usr/local/lib/python3.7/dist-packages (from openmim) (2.23.0)
    Collecting model-index
      Downloading model_index-0.1.11-py3-none-any.whl (34 kB)
    Requirement already satisfied: pandas in /usr/local/lib/python3.7/dist-packages (from openmim) (1.3.5)
    Requirement already satisfied: tabulate in /usr/local/lib/python3.7/dist-packages (from openmim) (0.8.9)
    Requirement already satisfied: markdown in /usr/local/lib/python3.7/dist-packages (from model-index->openmim) (3.3.7)
    Requirement already satisfied: pyyaml in /usr/local/lib/python3.7/dist-packages (from model-index->openmim) (3.13)
    Collecting ordered-set
      Downloading ordered_set-4.1.0-py3-none-any.whl (7.6 kB)
    Requirement already satisfied: python-dateutil>=2.7.3 in /usr/local/lib/python3.7/dist-packages (from pandas->openmim) (2.8.2)
    Requirement already satisfied: numpy>=1.17.3 in /usr/local/lib/python3.7/dist-packages (from pandas->openmim) (1.21.6)
    Requirement already satisfied: pytz>=2017.3 in /usr/local/lib/python3.7/dist-packages (from pandas->openmim) (2022.1)
    Requirement already satisfied: certifi>=2017.4.17 in /usr/local/lib/python3.7/dist-packages (from requests->openmim) (2022.5.18.1)
    Requirement already satisfied: idna<3,>=2.5 in /usr/local/lib/python3.7/dist-packages (from requests->openmim) (2.10)
    Requirement already satisfied: urllib3!=1.25.0,!=1.25.1,<1.26,>=1.21.1 in /usr/local/lib/python3.7/dist-packages (from requests->openmim) (1.24.3)
    Requirement already satisfied: chardet<4,>=3.0.2 in /usr/local/lib/python3.7/dist-packages (from requests->openmim) (3.0.4)
    Requirement already satisfied: six>=1.5 in /usr/local/lib/python3.7/dist-packages (from python-dateutil>=2.7.3->pandas->openmim) (1.15.0)
    Requirement already satisfied: importlib-metadata>=4.4 in /usr/local/lib/python3.7/dist-packages (from markdown->model-index->openmim) (4.11.4)
    Requirement already satisfied: typing-extensions>=3.6.4 in /usr/local/lib/python3.7/dist-packages (from importlib-metadata>=4.4->markdown->model-index->openmim) (4.2.0)
    Requirement already satisfied: zipp>=0.5 in /usr/local/lib/python3.7/dist-packages (from importlib-metadata>=4.4->markdown->model-index->openmim) (3.8.0)
    Building wheels for collected packages: openmim
      Building wheel for openmim (setup.py) ... [?25l[?25hdone
      Created wheel for openmim: filename=openmim-0.1.5-py2.py3-none-any.whl size=42503 sha256=a20baa555947a826ad1fb5c6b5c7282eb538ed92cf4e3dfec2f7eb3044005554
      Stored in directory: /root/.cache/pip/wheels/16/8b/e1/bdebbbc687aa50224a5ce46fe97a040a0c59f92b34bfc750b6
    Successfully built openmim
    Installing collected packages: ordered-set, colorama, model-index, openmim
    Successfully installed colorama-0.4.4 model-index-0.1.11 openmim-0.1.5 ordered-set-4.1.0
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mLooking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/
    Collecting mmsegmentation
      Downloading mmsegmentation-0.25.0-py3-none-any.whl (804 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m805.0/805.0 kB[0m [31m14.6 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: prettytable in /usr/local/lib/python3.7/dist-packages (from mmsegmentation) (3.3.0)
    Requirement already satisfied: packaging in /usr/local/lib/python3.7/dist-packages (from mmsegmentation) (21.3)
    Requirement already satisfied: matplotlib in /usr/local/lib/python3.7/dist-packages (from mmsegmentation) (3.2.2)
    Requirement already satisfied: numpy in /usr/local/lib/python3.7/dist-packages (from mmsegmentation) (1.21.6)
    Collecting mmcls>=0.20.1
      Downloading mmcls-0.23.1-py2.py3-none-any.whl (577 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m577.3/577.3 kB[0m [31m53.2 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: kiwisolver>=1.0.1 in /usr/local/lib/python3.7/dist-packages (from matplotlib->mmsegmentation) (1.4.2)
    Requirement already satisfied: cycler>=0.10 in /usr/local/lib/python3.7/dist-packages (from matplotlib->mmsegmentation) (0.11.0)
    Requirement already satisfied: pyparsing!=2.0.4,!=2.1.2,!=2.1.6,>=2.0.1 in /usr/local/lib/python3.7/dist-packages (from matplotlib->mmsegmentation) (3.0.9)
    Requirement already satisfied: python-dateutil>=2.1 in /usr/local/lib/python3.7/dist-packages (from matplotlib->mmsegmentation) (2.8.2)
    Requirement already satisfied: wcwidth in /usr/local/lib/python3.7/dist-packages (from prettytable->mmsegmentation) (0.2.5)
    Requirement already satisfied: importlib-metadata in /usr/local/lib/python3.7/dist-packages (from prettytable->mmsegmentation) (4.11.4)
    Requirement already satisfied: typing-extensions in /usr/local/lib/python3.7/dist-packages (from kiwisolver>=1.0.1->matplotlib->mmsegmentation) (4.2.0)
    Requirement already satisfied: six>=1.5 in /usr/local/lib/python3.7/dist-packages (from python-dateutil>=2.1->matplotlib->mmsegmentation) (1.15.0)
    Requirement already satisfied: zipp>=0.5 in /usr/local/lib/python3.7/dist-packages (from importlib-metadata->prettytable->mmsegmentation) (3.8.0)
    Installing collected packages: mmcls, mmsegmentation
    Successfully installed mmcls-0.23.1 mmsegmentation-0.25.0
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mLooking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/
    Collecting mmdet
      Downloading mmdet-2.25.0-py3-none-any.whl (1.4 MB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m1.4/1.4 MB[0m [31m21.1 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: matplotlib in /usr/local/lib/python3.7/dist-packages (from mmdet) (3.2.2)
    Requirement already satisfied: pycocotools in /usr/local/lib/python3.7/dist-packages (from mmdet) (2.0.4)
    Requirement already satisfied: six in /usr/local/lib/python3.7/dist-packages (from mmdet) (1.15.0)
    Collecting terminaltables
      Downloading terminaltables-3.1.10-py2.py3-none-any.whl (15 kB)
    Requirement already satisfied: numpy in /usr/local/lib/python3.7/dist-packages (from mmdet) (1.21.6)
    Requirement already satisfied: pyparsing!=2.0.4,!=2.1.2,!=2.1.6,>=2.0.1 in /usr/local/lib/python3.7/dist-packages (from matplotlib->mmdet) (3.0.9)
    Requirement already satisfied: kiwisolver>=1.0.1 in /usr/local/lib/python3.7/dist-packages (from matplotlib->mmdet) (1.4.2)
    Requirement already satisfied: python-dateutil>=2.1 in /usr/local/lib/python3.7/dist-packages (from matplotlib->mmdet) (2.8.2)
    Requirement already satisfied: cycler>=0.10 in /usr/local/lib/python3.7/dist-packages (from matplotlib->mmdet) (0.11.0)
    Requirement already satisfied: typing-extensions in /usr/local/lib/python3.7/dist-packages (from kiwisolver>=1.0.1->matplotlib->mmdet) (4.2.0)
    Installing collected packages: terminaltables, mmdet
    Successfully installed mmdet-2.25.0 terminaltables-3.1.10
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mCloning into 'mmdetection'...
    remote: Enumerating objects: 24927, done.[K
    remote: Counting objects: 100% (11/11), done.[K
    remote: Compressing objects: 100% (10/10), done.[K
    remote: Total 24927 (delta 2), reused 8 (delta 1), pack-reused 24916[K
    Receiving objects: 100% (24927/24927), 37.75 MiB | 31.35 MiB/s, done.
    Resolving deltas: 100% (17469/17469), done.
    /content/mmdetection
    


```python
# 验证安装
!nvcc -V
!pip list | grep mm

from mmcv import collect_env
collect_env()
```

    nvcc: NVIDIA (R) Cuda compiler driver
    Copyright (c) 2005-2020 NVIDIA Corporation
    Built on Mon_Oct_12_20:09:46_PDT_2020
    Cuda compilation tools, release 11.1, V11.1.105
    Build cuda_11.1.TC455_06.29190527_0
    community                     1.0.0b1
    googleapis-common-protos      1.56.2
    mmcls                         0.23.1
    mmcv-full                     1.5.2
    mmdet                         2.25.0
    mmsegmentation                0.25.0
    pyviz-comms                   2.2.0
    snowballstemmer               2.2.0
    torchsummary                  1.5.1
    




    {'CUDA available': True,
     'CUDA_HOME': '/usr/local/cuda',
     'GCC': 'x86_64-linux-gnu-gcc (Ubuntu 7.5.0-3ubuntu1~18.04) 7.5.0',
     'GPU 0': 'Tesla T4',
     'MMCV': '1.5.2',
     'MMCV CUDA Compiler': '11.1',
     'MMCV Compiler': 'GCC 7.3',
     'NVCC': 'Cuda compilation tools, release 11.1, V11.1.105',
     'OpenCV': '4.1.2',
     'PyTorch': '1.9.0+cu111',
     'PyTorch compiling details': 'PyTorch built with:\n  - GCC 7.3\n  - C++ Version: 201402\n  - Intel(R) Math Kernel Library Version 2020.0.0 Product Build 20191122 for Intel(R) 64 architecture applications\n  - Intel(R) MKL-DNN v2.1.2 (Git Hash 98be7e8afa711dc9b66c8ff3504129cb82013cdb)\n  - OpenMP 201511 (a.k.a. OpenMP 4.5)\n  - NNPACK is enabled\n  - CPU capability usage: AVX2\n  - CUDA Runtime 11.1\n  - NVCC architecture flags: -gencode;arch=compute_37,code=sm_37;-gencode;arch=compute_50,code=sm_50;-gencode;arch=compute_60,code=sm_60;-gencode;arch=compute_70,code=sm_70;-gencode;arch=compute_75,code=sm_75;-gencode;arch=compute_80,code=sm_80;-gencode;arch=compute_86,code=sm_86\n  - CuDNN 8.0.5\n  - Magma 2.5.2\n  - Build settings: BLAS_INFO=mkl, BUILD_TYPE=Release, CUDA_VERSION=11.1, CUDNN_VERSION=8.0.5, CXX_COMPILER=/opt/rh/devtoolset-7/root/usr/bin/c++, CXX_FLAGS= -Wno-deprecated -fvisibility-inlines-hidden -DUSE_PTHREADPOOL -fopenmp -DNDEBUG -DUSE_KINETO -DUSE_FBGEMM -DUSE_QNNPACK -DUSE_PYTORCH_QNNPACK -DUSE_XNNPACK -DSYMBOLICATE_MOBILE_DEBUG_HANDLE -O2 -fPIC -Wno-narrowing -Wall -Wextra -Werror=return-type -Wno-missing-field-initializers -Wno-type-limits -Wno-array-bounds -Wno-unknown-pragmas -Wno-sign-compare -Wno-unused-parameter -Wno-unused-variable -Wno-unused-function -Wno-unused-result -Wno-unused-local-typedefs -Wno-strict-overflow -Wno-strict-aliasing -Wno-error=deprecated-declarations -Wno-stringop-overflow -Wno-psabi -Wno-error=pedantic -Wno-error=redundant-decls -Wno-error=old-style-cast -fdiagnostics-color=always -faligned-new -Wno-unused-but-set-variable -Wno-maybe-uninitialized -fno-math-errno -fno-trapping-math -Werror=format -Wno-stringop-overflow, LAPACK_INFO=mkl, PERF_WITH_AVX=1, PERF_WITH_AVX2=1, PERF_WITH_AVX512=1, TORCH_VERSION=1.9.0, USE_CUDA=ON, USE_CUDNN=ON, USE_EXCEPTION_PTR=1, USE_GFLAGS=OFF, USE_GLOG=OFF, USE_MKL=ON, USE_MKLDNN=ON, USE_MPI=OFF, USE_NCCL=ON, USE_NNPACK=ON, USE_OPENMP=ON, \n',
     'Python': '3.7.13 (default, Apr 24 2022, 01:04:09) [GCC 7.5.0]',
     'TorchVision': '0.10.0+cu111',
     'sys.platform': 'linux'}



<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 测试



```python
# mim 也可以用来search/download,不过 doc 在捉迷藏..不知道怎么用
# https://github.com/open-mmlab/mmdetection/tree/master/configs/mask_rcnn
# 跟教程一样的命令...失效了?
# !mim search mmdet --model 'mask r-cnn'
# !mim download mmdet --config mask_rcnn_r50_fpn_2x_coco --dest ./_model

# 下载并分别测试下面两个 pre-trained model-checkpoints
!mkdir checkpoints
!wget -c https://download.openmmlab.com/mmdetection/v2.0/mask_rcnn/mask_rcnn_r50_fpn_2x_coco/mask_rcnn_r50_fpn_2x_coco_bbox_mAP-0.392__segm_mAP-0.354_20200505_003907-3e542a40.pth \
      -O checkpoints/mask_rcnn_r50_fpn_2x_coco_bbox_mAP-0.392__segm_mAP-0.354_20200505_003907-3e542a40.pth
!wget -c https://download.openmmlab.com/mmdetection/v2.0/faster_rcnn/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco_20210526_095054-1f77628b.pth \
      -O checkpoints/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco_20210526_095054-1f77628b.pth

```

    --2022-06-07 15:03:24--  https://download.openmmlab.com/mmdetection/v2.0/mask_rcnn/mask_rcnn_r50_fpn_2x_coco/mask_rcnn_r50_fpn_2x_coco_bbox_mAP-0.392__segm_mAP-0.354_20200505_003907-3e542a40.pth
    Resolving download.openmmlab.com (download.openmmlab.com)... 47.252.96.28
    Connecting to download.openmmlab.com (download.openmmlab.com)|47.252.96.28|:443... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 177866862 (170M) [application/octet-stream]
    Saving to: ‘checkpoints/mask_rcnn_r50_fpn_2x_coco_bbox_mAP-0.392__segm_mAP-0.354_20200505_003907-3e542a40.pth’
    
    checkpoints/mask_rc 100%[===================>] 169.63M  8.23MB/s    in 22s     
    
    2022-06-07 15:03:47 (7.65 MB/s) - ‘checkpoints/mask_rcnn_r50_fpn_2x_coco_bbox_mAP-0.392__segm_mAP-0.354_20200505_003907-3e542a40.pth’ saved [177866862/177866862]
    
    --2022-06-07 15:03:48--  https://download.openmmlab.com/mmdetection/v2.0/faster_rcnn/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco_20210526_095054-1f77628b.pth
    Resolving download.openmmlab.com (download.openmmlab.com)... 47.252.96.28
    Connecting to download.openmmlab.com (download.openmmlab.com)|47.252.96.28|:443... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 167291982 (160M) [application/octet-stream]
    Saving to: ‘checkpoints/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco_20210526_095054-1f77628b.pth’
    
    checkpoints/faster_ 100%[===================>] 159.54M  9.11MB/s    in 18s     
    
    2022-06-07 15:04:06 (9.04 MB/s) - ‘checkpoints/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco_20210526_095054-1f77628b.pth’ saved [167291982/167291982]
    
    


```python
from mmdet.apis import init_detector, inference_detector, show_result_pyplot

config = 'configs/mask_rcnn/mask_rcnn_r50_fpn_2x_coco.py'
checkpoint = 'checkpoints/mask_rcnn_r50_fpn_2x_coco_bbox_mAP-0.392__segm_mAP-0.354_20200505_003907-3e542a40.pth'

# 在 CPU 上需要设置 device='cpu' ; GPU 上设置 device='cuda:0'
# 使用 mmdetection 源库自带的 demo/demo.jpg
model = init_detector(config, checkpoint, device='cuda:0') 
result = inference_detector(model, 'demo/demo.jpg')

show_result_pyplot(model, 'demo/demo.jpg', result)
```

    load checkpoint from local path: checkpoints/mask_rcnn_r50_fpn_2x_coco_bbox_mAP-0.392__segm_mAP-0.354_20200505_003907-3e542a40.pth
    

    /content/mmdetection/mmdet/datasets/utils.py:70: UserWarning: "ImageToTensor" pipeline is replaced by "DefaultFormatBundle" for batch inference. It is recommended to manually replace it in the test data pipeline in your config file.
      'data pipeline in your config file.', UserWarning)
    /usr/local/lib/python3.7/dist-packages/torch/nn/functional.py:718: UserWarning: Named tensors and all their associated APIs are an experimental feature and subject to change. Please do not use them for anything important until they are released as stable. (Triggered internally at  /pytorch/c10/core/TensorImpl.h:1156.)
      return torch.max_pool2d(input, kernel_size, stride, padding, dilation, ceil_mode)
    


    
![png](MM-Detection_files/MM-Detection_7_2.png)
    



```python
import mmcv
from mmcv.runner import load_checkpoint

from mmdet.apis import inference_detector, show_result_pyplot
from mmdet.models import build_detector

# Choose to use a config and initialize the detector
config = 'configs/faster_rcnn/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco.py'
# Setup a checkpoint file to load
checkpoint = 'checkpoints/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco_20210526_095054-1f77628b.pth'

# Set the device to be used for evaluation
device='cuda:0'

# Load the config
config = mmcv.Config.fromfile(config)
# Set pretrained to be None since we do not need pretrained model here
config.model.pretrained = None

# Initialize the detector
model = build_detector(config.model)

# Load checkpoint
checkpoint = load_checkpoint(model, checkpoint, map_location=device)

# Set the classes of models for inference
model.CLASSES = checkpoint['meta']['CLASSES']
# We need to set the model's cfg for inference
model.cfg = config
# Convert the model to GPU
model.to(device)
# Convert the model into evaluation mode
model.eval()

# Use the detector to do inference
img = 'demo/demo.jpg'
result = inference_detector(model, img)
# Let's plot the result
show_result_pyplot(model, img, result, score_thr=0.3)
```

    load checkpoint from local path: checkpoints/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco_20210526_095054-1f77628b.pth
    

    /content/mmdetection/mmdet/datasets/utils.py:70: UserWarning: "ImageToTensor" pipeline is replaced by "DefaultFormatBundle" for batch inference. It is recommended to manually replace it in the test data pipeline in your config file.
      'data pipeline in your config file.', UserWarning)
    /usr/local/lib/python3.7/dist-packages/torch/nn/functional.py:718: UserWarning: Named tensors and all their associated APIs are an experimental feature and subject to change. Please do not use them for anything important until they are released as stable. (Triggered internally at  /pytorch/c10/core/TensorImpl.h:1156.)
      return torch.max_pool2d(input, kernel_size, stride, padding, dilation, ceil_mode)
    


    
![png](MM-Detection_files/MM-Detection_8_2.png)
    


<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Custom-training

1. 选择+下载预训练模型和数据集

    参数解释: `mask_rcnn_r50_fpn_2x_coco`

    mask_rcnn 中不同的 backbone (主干网络)

    r50: 50层ResNet

    fpn: 特征金字塔

    2x: learning rate schedule

2. 定义数据集类 + config
3. 调用 API 训练 + 评估
4. 用训练好的模型推理测试



```python
# pre-trained model 在上面下载好了, 这里只下载数据集
!wget https://download.openmmlab.com/mmdetection/data/kitti_tiny.zip
!unzip kitti_tiny.zip > /dev/null

# Let's take a look at the dataset image
import mmcv
import matplotlib.pyplot as plt

img = mmcv.imread('kitti_tiny/training/image_2/000073.jpeg')
plt.figure(figsize=(15, 10))
plt.imshow(mmcv.bgr2rgb(img))
plt.show()
```

    --2022-06-07 15:40:35--  https://download.openmmlab.com/mmdetection/data/kitti_tiny.zip
    Resolving download.openmmlab.com (download.openmmlab.com)... 47.252.96.28
    Connecting to download.openmmlab.com (download.openmmlab.com)|47.252.96.28|:443... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 6918271 (6.6M) [application/zip]
    Saving to: ‘kitti_tiny.zip’
    
    kitti_tiny.zip      100%[===================>]   6.60M  8.72MB/s    in 0.8s    
    
    2022-06-07 15:40:37 (8.72 MB/s) - ‘kitti_tiny.zip’ saved [6918271/6918271]
    
    


    
![png](MM-Detection_files/MM-Detection_10_1.png)
    



```python
# 自定义数据集格式 'KittiTinyDataset' 并注册到 mmdet
import copy
import os.path as osp

import mmcv
import numpy as np

from mmdet.datasets.builder import DATASETS
from mmdet.datasets.custom import CustomDataset

@DATASETS.register_module()
class KittiTinyDataset(CustomDataset):

    CLASSES = ('Car', 'Pedestrian', 'Cyclist')

    def load_annotations(self, ann_file):
        cat2label = {k: i for i, k in enumerate(self.CLASSES)}
        # load image list from file
        image_list = mmcv.list_from_file(self.ann_file)
    
        data_infos = []
        # convert annotations to middle format
        for image_id in image_list:
            filename = f'{self.img_prefix}/{image_id}.jpeg'
            image = mmcv.imread(filename)
            height, width = image.shape[:2]
    
            data_info = dict(filename=f'{image_id}.jpeg', width=width, height=height)
    
            # load annotations
            label_prefix = self.img_prefix.replace('image_2', 'label_2')
            lines = mmcv.list_from_file(osp.join(label_prefix, f'{image_id}.txt'))
    
            content = [line.strip().split(' ') for line in lines]
            bbox_names = [x[0] for x in content]
            bboxes = [[float(info) for info in x[4:8]] for x in content]
    
            gt_bboxes = []
            gt_labels = []
            gt_bboxes_ignore = []
            gt_labels_ignore = []
    
            # filter 'DontCare'
            for bbox_name, bbox in zip(bbox_names, bboxes):
                if bbox_name in cat2label:
                    gt_labels.append(cat2label[bbox_name])
                    gt_bboxes.append(bbox)
                else:
                    gt_labels_ignore.append(-1)
                    gt_bboxes_ignore.append(bbox)

            data_anno = dict(
                bboxes=np.array(gt_bboxes, dtype=np.float32).reshape(-1, 4),
                labels=np.array(gt_labels, dtype=np.long),
                bboxes_ignore=np.array(gt_bboxes_ignore,
                                       dtype=np.float32).reshape(-1, 4),
                labels_ignore=np.array(gt_labels_ignore, dtype=np.long))

            data_info.update(ann=data_anno)
            data_infos.append(data_info)

        return data_infos
```


```python
# mmdet 配置
from mmcv import Config
from mmdet.apis import set_random_seed

cfg = Config.fromfile('configs/faster_rcnn/faster_rcnn_r50_caffe_fpn_mstrain_1x_coco.py')
# If we need to finetune a model based on a pre-trained detector, we need to use load_from to set the path of checkpoints.
cfg.load_from = 'checkpoints/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco_20210526_095054-1f77628b.pth'

# Modify dataset type and path
cfg.dataset_type = 'KittiTinyDataset'
cfg.data_root = 'kitti_tiny/'

cfg.data.test.type = 'KittiTinyDataset'
cfg.data.test.data_root = 'kitti_tiny/'
cfg.data.test.ann_file = 'train.txt'
cfg.data.test.img_prefix = 'training/image_2'

cfg.data.train.type = 'KittiTinyDataset'
cfg.data.train.data_root = 'kitti_tiny/'
cfg.data.train.ann_file = 'train.txt'
cfg.data.train.img_prefix = 'training/image_2'

cfg.data.val.type = 'KittiTinyDataset'
cfg.data.val.data_root = 'kitti_tiny/'
cfg.data.val.ann_file = 'val.txt'
cfg.data.val.img_prefix = 'training/image_2'

# modify num classes of the model in box head
cfg.model.roi_head.bbox_head.num_classes = 3

# Set up working dir to save files and logs.
cfg.work_dir = './tutorial_exps'

# The original learning rate (LR) is set for 8-GPU training.
# We divide it by 8 since we only use one GPU.
cfg.optimizer.lr = 0.02 / 8
cfg.lr_config.warmup = None
cfg.log_config.interval = 10

# Change the evaluation metric since we use customized dataset.
cfg.evaluation.metric = 'mAP'
# We can set the evaluation interval to reduce the evaluation times
cfg.evaluation.interval = 12
# We can set the checkpoint saving interval to reduce the storage cost
cfg.checkpoint_config.interval = 12

# Set seed thus the results are more reproducible
cfg.seed = 0
set_random_seed(0, deterministic=False)

cfg.device='cuda'
cfg.gpu_ids = range(1)

# We can also use tensorboard to log the training process
cfg.log_config.hooks = [
    dict(type='TextLoggerHook'),
    dict(type='TensorboardLoggerHook')]

# We can initialize the logger for training and have a look at the final config used for training
# print(f'Config:\n{cfg.pretty_text}')

```


```python
# Train a new detector
from mmdet.datasets import build_dataset
from mmdet.models import build_detector
from mmdet.apis import train_detector


# Build dataset
datasets = [build_dataset(cfg.data.train)]

# Build the detector
model = build_detector(cfg.model)
#  build_detector( cfg.model, train_cfg=cfg.get('train_cfg'), test_cfg=cfg.get('test_cfg'))
# Add an attribute for visualization convenience
model.CLASSES = datasets[0].CLASSES

# Create work_dir
mmcv.mkdir_or_exist(osp.abspath(cfg.work_dir))

# 报错:AttributeError: 'ConfigDict' object has no attribute 'device'
# https://github.com/open-mmlab/mmdetection/issues/7901
# 在上面 cfg 添加了 cfg.device='cuda'
train_detector(model, datasets, cfg, distributed=False, validate=True)
```

    /usr/local/lib/python3.7/dist-packages/ipykernel_launcher.py:54: DeprecationWarning: `np.long` is a deprecated alias for `np.compat.long`. To silence this warning, use `np.compat.long` by itself. In the likely event your code does not need to work on Python 2 you can use the builtin `int` for which `np.compat.long` is itself an alias. Doing this will not modify any behaviour and is safe. When replacing `np.long`, you may wish to use e.g. `np.int64` or `np.int32` to specify the precision. If you wish to review your current use, check the release note link for additional information.
    Deprecated in NumPy 1.20; for more details and guidance: https://numpy.org/devdocs/release/1.20.0-notes.html#deprecations
    /usr/local/lib/python3.7/dist-packages/ipykernel_launcher.py:57: DeprecationWarning: `np.long` is a deprecated alias for `np.compat.long`. To silence this warning, use `np.compat.long` by itself. In the likely event your code does not need to work on Python 2 you can use the builtin `int` for which `np.compat.long` is itself an alias. Doing this will not modify any behaviour and is safe. When replacing `np.long`, you may wish to use e.g. `np.int64` or `np.int32` to specify the precision. If you wish to review your current use, check the release note link for additional information.
    Deprecated in NumPy 1.20; for more details and guidance: https://numpy.org/devdocs/release/1.20.0-notes.html#deprecations
    /content/mmdetection/mmdet/datasets/custom.py:180: UserWarning: CustomDataset does not support filtering empty gt images.
      'CustomDataset does not support filtering empty gt images.')
    2022-06-07 16:41:00,736 - mmdet - INFO - Automatic scaling of learning rate (LR) has been disabled.
    2022-06-07 16:41:00,899 - mmdet - INFO - load checkpoint from local path: checkpoints/faster_rcnn_r50_caffe_fpn_mstrain_3x_coco_20210526_095054-1f77628b.pth
    2022-06-07 16:41:01,026 - mmdet - WARNING - The model and loaded state dict do not match exactly
    
    size mismatch for roi_head.bbox_head.fc_cls.weight: copying a param with shape torch.Size([81, 1024]) from checkpoint, the shape in current model is torch.Size([4, 1024]).
    size mismatch for roi_head.bbox_head.fc_cls.bias: copying a param with shape torch.Size([81]) from checkpoint, the shape in current model is torch.Size([4]).
    size mismatch for roi_head.bbox_head.fc_reg.weight: copying a param with shape torch.Size([320, 1024]) from checkpoint, the shape in current model is torch.Size([12, 1024]).
    size mismatch for roi_head.bbox_head.fc_reg.bias: copying a param with shape torch.Size([320]) from checkpoint, the shape in current model is torch.Size([12]).
    2022-06-07 16:41:01,035 - mmdet - INFO - Start running, host: root@7a73f7b358c4, work_dir: /content/mmdetection/tutorial_exps
    2022-06-07 16:41:01,037 - mmdet - INFO - Hooks will be executed in the following order:
    before_run:
    (VERY_HIGH   ) StepLrUpdaterHook                  
    (NORMAL      ) CheckpointHook                     
    (LOW         ) EvalHook                           
    (VERY_LOW    ) TextLoggerHook                     
    (VERY_LOW    ) TensorboardLoggerHook              
     -------------------- 
    before_train_epoch:
    (VERY_HIGH   ) StepLrUpdaterHook                  
    (NORMAL      ) NumClassCheckHook                  
    (LOW         ) IterTimerHook                      
    (LOW         ) EvalHook                           
    (VERY_LOW    ) TextLoggerHook                     
    (VERY_LOW    ) TensorboardLoggerHook              
     -------------------- 
    before_train_iter:
    (VERY_HIGH   ) StepLrUpdaterHook                  
    (LOW         ) IterTimerHook                      
    (LOW         ) EvalHook                           
     -------------------- 
    after_train_iter:
    (ABOVE_NORMAL) OptimizerHook                      
    (NORMAL      ) CheckpointHook                     
    (LOW         ) IterTimerHook                      
    (LOW         ) EvalHook                           
    (VERY_LOW    ) TextLoggerHook                     
    (VERY_LOW    ) TensorboardLoggerHook              
     -------------------- 
    after_train_epoch:
    (NORMAL      ) CheckpointHook                     
    (LOW         ) EvalHook                           
    (VERY_LOW    ) TextLoggerHook                     
    (VERY_LOW    ) TensorboardLoggerHook              
     -------------------- 
    before_val_epoch:
    (NORMAL      ) NumClassCheckHook                  
    (LOW         ) IterTimerHook                      
    (VERY_LOW    ) TextLoggerHook                     
    (VERY_LOW    ) TensorboardLoggerHook              
     -------------------- 
    before_val_iter:
    (LOW         ) IterTimerHook                      
     -------------------- 
    after_val_iter:
    (LOW         ) IterTimerHook                      
     -------------------- 
    after_val_epoch:
    (VERY_LOW    ) TextLoggerHook                     
    (VERY_LOW    ) TensorboardLoggerHook              
     -------------------- 
    after_run:
    (VERY_LOW    ) TextLoggerHook                     
    (VERY_LOW    ) TensorboardLoggerHook              
     -------------------- 
    2022-06-07 16:41:01,038 - mmdet - INFO - workflow: [('train', 1)], max: 12 epochs
    2022-06-07 16:41:01,040 - mmdet - INFO - Checkpoints will be saved to /content/mmdetection/tutorial_exps by HardDiskBackend.
    2022-06-07 16:41:17,697 - mmdet - INFO - Epoch [1][10/25]	lr: 2.500e-03, eta: 0:04:25, time: 0.914, data_time: 0.236, memory: 2790, loss_rpn_cls: 0.0267, loss_rpn_bbox: 0.0173, loss_cls: 0.5377, acc: 81.6211, loss_bbox: 0.3947, loss: 0.9764
    2022-06-07 16:41:21,039 - mmdet - INFO - Epoch [1][20/25]	lr: 2.500e-03, eta: 0:02:54, time: 0.334, data_time: 0.023, memory: 2790, loss_rpn_cls: 0.0149, loss_rpn_bbox: 0.0119, loss_cls: 0.1753, acc: 93.4570, loss_bbox: 0.3254, loss: 0.5275
    2022-06-07 16:41:28,575 - mmdet - INFO - Epoch [2][10/25]	lr: 2.500e-03, eta: 0:02:16, time: 0.558, data_time: 0.232, memory: 2790, loss_rpn_cls: 0.0167, loss_rpn_bbox: 0.0138, loss_cls: 0.1519, acc: 94.7656, loss_bbox: 0.2673, loss: 0.4497
    2022-06-07 16:41:31,944 - mmdet - INFO - Epoch [2][20/25]	lr: 2.500e-03, eta: 0:02:01, time: 0.337, data_time: 0.023, memory: 2790, loss_rpn_cls: 0.0128, loss_rpn_bbox: 0.0127, loss_cls: 0.1325, acc: 94.9316, loss_bbox: 0.2084, loss: 0.3664
    2022-06-07 16:41:39,445 - mmdet - INFO - Epoch [3][10/25]	lr: 2.500e-03, eta: 0:01:48, time: 0.569, data_time: 0.236, memory: 2790, loss_rpn_cls: 0.0059, loss_rpn_bbox: 0.0102, loss_cls: 0.0972, acc: 96.2500, loss_bbox: 0.1600, loss: 0.2733
    2022-06-07 16:41:42,958 - mmdet - INFO - Epoch [3][20/25]	lr: 2.500e-03, eta: 0:01:40, time: 0.349, data_time: 0.024, memory: 2790, loss_rpn_cls: 0.0088, loss_rpn_bbox: 0.0133, loss_cls: 0.1474, acc: 94.4336, loss_bbox: 0.2652, loss: 0.4346
    2022-06-07 16:41:50,449 - mmdet - INFO - Epoch [4][10/25]	lr: 2.500e-03, eta: 0:01:31, time: 0.562, data_time: 0.231, memory: 2790, loss_rpn_cls: 0.0064, loss_rpn_bbox: 0.0134, loss_cls: 0.1168, acc: 95.5566, loss_bbox: 0.2201, loss: 0.3567
    2022-06-07 16:41:53,973 - mmdet - INFO - Epoch [4][20/25]	lr: 2.500e-03, eta: 0:01:25, time: 0.353, data_time: 0.027, memory: 2790, loss_rpn_cls: 0.0035, loss_rpn_bbox: 0.0117, loss_cls: 0.1179, acc: 95.5566, loss_bbox: 0.2133, loss: 0.3464
    2022-06-07 16:42:01,892 - mmdet - INFO - Epoch [5][10/25]	lr: 2.500e-03, eta: 0:01:18, time: 0.595, data_time: 0.237, memory: 2790, loss_rpn_cls: 0.0040, loss_rpn_bbox: 0.0092, loss_cls: 0.1003, acc: 96.2695, loss_bbox: 0.2087, loss: 0.3223
    2022-06-07 16:42:05,430 - mmdet - INFO - Epoch [5][20/25]	lr: 2.500e-03, eta: 0:01:13, time: 0.352, data_time: 0.024, memory: 2790, loss_rpn_cls: 0.0037, loss_rpn_bbox: 0.0107, loss_cls: 0.0903, acc: 96.7090, loss_bbox: 0.1845, loss: 0.2892
    2022-06-07 16:42:12,992 - mmdet - INFO - Epoch [6][10/25]	lr: 2.500e-03, eta: 0:01:07, time: 0.567, data_time: 0.232, memory: 2790, loss_rpn_cls: 0.0017, loss_rpn_bbox: 0.0082, loss_cls: 0.0786, acc: 97.1777, loss_bbox: 0.1799, loss: 0.2685
    2022-06-07 16:42:16,595 - mmdet - INFO - Epoch [6][20/25]	lr: 2.500e-03, eta: 0:01:02, time: 0.363, data_time: 0.027, memory: 2790, loss_rpn_cls: 0.0029, loss_rpn_bbox: 0.0100, loss_cls: 0.0891, acc: 96.5332, loss_bbox: 0.1856, loss: 0.2876
    2022-06-07 16:42:24,486 - mmdet - INFO - Epoch [7][10/25]	lr: 2.500e-03, eta: 0:00:56, time: 0.591, data_time: 0.238, memory: 2790, loss_rpn_cls: 0.0043, loss_rpn_bbox: 0.0096, loss_cls: 0.0904, acc: 96.6113, loss_bbox: 0.1740, loss: 0.2783
    2022-06-07 16:42:28,147 - mmdet - INFO - Epoch [7][20/25]	lr: 2.500e-03, eta: 0:00:52, time: 0.364, data_time: 0.023, memory: 2790, loss_rpn_cls: 0.0019, loss_rpn_bbox: 0.0116, loss_cls: 0.0926, acc: 96.1816, loss_bbox: 0.1774, loss: 0.2835
    2022-06-07 16:42:35,802 - mmdet - INFO - Epoch [8][10/25]	lr: 2.500e-03, eta: 0:00:45, time: 0.572, data_time: 0.232, memory: 2790, loss_rpn_cls: 0.0026, loss_rpn_bbox: 0.0091, loss_cls: 0.0777, acc: 96.8262, loss_bbox: 0.1420, loss: 0.2314
    2022-06-07 16:42:39,346 - mmdet - INFO - Epoch [8][20/25]	lr: 2.500e-03, eta: 0:00:41, time: 0.354, data_time: 0.025, memory: 2790, loss_rpn_cls: 0.0036, loss_rpn_bbox: 0.0082, loss_cls: 0.0777, acc: 97.2168, loss_bbox: 0.1590, loss: 0.2485
    2022-06-07 16:42:46,922 - mmdet - INFO - Epoch [9][10/25]	lr: 2.500e-04, eta: 0:00:35, time: 0.565, data_time: 0.232, memory: 2790, loss_rpn_cls: 0.0026, loss_rpn_bbox: 0.0082, loss_cls: 0.0658, acc: 97.4902, loss_bbox: 0.1351, loss: 0.2116
    2022-06-07 16:42:50,443 - mmdet - INFO - Epoch [9][20/25]	lr: 2.500e-04, eta: 0:00:31, time: 0.352, data_time: 0.024, memory: 2790, loss_rpn_cls: 0.0014, loss_rpn_bbox: 0.0066, loss_cls: 0.0571, acc: 97.8418, loss_bbox: 0.1133, loss: 0.1783
    2022-06-07 16:42:58,001 - mmdet - INFO - Epoch [10][10/25]	lr: 2.500e-04, eta: 0:00:25, time: 0.567, data_time: 0.233, memory: 2790, loss_rpn_cls: 0.0034, loss_rpn_bbox: 0.0081, loss_cls: 0.0678, acc: 97.3926, loss_bbox: 0.1332, loss: 0.2125
    2022-06-07 16:43:01,493 - mmdet - INFO - Epoch [10][20/25]	lr: 2.500e-04, eta: 0:00:21, time: 0.350, data_time: 0.023, memory: 2790, loss_rpn_cls: 0.0008, loss_rpn_bbox: 0.0059, loss_cls: 0.0594, acc: 97.6758, loss_bbox: 0.1294, loss: 0.1955
    2022-06-07 16:43:09,042 - mmdet - INFO - Epoch [11][10/25]	lr: 2.500e-04, eta: 0:00:15, time: 0.567, data_time: 0.234, memory: 2790, loss_rpn_cls: 0.0009, loss_rpn_bbox: 0.0069, loss_cls: 0.0638, acc: 97.6270, loss_bbox: 0.1217, loss: 0.1932
    2022-06-07 16:43:12,554 - mmdet - INFO - Epoch [11][20/25]	lr: 2.500e-04, eta: 0:00:11, time: 0.351, data_time: 0.023, memory: 2790, loss_rpn_cls: 0.0014, loss_rpn_bbox: 0.0073, loss_cls: 0.0571, acc: 97.8711, loss_bbox: 0.1212, loss: 0.1869
    2022-06-07 16:43:20,107 - mmdet - INFO - Epoch [12][10/25]	lr: 2.500e-05, eta: 0:00:05, time: 0.567, data_time: 0.232, memory: 2790, loss_rpn_cls: 0.0017, loss_rpn_bbox: 0.0061, loss_cls: 0.0563, acc: 97.9199, loss_bbox: 0.1246, loss: 0.1887
    2022-06-07 16:43:23,598 - mmdet - INFO - Epoch [12][20/25]	lr: 2.500e-05, eta: 0:00:01, time: 0.349, data_time: 0.024, memory: 2790, loss_rpn_cls: 0.0016, loss_rpn_bbox: 0.0048, loss_cls: 0.0511, acc: 97.9297, loss_bbox: 0.0946, loss: 0.1520
    2022-06-07 16:43:25,323 - mmdet - INFO - Saving checkpoint at 12 epochs
    

    [>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>] 25/25, 9.8 task/s, elapsed: 3s, ETA:     0s
    ---------------iou_thr: 0.5---------------
    

    2022-06-07 16:43:30,260 - mmdet - INFO - 
    +------------+-----+------+--------+-------+
    | class      | gts | dets | recall | ap    |
    +------------+-----+------+--------+-------+
    | Car        | 62  | 133  | 0.984  | 0.888 |
    | Pedestrian | 13  | 40   | 0.846  | 0.768 |
    | Cyclist    | 7   | 50   | 0.571  | 0.114 |
    +------------+-----+------+--------+-------+
    | mAP        |     |      |        | 0.590 |
    +------------+-----+------+--------+-------+
    2022-06-07 16:43:30,268 - mmdet - INFO - Epoch(val) [12][25]	AP50: 0.5900, mAP: 0.5899
    


```python
# load tensorboard in colab
%load_ext tensorboard

# see curves in tensorboard
%tensorboard --logdir ./tutorial_exps
```


    <IPython.core.display.Javascript object>



```python
img = mmcv.imread('kitti_tiny/training/image_2/000068.jpeg')

model.cfg = cfg
result = inference_detector(model, img)
show_result_pyplot(model, img, result)
```


    
![png](MM-Detection_files/MM-Detection_15_0.png)
    


<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: https://openbayes.com/console/wrh/containers/t93t3LTXlgU

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [MMDetection 2.3 安装教程](https://zhuanlan.zhihu.com/p/163645165)

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: https://mmdetection.readthedocs.io/zh_CN/latest/get_started.html#mmdetection

<a name='cite_note-4' href='#cite_ref-4'>[4]</a>: https://colab.research.google.com/github/ZwwWayne/mmdetection/blob/update-colab/demo/MMDet_Tutorial.ipynb#scrollTo=8M5KUnX7Np3h

