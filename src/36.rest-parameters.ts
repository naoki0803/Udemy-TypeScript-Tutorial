export {};

const array: number[] = [1, 2, 3, 4];

//reduce内で利用するコールバック関数
const reducer = (accumulator: number, currentValue: number): number => {
    return accumulator + currentValue;
};

//restParameterで受け取ると、数値の配列になる。
const sum: (...values: number[]) => number = (...values: number[]) => {
    console.log(values); //[ 1, 2, 3, 4, 5 ]
    return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
