export {};

let profile1: object = { name: 'Han' };
//object型に異なる型のプロパティを代入してもエラーにはならない。
profile1 = { brithYear: 1976 };

let profile2: {
    name: string;
} = { name: 'Han' };
// 型を{}で指定すると、その中のプロパティをアノテーション(形を指定)する事が出来る
// profile2 = { birthYear: 1976 }; // stringではないのでエラーになる
