// モジュール化する事で、グローバル変数のスコープを外しエラーを回避する
export {};

// export {};の記述が無いと、エラーになる。
let name = 'TypeScript';

let isFinished: boolean = true;

// 同じboolean型は再代入ができる
isFinished = false;

// number型は代入できず、errorになる
// isFinished = 1;
console.log({ isFinished });
