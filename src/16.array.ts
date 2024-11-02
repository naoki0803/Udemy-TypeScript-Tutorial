export {};

// Numberの配列
let numbers: number[] = [1, 2, 3];

// Stringの配列
let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeSc'];

// 2次元配列
let nijigenArry: number[][] = [
    [50, 100],
    [150, 300],
];

// 複数型の配列
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];

// 非推奨の書き方として、Array<number>のように、interfaceとGenericsで表現もできる
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];
