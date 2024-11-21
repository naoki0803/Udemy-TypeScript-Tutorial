export {};

/** optionalの引数とは
 *
 * 仮引数の記載の末尾に'?'を記載することで、
 * 関数を実行する際に、該当の引数が必須項目でなくなる。
 *
 * @param height
 * @param weight
 * @param printable?
 * @returns
 */
let bmi: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
): number => {
    const bmi: number = weight / (height * height);
    if (printable) {
        console.log('あkldjふぁ');
        console.log({ bmi });
    }
    return bmi;
};
//引数が1つだとコンパイルエラーとなる
// [ERROR] 05:44:36 ⨯ Unable to compile TypeScript:
// src/34.oputional-arguments.ts(8,34): error TS2554: Expected 2 arguments, but got 1.
// console.log('🚀🚀🚀🚀🚀 ~ bmi:', bmi(170, 57));

// bmiを出力するか
// bmi(170, 57, true);
// bmi(170, 57, false);
bmi(170, 57);
