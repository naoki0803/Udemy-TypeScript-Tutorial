export {};

/** tuple型とは
 *
 * タプルとは構造のことです。
 * TypeScriptでは、タプルを使用することで、特定の型の組み合わせを定義し、
 * その順序を保証することができます。タプルは配列に似ていますが、
 * 要素の型と数が固定されている点が異なります。
 */

// この記述だと、共用型の場合、順序性の成約は付加されない
let profile: (string | number)[] = ['Ham', 43];
profile = [43, 'Ham']; // 順番を変えてもエラーにならない

let profile2: [string, number] = ['Ham', 43];
//tuple型は順番を変えるとエラーになる
// profile2 = [43, 'Ham'];

// tuple型は型推論されないので、セルフで記述する必要がある
