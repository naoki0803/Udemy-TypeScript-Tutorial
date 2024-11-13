export {};

/** never型とは
 *
 * never型は、TypeScriptにおいて特別な型で、関数が決して正常に戻らないことを示します。
 *  1. 例外を投げる関数: never型を持つ関数は、常に例外を投げるため、正常に戻ることがありません。
 *     例えば、throw文を使用する関数はnever型になります。
 *  2. 無限ループ: 終わらない無限ループを持つ関数もnever型と見なされます。
 *  3. 型の安全性: never型は、他の型と互換性がないため、意図しない値の代入を防ぐことができます。
 */

// this function is never return
// never型は呼び出し元に戻ってこない型

function error(message: string): never {
    throw new Error(message);
}

try {
    error('errorだよ');
} catch (error) {
    console.log(error);
}

const afterMessage: string = 'try/catch後の処理';
console.log(afterMessage);

// let hoge: void = undefined; //void型はundefindeを含むのでエラーにならない
// let moge: never = undefined; //値が帰ってこないので、undefinedやnullは代入できない。
// let fuga: never = error('error関すはnever型で定義しているので代入できる'); //利用用途はないが、仕様として理解する
