export {};

/**union型とは
 * union型は、複数の型を組み合わせて使用できる型のことを指します。
 * 例えば、number型とstring型をorで結合することで、どちらの型も受け入れることができます。
 */

//以下のような記述だと1を代入したタイミングで型推論でnumber型がアサーションされる
// let value = 1;
// value = 'hoge'; //

let value: number | string = 1;
value = 'hoge';
