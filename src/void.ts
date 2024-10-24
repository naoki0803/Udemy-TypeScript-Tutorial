export {};

/*
TypeScriptにおけるvoid型は、主に関数の戻り値として使用される特別な型で、
「何も返さない」ことを示します。以下にその特徴と使用例を詳しく説明します。

特徴
戻り値がない関数: 関数が具体的な値を返さない場合に、その戻り値の型としてvoidを指定します。
これは、関数が副作用のみを持ち、特定の値を返さないことを明示するためです123。
undefinedとの違い: JavaScriptでは、戻り値がない関数は実際にはundefinedを返しますが、
TypeScriptではvoid型を使うことで、意図的に何も返さないことを示すことができます。

このため、void型はundefined型よりも「戻り値の利用を想定していない」ことを明示できます。
*/

// 値を何も返さない関数の場合、void型を付ける
function returnNothing(): void {
    console.log('no return');
}

console.log(returnNothing());
