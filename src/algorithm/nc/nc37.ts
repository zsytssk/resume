class Interval {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

/**
 * https://www.nowcoder.com/practice/69f4e5b7ad284a478777cb2a17fb5e6a
 * 合并区间
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param intervals Interval类一维数组
 * @return Interval类一维数组
 */
export function merge(intervals: Interval[]): Interval[] {
  // write code here
  const result: Interval[] = [];
  intervals.sort((a, b) => a.start - b.start);
  for (const item of intervals) {
    if (!result.length) {
      result.push(item);
      continue;
    }
    let lastRes = result.pop() as Interval;
    let list = combineRange(lastRes, item);
    result.push(...list);
  }
  return result;
}

function combineRange(start: Interval, end: Interval) {
  const start1 = start.start;
  const end1 = start.end;

  const start2 = end.start;
  const end2 = end.end;

  let isOverlay = end2 - start1 <= end1 - start1 + (end2 - start2);

  if (isOverlay) {
    start.start = Math.min(start1, start2);
    start.end = Math.max(end1, end2);
    return [start];
  }

  return [start, end];
}
