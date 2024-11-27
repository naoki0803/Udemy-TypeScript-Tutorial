export {};

/** genericsとは
 *
 * generics = 汎用的classやメソッドという意味で利用される
 * また、定義時点では型が決まっていない状態の場合に抽象的な引数と戻り値を、<T>を用いて表現する
 * ※ジェネリック医薬品はブランドは無いけど、意味(効果)は同じ
 *
 */

/** genericsを利用しない場合
 *
 * 同一関数echoで異なる型の引数と返り値を定義する場合、Signatureを定義して、
 * 関数を実装する際に、型の違いによる分岐を記載する必要がある。
 */
function signatureEcho(arg: string): string;
function signatureEcho(arg: number): number;

function signatureEcho(arg: any): any {
    if (typeof arg === 'number') {
        return arg * 2;
    } else {
        return arg + arg;
    }
}

/** generics関数を定義する方法
 *
 * 引数の前に<T>と記載し、引数と戻り値をそれぞれTとする
 * 慣習的にgenericsはTで表現される
 * <T>は引数argの型であり、戻り値の型でもある
 */

const genericsEcho = <T>(arg: T): T => {
    return arg;
};

//
// アロー関数でなくてももちろん利用可能
function hoge<T>(value: T): T {
    return value;
}

/** genericsメソッドを呼び出す場合
 *  引数の前に<型>を指定して呼び出す
 */
console.log(genericsEcho<string>('Hello'));
console.log(genericsEcho<number>(100));
console.log(genericsEcho<boolean>(false));

/** ------------------------------------------------------−
 *                     classのgenerics
---------------------------------------------------------−*/
/** classのgenerics化
 *  class名の後ろに<T>を記載し、class内部で扱う型もTで表現する
 */
class GenericsMirror<T> {
    constructor(public value: T) {}

    echo(): T {
        return this.value;
    }
}
/** genericsメソッドを呼び出す場合
 *  引数の前に<型>を指定して呼び出す
 */
console.log(new GenericsMirror<number>(123).echo());
console.log(new GenericsMirror<string>('HelloGenericsClass').echo());
console.log(new GenericsMirror<boolean>(true).echo());
