export {};

// シグネイチャとは、関数の処理内容は書かず｢関数名、引数、戻り値｣の情報を記載する、関数の概要の様な物
// このシグネイチャによって型成約を付ける事が出来る

function double(value: number): number;
function double(value: string): string;

// overloadsの場合、関数の実態(シグネイチャではなく)のアノテーションはany型で定義する
// 関数を呼び出す際に、シグネイチャで定義していない型を引数に指定した場合、コンパイルエラーになる
function double(value: any): any {
    console.log(typeof value);

    // シグネイチャでnumberとstringのみ許容しているので、else if で分岐を作る必要が無い
    // if (typeof value === 'number') {
    //     return value * 2;
    // } else if (typeof value === 'string') {
    //     return value + value;
    // } else {
    //     throw 'numberでもstringでもないので、引数の方を確認してください';
    // }

    if (typeof value === 'number') {
        return value * 2;
    } else {
        return value + value;
    }
}

// function double(value: string): string {
//     return value + value;
// }

console.log(double(100));
console.log(double('Hello'));

// シグネイチャで定義していない型を引数に指定した場合、コンパイルエラーになる
// console.log(double(false));
