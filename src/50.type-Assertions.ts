export {};

/** 型アサーションとは
 *
 * 型アサーションは、TypeScriptにおいて変数の型を明示的に指定する方法です。
 * これにより、コンパイラに対して特定の型であることを伝えることができます。
 * 
/** アノテーションとアサーションの違い
 * 
 * アノテーションは型を明示的に指定し、型チェックを行うのに対し、アサーションは型を「信じさせる」ことで型チェックを回避します。
 * アサーションは、型が確実であると確信している場合に使用するべきです。
 * 
 * アサーション
 * 目的: 変数の型を明示的に指定することで、コンパイラに特定の型であることを伝えること。
 * 型チェックの回避: 型アサーションを使用すると、コンパイラはその型を信じて型チェックを行わなくなります。これにより、型安全性が損なわれる可能性があります。
 * 
 * アノテーション
 * 目的: 変数や関数の引数、戻り値などに対して、明示的に型を指定すること。
 * 型チェック: コンパイラは指定された型に基づいて型チェックを行い、型の不一致があればエラーを報告します。
 */

let name: any = 'Taro';

//lengthはnumber型を返すが、nameにanyを指定している為、型推論でany型が推論される
let length = name.length;

//any型で推論されているので、lengthに再度文字列を代入する事ができてしまう。
length = 'Jiro';

//パターン1: name.lengthの結果を格納する変数に対してアノテーションする
let assertionLengthPattern1: number = name.length;

//パターン2: as を利用して右辺の'name.length'にアサーションする
let assertionLengthPattern2 = name.length as number;

//パターン3: nameを(val as)にアサーションする
let assertionLengthPattern3 = (name as string).length;

//パターン4: <string>nameとしてアサーションする(jsx記法と類似するため、推奨されない)
let assertionLengthPattern4 = (<string>name).length;
