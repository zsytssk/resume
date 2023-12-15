// https://www.nowcoder.com/practice/8f3df50d2b9043208c5eed283d1d4da6

const map = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

// 十六进制转十进制
export function parseNum(source: string) {
  if (!source?.length) {
    return undefined;
  }
  const numList = source.replace("0x", "").split("");
  let result = 0;

  let i = 0;
  for (let item of numList.reverse()) {
    let num_str = item;
    if (map.hasOwnProperty(num_str)) {
      num_str = map[num_str];
    }
    let num = parseInt(num_str) * Math.pow(16, i);
    result += num;
    i++;
  }

  return result;
}
