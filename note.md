<!-- https://www.nowcoder.com/practice/eceb50e041ec40bd93240b8b3b62d221?tpId=196&rp=1&ru=%2Fexam%2Foj&qru=%2Fexam%2Foj&sourceUrl=%2Fexam%2Foj&difficulty=&judgeStatus=&tags=&title=NC175&gioEnter=menu -->

## 2024-08-06 15:24:43

- @todo https://www.nowcoder.com/discuss/353159031504183296
  - 复习下 pick(n, m)

## 2024-07-29 15:42:08

- @ques 动态规划

  - [什么是动态规划](https://www.zhihu.com/question/23995189/answer/305426560)
  - 自己写一个实现
  - [寻路如何写](https://pica.zhimg.com/80/v2-38e9a487997d2eea979097fbc9e9e674_720w.webp?source=1def8aca)

## 2024-08-05 19:11:48

- @ques 如何计算字符串重复

## 2024-07-29 15:11:05

- @ques 16 进制如何处理

- @note 年纪大了, 思维不像年轻人那么集中和灵活了

  - 有没有更简单的思维方式

- 速度太慢了

## 2024-03-28 14:07:01

https://svga.dev/integrated.html
https://zsytssk.github.io/?nocache=1231

---

| 稳定 | 时间是怎么样的 |

---

vue

## 2024-03-28 14:53:22

工作时间

## 2024-03-07 14:45:58

- @ques 这是什么公司的工作，我具体是做什么的，在什么地方
- @ques 工作的环境是怎样的，多少人的团队，后端技术是什么？

## tpl

```ts
let input: string[] = [];
rl.on("line", function (line) {
  input.push(line);
});
rl.on("close", () => {
  console.log(parseInput(input));
});
export function parseInput(input: string[]) {}
```

- https://leetcode.cn/problems/shortest-path-visiting-all-nodes/

- @ques 动态规划

  - [什么是动态规划](https://www.zhihu.com/question/23995189/answer/305426560)
  - 自己写一个实现
  - [寻路如何写](https://pica.zhimg.com/80/v2-38e9a487997d2eea979097fbc9e9e674_720w.webp?source=1def8aca)

- @ques nc149

  - 有多个 j 在运动，记录当前的 key,记录当前的位置 set ？map ？ {}
  - 还能怎么优化性能 -> 怎么获取参数
  - https://www.youtube.com/watch?v=af1oqpnH1vA

- @ques JZ4 二维数组中的查找

  - 从数组的对角线开始对比 -> 找到在两个对角线之间的
  - 剩下两个对角线 在继续 从对角线找 -> 一直找到对应的数字
  - 需要一个对角线数组的公式
  - 对角线的左右两个用什么公式处理
  - 非正方形的矩阵怎么处理 -> 矩形也有对角线
  - 对角线直接对半分 `n/2 m/2` -> 上下在 1 之间
  - 越想越复杂
  - ***
  - 能不能放到一个二叉树中

- @ques [NC28](src/algorithm/nc/nc28_2.ts)

  - 类似寻路
  - 最小区间 -> 便利所有可能, 求出最短可能
  - 深度搜索

- @ques [hj41](src/algorithm/hj41_2.ts)
  - 从最小值开始一个个的累加

## 2024-01-03 10:58:26

服务器正向代理和反向代理的区别
前端性能优化 说出三个方面 负载均衡 资源压缩 内存还礼 webpack 打包优化
chrome 的内存泄流问题如何解决 三种模式的区别
webpack 打包从什么方向入手， 分包策略
为前端技术的优缺点：乾坤+webpack federation 的区别
前端检测技术 selenium cypress
跨域页面如何实现 session 共享

## 2023-12-17 18:17:42

- @ques 动态规划

  - [什么是动态规划](https://www.zhihu.com/question/23995189/answer/305426560)
  - 自己写一个实现
  - [寻路如何写](https://pica.zhimg.com/80/v2-38e9a487997d2eea979097fbc9e9e674_720w.webp?source=1def8aca)

### end

- @ques leetcode 200

  - 穷举所有是 1 的
  - 记录所有寻到的位置
  - 记录岛的位置

- leet code 322

  - 几个小数累计加在一起 怎么处理？
  - 最大的数一定比最小的数小吗？
  - 能不能用寻路的逻辑处理？
  - ***
  - 一种 ？ 两种, 一直下去 -> 和现在的没有什么区别
  - ***
  - @ques 如何减少递归次数
  - ***
  - 当我每一次试的时候 就知道 怎么拿剩下的?

- @ques 动态规划 是什么意思

  - 自己写一个
  - 寻路怎么用动态规划
  - ***
  - 贪心 == 尽量使接下来面对的 w 更小
  - [什么是动态规划](https://www.zhihu.com/question/23995189/answer/305426560)

- @ques hj43 寻路

  - 只要一直往前就可以了
  - 寻路中存在多个怎么处理
    - 递归？

- @ques chrome 录屏 linux

- @ques leetcode204

  - 穷举所有的奇数
  - 排除掉所有的奇数相乘
  - 如何去穷举
  - ***
  - 性能问题如何优化
    - loop

- @ques leetcode 994

  - 如何去扩散 -> 每次检查新的 -> 周围的 8 个位置
  - 如何知道都腐烂了 -> 腐烂数组
  - grid 坐标如何处理 -> ? (x, y)

- @ques [NC28](src/algorithm/nc/nc28_2.ts)

  - 为什么可以

- @ques NC17 什么叫回文字符串

  - 每一个位置都记录一个字符串，碰到回文的扔到数组中
  - 每次更新的时候检查所有字符看是不是回文，是扔到数组中
  - ***
  - 从中间往两边不停的检查找到最长的回文字符

- NC175 -> `"()((*)"`

  - 存在重复代码
  - '\*' 怎么处理 -> 怎么把可能分支加进去

- @ques leetcode0808

  - n 中取 M 个的种类 n!/((n-m)!m!)
  - 程序中如何处理
  - 先取排列， 再去掉重复的

- @ques NC175 [合法的括号字符串](src/algorithm/nc/nc175_2.ts)

  - 能不能碰到`*`直接把他当作三种可能一个个的去便利，只要最后有一个合法的就行了
  - 这个逻辑怎么处理？
  - ***
  - 如果后面需要匹配前面这个（怎么处理 -> 应该是把 testStr 数据带入到 checkBranch 中
  - 也许可以用到以前那个地图寻路的逻辑 -> 深度优先 | 广度优先

- @ques NC52 有效括号序列

## typescipt

- get array last
- get array first
- ***
- `-?` 是做什么的
- `-readonly` 是做什么的
- filter readonly
- 两个 record 共同的属性

## 2023-12-12 16:55:17

- @note 解析数组

## end

- @ques

  - 如何把公式解析出来
    - 先把最底层的解出来 -> 深度优先
  - 矩阵的乘法公式

- @ques leetcode 1839

  - 可以做成一层 loop
  - ***
  - 直接在一个循环中解决 getLegalSubStr -> isLegal 需要优化
  - 不停的往前排列，找到最长，然后不停的检查几个条件
  - 如果碰到顺序不对直接中断
  - 中断后直接从有问题的最后位置重新开始 -> 从下一个 a 开始
  - ***
  - 从非连续的 a 直接把字符串拆分，然后再去一个个的判断就行了 -> 更简单 -> 性能有问题

- @ques nc68
  - 目标数字分为 2 | 1,的组合，然后各种组合的排列种类之和
  - 除以 2,然后 2 的次数从小到大排列
  - 在 N 个位置中抽取 M 个有多少种可能，不在乎顺序 ->
  - 怎么用计算机去计算

```txt
<!-- 排列 -->
C(m,n)=A(m,n)/A(m,m)=(n!/(n-m)!)/m!= n!/(n-m)!

<!-- 组合 -->
S(m,n)=A(m,n)/A(m,m)=(n!/(n-m)!)/m!= n!/((n-m)!m!)
```

- @ques nc61 还能怎么优化？
  - hashMap -> 解决
  - 将数字放到一个树中？
  - 然后在树中去找这个数字？
