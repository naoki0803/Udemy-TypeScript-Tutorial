export {};

/** Readonly Typeとは
 * ユーティリティ型の一つで、
 *
 * オブジェクトのすべてのプロパティを読み取り専用（readonly）にするための型です。
 * これにより、オブジェクトのプロパティが変更されるのを防ぐことができます。
 */

type Profile = {
    name: string;
    age: number;
};

let me: Profile = {
    name: 'Taro',
    age: 99,
};

// 何も制約を設けていなければ、me.ageの中身を変更する事ができる
me.age++;
console.log(me); //100

// Readonlyを利用して、すべてreadonlyのプロパティとして再定義する
type PersonalDataType = Readonly<Profile>;
//readonlyの実態
//type Readonly<T> = { readonly [P in keyof T]: T[P]; }

const friend: PersonalDataType = {
    name: 'Jiro',
    age: 33,
};

// ageの値を変更しようとするとコンパイルエラーが発生する
friend.age++;
