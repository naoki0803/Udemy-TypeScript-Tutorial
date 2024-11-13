export {};
/** unknownとは
 *
 * unknownは、任意の値を持つことができるが、その値の型が何であるかは不明であることを示します。
 * any型と似ていますが、unknown型はより安全です。unknown型の値を使用する前に、
 * その型を確認する必要があります。
 * これにより、型安全性が向上し、予期しないエラーを防ぐことができます。
 */
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log('🚀🚀🚀🚀🚀 ~ sumAny:', sumAny);

//以下記述では、numberUnknownは、型がunknownなので、足し算が出来ない可能性がありコンパイルエラーになる。
//javaScriptの場合エラーが発生しないので、コーディング中にエラーを認識できる
//  let sumUnknownAny = numberUnknown + 10; // ここでコンパイルエラーになる

//対処方法
//typeofで事前に型を確認し、if分で型に合わせた処理を記述してあげる。
console.log('🚀🚀🚀🚀🚀 ~ sumAny:', typeof sumAny); // 🚀🚀🚀🚀🚀 ~ sumAny: number

if (typeof numberUnknown === 'number') {
    let sumUnknownAny = numberUnknown + 10;
    console.log('🚀🚀🚀🚀🚀 ~ sumUnknownAny:', sumUnknownAny);
}
