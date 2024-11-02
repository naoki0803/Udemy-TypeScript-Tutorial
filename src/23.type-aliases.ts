export {};

//typeで、別名の型を作る事が出来る
type Mojiretsu = string;

const hoge: string = 'Hello';
const moge: Mojiretsu = 'Hello';

const example = {
    name: 'Han',
    age: 43,
};

// objectのスキーマを型aliaseで指定する
type Profile = {
    name: string;
    age: number;
};

// 上記で作成したaliase(Profile)をアノテーションで使用
const example2: Profile = {
    name: 'Han',
    age: 43,
};

// typeobを利用すると、exampleの型自体をaliaseとして登録出来る
// typeofの記述は、代入した値の定義が変更されても、動的に型も変更される
// かつ、記述ミスもなくなる
type Profile2 = typeof example;

const example3: Profile2 = {
    name: 'Han',
    age: 43,
};
