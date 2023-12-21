https://exam.nowcoder.com/cts/17275618/summary?id=3BD64F440C612B285D2B1AAD67C4DCC3

```ts
let input: string[] = [];
rl.on("line", function (line) {
  input.push(line);
});
rl.on("close", function () {
  console.log(parseInput(input));
});
```

## 2023-12-21 10:02:11

- 差一点第三题 我就做出来了

- @ques 3

  - n 维 loop？
    - 性能会不会有问题
    - 能不能避免不必要的循环？
    - 一次循环？
  - ***
  - 是错误还是性能问题？-> 性能
  - 关键在怎么取数字 -> 递归?
  - 所有的数字都是非同列非同行？ -> 怎么用程序表示
  - 如果是一维数组 会不会更简单
  - n -> y | m -> x
  - 组合不容许有重复的 -> 如何 u 排除已经选的数字
  - 题目的意思是：最小的组合中的第 K 个数字是哪个？是吗
    - 怪怪的
    - 最小的组合 == n 个数的和最小？

- @ques 重复的如何排除

### end

- @ques 2

  - `20*19*20*`
  - 关键是如何分割字符串 -> `*` + 前两位
  - 数字和字符如何转化

- @ques 题目 1 出错在哪里？

  - 超出限制？ 2^21
  - ***
  - 没有每一个 `line` 单独输出
  - 不合法输入
  - substring 有问题
  - 性能问题(X)

- @ques 转换进制
  - 10 进制如何转成 M 进制
  - 12345
  - 1 -> k % m
  - 2 -> (k - k % m) % (m \* m)
  - 3 -> k -

k % M
