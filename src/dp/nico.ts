// https://blog.nowcoder.net/n/3ae2828dac364e9f86ff1b39ae87dd77?from=nowcoder_improve
// nico和niconiconi

export function parseInput(input: string[]) {
  const score = input[0].split(" ").slice(1).map(Number);
  const charList = input[1].split("");
  const sumList: [number, number][] = [];
  for (let i = 0; i < charList.length; i++) {
    //
  }
  return Math.max(...sumList.map((item) => item[0]));
}

console.log(
  parseInput(
    `19 1 2 5
niconiconiconiconi~`.split("\n")
  )
);
