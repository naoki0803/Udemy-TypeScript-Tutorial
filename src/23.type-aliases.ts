export {};

/** type-aliasとは
 *
 * type-alias（型エイリアス）とは、TypeScriptにおいて、特定の型に別名を付ける機能です。
 * これにより、複雑な型を簡潔に表現したり、再利用可能な型を定義したりすることができます。
 * 型エイリアスを使用することで、コードの可読性が向上し、型の管理が容易になります。
 */

//typeで、別名の型を作る事が出来る
type Mojiretsu = string;

const hoge: string = 'Hello';
const moge: Mojiretsu = 'Hello';

const example = {
    name: 'Han',
    age: 43,
};

// objectのスキーマを型aliasで指定する
type Profile = {
    name: string;
    age: number;
};

// 上記で作成したalias(Profile)をアノテーションで使用
const example2: Profile = {
    name: 'Han',
    age: 43,
};

// typeofを利用すると、exampleの型自体をaliasとして登録出来る
// typeofの記述は、代入した値の定義が変更されても、動的に型も変更される
// かつ、記述ミスもなくなる
type Profile2 = typeof example;

const example3: Profile2 = {
    name: 'Han',
    age: 43,
};
