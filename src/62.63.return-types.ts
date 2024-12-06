export {};

/** Return Types
 * 関数の戻り値の型を取得する Utility 型
 */

function add(a: number, b: number) {
    return a + b;
}

type ReturnTypeFromAdd = ReturnType<typeof add>;

// ReturnType の実態
type MyReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer R
    ? R
    : any;

// (...args: any) => any                関数型を意味している記述
// T extends (...args: any) => any      この記述(制約)により、型引数を関数に制限している
// => infer R                           infer によって、関数の戻り値 R を取得している
// つまり、MyReturnTypeは関数の戻り値を返している
