let sortArr = ["(", ")", ""];

/** https://www.nowcoder.com/practice/eceb50e041ec40bd93240b8b3b62d221
 *  NC175 合法的括号字符串
 * @param s string字符串
 * @return bool布尔型
 */
export function isValidString(s: string): boolean {
  let priorityType = getPriorityType(s);
  sortArr.sort((a, b) => {
    let pa = a == priorityType ? 1 : 0;
    let pb = b == priorityType ? 1 : 0;
    return pb - pa;
  });
  return findMatch(s);
}

function findMatch(s: string, matchNum = 0, startIndex = 0): boolean {
  for (let i = startIndex; i < s.length; i++) {
    let char = s[i];
    if (char === "(") {
      matchNum++;
      continue;
    }
    if (char === ")") {
      matchNum--;
      // console.log(`test:>matchNum:>1`, { matchNum });
      if (matchNum < 0) {
        return false;
      }
    }
    if (char === "*") {
      let match = checkBranch(s, matchNum, i);
      return match;
    }
  }

  // console.log(`test:>matchNum:>2`, { startIndex, matchNum });
  return matchNum === 0;
}

function checkBranch(s: string, matchNum = 0, startIndex = 0) {
  for (const item of sortArr) {
    if (item === "") {
      // ""
      let match3 = findMatch(s, matchNum, startIndex + 1);
      if (match3) {
        return true;
      }
    }
    if (item === "(") {
      // ""
      let match1 = findMatch(s, matchNum + 1, startIndex + 1);
      if (match1) {
        return true;
      }
    }
    if (item === ")") {
      // ""
      let match2Num = matchNum - 1;
      if (match2Num >= 0) {
        let match2 = findMatch(s, match2Num, startIndex + 1);
        if (match2) {
          return true;
        }
      }
    }
  }

  return false;
}

function getPriorityType(s: string) {
  let leftNum = 0;
  let rightNum = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(") {
      leftNum++;
    }
    if (char === ")") {
      rightNum++;
    }
  }
  if (leftNum === rightNum) {
    return "";
  }
  if (leftNum > rightNum) {
    return ")";
  }
  return "(";
}

console.log(
  `test:>`,
  isValidString(
    "*************************************************))))))))))))))))))))))))))))))))))))))))))))))))))"
  )
);
