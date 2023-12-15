## tpl

```ts
// let input:string[] = [];
// rl.on('line', function (line) {
//     input.push(line);
// });
// rl.on('close', () => {
//    console.log( parseInput(input));
// });
```

## 2023-12-15 11:58:10

- get array last
- get array first
- ***
- `-?` 是做什么的
- `-readonly` 是做什么的
- filter readonly
- 两个 record 共同的属性

## 2023-12-12 16:55:17

- @note 解析数组

- @ques nc149
  - 有多个 j 在运动，记录当前的 key,记录当前的位置 set ？map ？ {}
  - 还能怎么优化性能 -> 怎么获取参数
  - https://www.youtube.com/watch?v=af1oqpnH1vA

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
