let a = [
  1,
  2,
  [1, 2, 3],
  { x: 1, y: 2 },
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  4,
  5,
  6,
];
let b = [
  // 1,
  2,
  [1, 2, 3],
  { x: 1, y: 2 },
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  4,
  5,
  6,
];

const num = 1000;
console.log(`diff1:>`, diff1(a, b));
console.time("diff1");
for (let i = 0; i < num; i++) {
  const res = diff1(a, b);
}
console.timeEnd("diff1");

console.log(`diff2:>`, diff2(a, b));
console.time("diff2");
for (let i = 0; i < num; i++) {
  diff2(a, b);
}
console.timeEnd("diff2");

function diff1(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function diff2(obj1, obj2) {
  if (obj1.length != obj2.length) {
    return false;
  }
  for (let i = 0; i < obj1.length; i++) {
    if (!diff2(obj1[i], obj2[i])) {
      return false;
    }
  }
  return true;
}

// js比较性能
