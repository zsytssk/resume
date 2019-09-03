## 个人信息

- 张世阳/男/1989
- 本科 / 安徽师范大学 / 地理科学
- 工作年限：7 年
- Github：http://github.com/zsytssk

* 期望职位：web 游戏前端
* 期望薪资：税前月薪 20k~30k，特别喜欢的公司可例外
* 期望城市：上海
* 目前年收入 21 万元

## 工作经历

### 上海友玩网络科技有限公司 （ 2016 年 4 月 ~ 2019 年 9 月 ）

- 互联网/游戏|150-500 人|民营公司
- 平安子公司
- html5 游戏

### 上海朱雀科技 (2013/7-2016/2)

在这个公司做过很多网站, 里面有商城页面, 公司介绍网站, 桌面程序嵌套
手机端页面, 微信公众号页面. 公司业务变化比较大, 里面就我一个前端, 我感觉能够将自己的工作比较好的完成.

### 上海量维科技有限公司 (2012/6-2013/5)

工作时间参与编写 www.meitaojia.com 等其他工作;

## 项目经验

### 网站制作

网站制作作为我的工作的第一阶段,在其中我一直在优化自己工作的方式, 在写网页的过程中我总结一个工作流;
最终是

- gulp( 自动化编译前端页面)
- postcss（css 预处理，压缩 css）,
- jade（html 模板发动机，编写 dom)；

- [布局的套路](https://github.com/zsytssk/common/blob/master/www/dom.md)
- [同时常用的 css](https://github.com/zsytssk/common/blob/master/www/css.md)
- [js 插件](https://github.com/zsytssk/common/tree/master/www/js)

在工作中不断积累经验, 不断提高自己的效率. 工作虽然一直在变化也比较多, 但是我都可以胜任
责任描述： 在工作之余我会自己做一些个人项目, 这是为了自己学习也是爱好, 拓展自己知识, 同时为了工作方便;

### 游戏

#### 项目列表

- [斗牛魔王](http://m.1768.com/?act=game_niuking#/home) [多人斗牛卡牌][独立完成]
- [千炮捕鱼](http://m.1768.com/?act=game_qpby#/hall) [html5 捕鱼][前端主程]
- [炸弹狗](http://m.1768.com/?act=game_explodingdog) [炸弹猫类似卡牌][前端主程]
- [深海大乱斗](http://m.1768.com/?act=game_deepseaglory) [多人对战][移动纠正+其他杂七杂八]
- 三国项目(类似传奇的 html5 2d 网游, 功能完成,没有上线)

#### 任务描述：

- 斗牛魔王 是我第一个独立完整的 laya 游戏人人游戏, 在游戏中我实现了:
  es5 参考 ts 的继承方法, 完成 全局继承, 弹出层管理,laya 常用工具类方法 url 监听切换页面...
  这是我第一个全权做上线的 js 游戏，也是第一个人人游戏；
  在这游戏中我将 ui 包裹在 ctrl, 来控制 ui, 这独立于 ui,
  这样具有非常好的灵活性 而且他独立于 ui，也独立于发动机，可以独立方式来组织，我就是通过 ctrl 继承来时来组织代码, 多个 ui 使用同一个 ctrl；
  这个项目为捕鱼的打好基础，捕鱼在许多方向拓展延伸到原来没有触及的部分;

- 千炮捕鱼 这个游戏比上一个大的多, 我是游戏的前端主程, 完成游戏的架构+游戏内的所有逻辑.
  在这个游戏中我最宝贵的经验是:

1. model ctrl 分离, model 是所有有意义的数据, ctrl 展示 model 的效果;
   model 是纯粹的 js 和逻辑, 所有的游戏的主逻辑都在这一部分, 它和游戏发动机无关, 和浏览器也无关, 基本上可以运行在任何 js 环境中;

2. typescript, 在这个游戏中我第一次使用 typescript, 它给我给我提供很多的便利, 让我这这么大的项目这么多的文件保持清晰的逻辑.从一开始和别人一起开发,他使用 js, 我用 ts, 然后将所有的代码全部转换成 ts. 通过这次的尝试, 我认为强类型是做大型开发的必备工具.

3. 继承, 这游戏中我的 ctrl 层通过父子树相互联系, 他们都继承 ctrl 基类, 同时 model+ctrl 都是继承一个事件基类, 每一个对象都是一个事件分发器, 它改变分发事件, 其他地方监听这事件做出改变, 这一套方案是我在实践中逐步形成, 一般是有公用的部分, 我都会做成公共类, 项目总共一百多个文件, 90%以上的文件都是 class, 我自觉它们的条理还是十分清晰;
   其他部分 loadctrl: 所有的需要加载资源都会通过它, 每一个场景 一个弹层, 都有它对应的资源, 他们加载都是通过 loadctrl 来加载, 依赖-->自己-->关联这三种资源关联关系, 同时顺序. 在切换场景时 当前场景相关的资源优先级会提高.router: 多级+多个路由切换, hash 或者 history 弹层管理器;

游戏难点: 鱼路径(贝塞尔曲线+函数式) , 鱼群(多种组合鱼群), 自动锁定 冰冻等技能
捕鱼是 2016 年做的, 当时市面上所有的 html5 捕鱼游戏, 我的效果是最好, 大鱼群来临屏幕上几百个骨骼动画, 实现 60 帧运行;

- 炸弹狗 是一个简单的卡牌游戏, 使用和捕鱼相同的方式组织代码,比较简单, 游戏本身有点意思.

- 深海大乱斗 这个是 html5 对战游戏, 在这个游戏中我实现了前端的移动纠正, 还有些英雄+游戏模式;

- 三国项目
  这个是一个类似传奇的 html5 网游项目, 我在项目中主要做项目的架构, 底层框架, 也会参与具体的功能. 这个项目对我最大的益处是团队的协调沟通, 我是项目的主程序+前端管理, 这是我以前没有经历过的, 非常有意思;游戏没有上线, 我们基本完成自己的所有任务.

## 开源项目

- [clip_img](https://github.com/zsytssk/clip_img) rust 切图工具
- [combine_image](https://github.com/zsytssk/combine_image) rust 合图(类似 laya f12 发布打包图片)
- [cmd_flow](https://github.com/zsytssk/cmd_flow) vscode 插件在, terminal 一条一条执行命令
- [lightCanvas](https://github.com/zsytssk/test/tree/master/canvasTest/lightCanvas) 小 canvas 2d 引擎(不支持 webgl)
- [test_builder](https://github.com/zsytssk/test_builder) 自己写的浏览器中运行的测试小框架
- [script](https://github.com/zsytssk/script) 个人常用的 ts 脚本
- [sublime 插件](https://packagecontrol.io/packages/QuickOpen;)
- [atom 插件](https://atom.io/users/zsytssk)
- [Tamperscript autohotkey photoshop 脚本](https://github.com/zsytssk/common)

## 技能清单

以下均为我熟练使用的技能

前端语言：HTML5/CSS/Javascript/typescript
前框架端：react+redux
前端工具：webpack//rust(初级)
版本管理: Git
