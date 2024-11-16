export {};

/**literal型とは
 *
 */

//曜日を指定する変数に対して日〜土だけを指定したいが、
//stringだけでアノテーションすると、文字列であれば別の内容も許容されてしまう。
let _dayOfTheWeek: string = '日';
_dayOfTheWeek = '月';
_dayOfTheWeek = '31'; //

//特定の文字をアサーションする事(Literal)事で、Excelでいう入力規則と同じように型をアサーションできる。
//また、UNION型で|で区切る事で、複数の文字列を許容する型をアノテーションする事ができる。
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日'; //
dayOfTheWeek = '月';
// dayOfTheWeek = '31'; //ここは許容されない。

//1〜12月だけを許容する方を作成する
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13; // ここは許容されなくなる

let TRUE: true = true; //boolean型でtrueだけを許容する事も可能は可能
// TRUE = false;    //ここは許容されなくなる。
