export {};

/**
 * rest-parameterとは
 *
 * 関数の引数として不特定の数の引数を受け取ることができる構文です。
 * これにより、配列として引数を扱うことができます。
 * 例えば、sum関数は任意の数の数値を受け取り、その合計を計算します。
 */

//reduce内で利用するコールバック関数
const reducer = (accumulator: number, currentValue: number): number => {
    return accumulator + currentValue;
};

//restParameterで受け取ると、数値の配列になる。
const sum: (...values: number[]) => number = (...values: number[]) => {
    return values.reduce(reducer);
};

//option引数のinitialValueを追加した場合、rest公文は引数の最後に移動する必要がある。
const sumWithInitial: (initialValue: number, ...values: number[]) => number = (
    initialValue: number,
    ...values: number[]
) => {
    console.log(values); //[ 1, 2, 3, 4, 5 ]
    return values.reduce(reducer, initialValue);
};

console.log(sum(5, 1, 2, 3, 4));
console.log(sumWithInitial(5, 1, 2, 3, 4));
