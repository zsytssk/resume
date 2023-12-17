- @note [解析数组](./src/algorithm/hj70.ts)

  - `(A(B(CD)))`
  - 递归, `(` 创建一个数组 `)` break 返回
  - 更新当前便利字符串的位置
  - ***
  - [匹配括号](./src/algorithm/hj52.ts)
  - [括号嵌套](./src/algorithm/leetcode/1614.ts)
  - [合法的括号字符串](src/algorithm/nc/nc175_2.ts)

- @note [合并区间](./src/algorithm/nc/nc37.ts)

  - 先按开始节点大小 a 排列
  - 比较新数组的最后一个和新的 item
  - 比较两个区间是否重叠：`end2 - start1 <= (end1 - start1) + (end2 - start2);`

- @note 排列组合种类

  - 排列 `n!/(n-m)!`
  - 组合 `n!/((n-m)！m!)`
  - [有重复字符串的排列组合](./src/algorithm/leetcode/0808.ts)

- @note [矩阵的乘法](./src/algorithm/hj70.ts)

  - `[n, m] * [m, p] = [n, p]` 次数= `n * m * m`

- @ques [相同自字符串](./src/algorithm/hj65.ts)
  - 便利第一个(str1) 记录在另一个(str2)中出现的次数 `Record<str1Index, Array<[str2IndexStart, str2IndexUpdate]>>`
  - 每次前进 看看匹配的还在不在，不再的话，就放到 result`Array<[str1Index, string]>` 中，在继续
  - result 中最长的字符串的长度

## typescript

- get array last
- get array first
