export {};

let profile1: object = { name: 'Han' };
//object型に異なる型のプロパティを代入してもエラーにはならない。
profile1 = { brithYear: 1976 };

let profile2: {
    name: string;
} = { name: 'Han' };
profile2 = { birthYear: 1976 };
