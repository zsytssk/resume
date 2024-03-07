// infer
type MyReturnType<T> = T extends (...args: any[]) => infer T ? T : never;
type MyParamsType<T> = T extends (...args: infer T) => any ? T : never;

export function test(a: string) {
  return 1;
}
type ReturnTypeTest = MyReturnType<typeof test>;
type ParamsTypeTest = MyParamsType<typeof test>;

// readonly
type MyReadonly<T = Record<string, any>> = {
  readonly [key in keyof T]: T[key];
};

type ReadonlyDemo = { x: number; y: string };
type ReadonlyTest = MyReadonly<ReadonlyDemo>;

// filter
type FilterDemo = { x: number; y: string; z: string; readonly t: number };
type FilterKeys<T, S> = {
  [key in keyof T]: T[key] extends S ? key : never;
}[keyof T];

type FilterProps<T, S> = {
  [key in FilterKeys<T, S>]: T[key];
};
type FilterKeyTest = FilterKeys<FilterDemo, string>;
type FilterNumTest = FilterProps<FilterDemo, string>;

// Pick
type MyPickKeys<T, K> = {
  [key in keyof T]: key extends K ? key : never;
}[keyof T];
type MyPick<T, K> = {
  [key in MyPickKeys<T, K>]: T[key];
};
type MyPickTest = MyPick<FilterDemo, "x" | "y">;

// Omit
type MyOmitKeys<T, K> = {
  [key in keyof T]: key extends K ? never : key;
}[keyof T];
type MyOmit<T, K> = {
  [key in MyOmitKeys<T, K>]: T[key];
};
type MyOmitTest = MyOmit<FilterDemo, "x" | "y">;

// filter -
type MyPickTest2 = { readonly x: number } extends { readonly x: number }
  ? true
  : never;
// type UnitKeys = MyPickTest2<FilterDemo>;
// type Test = Readonly<FilterDemo>;
type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? A
  : B;

// type WritableKeys<T> = {
//   [P in keyof T]-?: IfEquals<
//     { [Q in P]: T[P] },
//     { -readonly [Q in P]: T[P] },
//     P
//   >;
// }[keyof T];

// type ReadonlyKeys<T> = {
//   [P in keyof T]-?: IfEquals<
//     { [Q in P]: T[P] },
//     { -readonly [Q in P]: T[P] },
//     never,
//     P
//   >;
// }[keyof T];

// type ReadonlyKeysTest = {
//   [key in ReadonlyKeys<FilterDemo>]: FilterDemo[key];
// };
