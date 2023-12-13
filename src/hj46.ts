// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input:string[] = [];
// rl.on('line', function (line) {
//     input.push(line);
// });
// rl.on('close', () => {
//    console.log( parseInput(input));
// });

/**
 * https://www.nowcoder.com/practice/a30bbc1a0aca4c27b86dd88868de4a4a
 * HJ46 截取字符串
 */

function parseInput(input: string[]) {
  let str = input[0];
  let len = parseInt(input[1]);

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= len) {
      break;
    }
    result += str[i];
  }

  return result;
}
