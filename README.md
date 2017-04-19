- \## 什么是Markdown

   \>Markdown 是一种**轻量级标记语言**，创始人为[约翰·格鲁伯(John Gruber)](https://zh.wikipedia.org/wiki/約翰·格魯伯)。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML(或者HTML)文档”。

   \- 轻量级标记语言

   \>轻量级标记语言（英语 : Lightweight Markup Language，简称LML）是一类用简单句法描述简单格式的文本语言。轻量级标记语言作为一种标记语言，它的语法简单，可方便地使用简单的文本编辑器输入，原生格式接近自然语言。所谓“轻量级”是相对于其他更丰富格式的标记语言而言的，比如 : 富文本格式语言RTF、超文本标记语言HTML、学术界排版语言TeX等。

   \## 基本语法

   \### 标题

   Markdown 语法 :

   \```

   \# 第一级标题 `<h1>`

   \## 第二级标题 `<h2>`

   \### 第三级标题 `<h3>`

   \#### 第四级标题 `<h4>`

   \##### 第五级标题 `<h5>`

   \###### 第六级标题 `<h6>`

   \```

   效果如下 :

   \# 第一级标题 `<h1>`

   \## 第二级标题 `<h2>`

   \### 第三级标题 `<h3>`

   \#### 第四级标题 `<h4>`

   \##### 第五级标题 `<h5>`

   \###### 第六级标题 `<h6>`

   \----

   \### 强调

   Markdown 语法 :

   \```

   *斜体 ( I )`<em>`*

   _下划线 ( U )`<u>`_

   **加粗 ( B )`<strong>`**

   __加粗 ( B )`<strong>`__

   \```

   效果如下 :

   *斜体 ( I )`<em>`*

   _下划线 ( U )`<u>`_

   **加粗 ( B )`<strong>`**

   __加粗 ( B )`<strong>`__

   <u> 下划线 </u>

   \----

   \### 分割线

   以下三种方式都可以生成分隔线 :

   \```

   ***

   *****

   \- - -

   \```

   效果如下 :

   ***

   *****

   \- - -

   \----

   \### 删除线

   Markdown 语法 :

   \```

   删除线 :  ~~删除线~~

   \```

   效果如下 :

   删除线 :  ~~删除线~~

   \----

   \### 列表

   \#### 无序列表

   Markdown 语法 :

   \```

   \* 项目一

   \* 项目二

   ​     * 项目二的子项目一

   ​     * 项目二的子项目二

   \```

   效果如下 :

   \* 项目一 无序列表

   \* 项目二

   ​     * 项目二的子项目一 无序列表

   ​     * 项目二的子项目二

   \----

   \#### 有序列表

   Markdown 语法 :

   \```

   \1. 项目一

   \2. 项目二

   \3. 项目三

   ​     1. 项目三的子项目一

   ​     2. 项目三的子项目二

   \```

   效果如下 :

   \1. 项目一

   \2. 项目二

   \3. 项目三

   ​     1. 项目三的子项目一

   ​     2. 项目三的子项目二

   \----

   \#### 任务清单

   Markdown 语法 :

   \```

   \- [ ] 任务一 未完成

   \- [x] 任务二 已完成

   \```

   效果如下 :

   \- [ ] 任务一 未完成

   \- [x] 任务二 已完成

   \---

   \###链接

   Markdown 语法 :

   \```

   Email :  <example@dingdangnao.com>  

   显示链接标题 : [Google](http://google.com)  

   显示链接地址 :  <http://google.com/>   

   \```

   Email :  <example@dingdangnao.com>

   显示链接标题 : [Google](http://google.com)

   显示链接地址 :  <http://google.com/>

   <a href="http://www.google.com">Google</a>

   \----

   \### 图片

   Markdown 语法 :

   \```

   ![Image Title](https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif)

   \```

   ![Image Title](https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif)

   \----

   \### 引用

   Markdown 语法 :

   \```

   某某说:

   \> 第一行引用

   \> 第二行引用文字...

   \```

   效果如下 :

   某某说:

   \> 第一行引用

   \> 第二行引用文字...

   \----

   \### 行内代码

   Markdown 语法 :

   \```

   行内代码 : `console.log("666")`

   \```

   行内代码 : `console.log("666")`

   \### 代码块

   Markdown 语法 :

   \```php

   function sql_select($sql_address, $sql_command)

   {

   ​     $sql_address = new mysqli("localhost", "root", "", "information_schema");

   ​     if ($sql_address->connect_errno) {

   ​          die($sql_address->connect_errno);

   ​     }

   ​     $sql_address->query("SET NAMES UTF8");

   ​     $result = $sql_address->query($sql_command);

   ​     if ($result) {

   ​          return $result->fetch_all(MYSQLI_ASSOC);

   ​     } else {

   ​          return false;

   ​     }

   ​     $sql_address->close();

   }

   \```

   \---

   \## 进阶语法

   \###TOC

   Markdown 语法 :

   \```

   [TOC]

   \```

   效果如下 :

   [TOC]

   \### 表格

   Markdown 语法 :

   \```

   | 表头1 | 表头2 | 表头3 |

   | :---- | :----: | ----: |

   | 一行一列 | 一行二列 | 一行三列 |

   | 一行一列 | 一行二列 | 一行三列 |

   | 左对齐 | 居中 | 右对齐 |

   \```

   效果如下 :

   | 表头1 | 表头2 | 表头3 |

   | :---- | :----: | ----: |

   | 一行一列 | 一行二列 | 一行三列 |

   | 一行一列 | 一行二列 | 一行三列 |

   | 左对齐 | 居中 | 右对齐 |

   <table>

   <tr><th>111</th><th>222</th></tr>

   <tr><td>xxxx</td><td>yyyy</td></tr>

   </table>

   \### 公式

   [Math Jax](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

   $$ \alpha \beta \gamma \omega$$

   $\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$

   $$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

   \### 流程图

   <http://adrai.github.io/flowchart.js/>

   Markdown 语法 :

   ​     ```flow

   ​    st=>start: 开始

   ​    e=>end: 结束

   ​    op=>operation: 我的操作

   ​    cond=>condition: 确认？

   ​    st->op->cond

   ​    cond(yes)->e

   ​    cond(no)->op

   ​    ```

   效果如下 :

   \```flow

   st=>start: 开始

   e=>end: 结束

   op=>operation: 操作

   cond=>condition: 确认？

   st->op->cond

   cond(yes)->e

   cond(no)->op

   \```

   \----

   \### 序列图

   <http://bramp.github.io/js-sequence-diagrams/>

   Markdown 语法 :

   ​     ```sequence

   ​    A->B: How are you?

   ​     Note right of B: B thinks

   ​     B-->A: I am fine thank you, and you?

   ​     A--B: I'm fine, too.

   ​     ```

   效果如下 :

   \```sequence

   ​    A->B: How are you?

   ​     Note right of B: B thinks

   ​     B-->A: I am fine thank you, and you?

   ​     A--B: I'm fine, too.

   \```

   \----

   \### 甘特图

   \```gantt

   ​    title 项目开发流程

   ​    section 项目确定

   ​        需求分析       :a1, 2016-06-22, 3d

   ​        可行性报告     :after a1, 5d

   ​        概念验证       : 5d

   ​    section 项目实施

   ​        概要设计      :2016-07-05  , 5d

   ​        详细设计      :2016-07-08, 10d

   ​        编码          :2016-07-15, 10d

   ​        测试          :2016-07-22, 5d

   ​    section 发布验收

   ​        发布: 2d

   ​        验收: 3d

   \```

   \----

   \## Markdown 软件

   \### Mac

   \* [MWeb](http://zh.mweb.im)

   \* [Ulysses](https://ulyssesapp.com)

   \* [有道云笔记](https://note.youdao.com)

   \* [Day One](http://dayoneapp.com)

   \* [typora](https://typora.io)

   \* [Cmd Markdown](https://www.zybuluo.com/cmd/)   

   \### Windows

   \* [有道云笔记](https://note.youdao.com)

   \* [typora](https://typora.io)

   \* [Markdown Editor](http://chenguanzhou.github.io/MarkDownEditor/)

   \* [Cmd Markdown](https://www.zybuluo.com/cmd/)    

   \### Web

   \* [简书](http://jianshu.com)

   \* [Cmd Markdown](https://www.zybuluo.com/cmd/)   

   \* [有道云笔记](https://note.youdao.com)

   \----

   \# 图床

   \>一般是指储存图片的服务器

   \* Mac

   [[iPic](https://toolinbox.net/iPic/)]()

   \* Windows

   ​     [MPic](http://mpic.lzhaofu.cn/)

   \# 翻墙

   \## 1. Lantern

   []()

   500MB/mo     Free Account

   \## 2. Shadowsocks

   <http://portal.shadowsocks.com.hk>    

   \## 3. 鱼摆摆 *for Mac Only*

   ![](https://ww1.sinaimg.cn/large/006tKfTcly1fe4ki8bk0tj315o0poac4.jpg)

   \## 4.自己搭梯子

   \* [Vultr](http://www.vultr.com)     

   ![](https://ww2.sinaimg.cn/large/006tKfTcly1fe4kz6l4bgj31kw0ogaga.jpg)

   \* [HoustUs](https://hostus.us/)    

   ![](https://ww1.sinaimg.cn/large/006tKfTcly1fe4kygtiffj317u0bsn0d.jpg)

   \* [Digital Ocean](https://www.digitalocean.com/)    

   ![](https://ww3.sinaimg.cn/large/006tKfTcly1fe4l15s2y0j31kw0o4n0l.jpg)

   \## app

   \* macOS

   [[Shadowsocks](https://shadowsocks.org/en/download/clients.html)]()

   ​     [Surge](http://nssurge.com)

   \* Windows

   [[Shadowsocks](https://shadowsocks.org/en/download/clients.html)]()

   \* iOS

   [[Shadowrocket](https://itunes.apple.com/cn/app/shadowrocket/id932747118?mt=8)]()

   [[Potatso](https://itunes.apple.com/app/apple-store/id1070901416?pt=2305194&ct=shadowsocks.org&mt=8)]()

   [[Surge](https://itunes.apple.com/cn/app/surge-web-developer-tool-and-proxy-utility/id1040100637?mt=8)]()

   \* Android

   [[Shadowsocks](https://github.com/shadowsocks/shadowsocks-android/releases)]()

   \----