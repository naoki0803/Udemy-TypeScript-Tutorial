export {};
/** とは
 * unknownは、任意の値を持つことができるが、その値の型が何であるかは不明であることを示します。
 * any型と似ていますが、unknown型はより安全です。unknown型の値を使用する前に、
 * その型を確認する必要があります。
 * これにより、型安全性が向上し、予期しないエラーを防ぐことができます。
 */
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();
