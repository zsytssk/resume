/** 解析数组 */
export function parserArr(s: string) {
  let map: any = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(") {
      let arr = [];
      if (map.length) {
        map[map.length - 1].push(arr);
      }
      map.push(arr);
      continue;
    }
    if (char === ")") {
      if (map.length > 1) {
        map.pop();
      }
      continue;
    }
    map[map.length - 1].push(char);
  }
  return map[0];
}

console.log(parserArr(`(A(((BC)D)E))`));
