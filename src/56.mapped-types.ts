export {};

/** Partialの中身
 *
 * Partialの定義は以下の様になっており、引数として受け取った型を一つづつループして、
 * union型 + ？ で、すべてのプロパティを、オプショナルとして再定義している
 *
 * type Partial<T> = { [P in keyof T]?: T[P] | undefined };
 *
 */

type Profile = {
    name: string;
    age: number;
    nationality: string;
};

// taroをProfile型で、ageが不足した状態で初期化するとコンパイルエラーになる
// let taro: Profile = {
//     name: 'taro',
//     nationality: 'japan',
// };

// Partialを利用して、optionalなプロパティに変換する
type PartialProfile = Partial<Profile>;

// jiroはageを定義していなくてもエラーにならない。
let jiro: PartialProfile = {
    name: 'jiro',
    nationality: 'japan',
};

/** ------------------------------------------------------−
 *                    Partialの実態
---------------------------------------------------------−*/
// Partialにカーソルをあわせて[F12]で参照すると以下のように記述されている
type Partial<T> = { [P in keyof T]?: T[P] | undefined };

// <T>を引数に受取、処理の中で、[P in keyof T]?: T[P]とすることで,
// Profile内のプロパティをmap関数のように取り出している。

// T = Profile
// P = Profile内のプロパティを一つずつ取得
// T[P] = 型  ※Profile[name] = string

//実際の処理の中身は以下のように動いている
// 1   ['name']?: string
// 2   ['age']?: number
// 3   ['nationality']?: string
//     | undefined

// 新たに Partialのような独自のUtility型を作成する事も可能
type Optional<T> = { [P in keyof T]?: T[P] | undefined };

// 独自に作成したOptional Utilityで新たにoptionalProfileを定義
type optionalProfile = Optional<Profile>;

//nameプロパティだけでも、定義できる
let saburo: optionalProfile = {
    name: 'saburo',
};

// 更にNullも許容するような型として、独自に中身を変更も可能
type nullable<T> = { [P in keyof T]?: T[P] | undefined | null };
type nullableProfile = nullable<Profile>;

let goro: nullableProfile = { name: null, age: null };
console.log(goro);
