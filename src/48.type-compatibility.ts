export {};

/** 型の互換性とは
 *  型の互換性あり → ある型に対して、別の形を代入できる
 *  型の互換性なし → ある型に対して、別の形を代入できない
 */

let hogeCompatible: any;
let mogeCompatible: string = 'TypeScript';

console.log('🚀🚀🚀🚀🚀 ~ hogeCompatible:', typeof hogeCompatible);

// string は any に互換性がある
hogeCompatible = mogeCompatible;

console.log('🚀🚀🚀🚀🚀 ~ hogeCompatible:', typeof hogeCompatible);

let hogeInCompatible: string;
let mogeInCompatible: number = 1;

// number は string に互換性がない
hogeInCompatible = mogeInCompatible;

let hogeString: string;
let mogeString: string = 'string';

// string は string に互換性あり
hogeString = mogeString;

let hogeStringLiteral: 'hogeStringLiteral' = 'hogeStringLiteral';
let mogeStringLiteral: 'mogeStringLiteral' = 'mogeStringLiteral';
// stringLiteral型は、string型と互換性がある
hogeString = hogeStringLiteral;
// string Literal型は、Literal型と互換性がない
hogeStringLiteral = mogeStringLiteral;

let hogeNumber: number;
let hogeNumberLiteral: 1976 = 1976;
// numberLiteral型は、number型と互換性がある
hogeNumber = hogeNumberLiteral;

/**構造的部分型
 * オブジェクトの構造（プロパティやメソッドの形）に基づいて型の互換性を判断します。
 * 代入元の型が持つプロパティやメソッドが、
 * 代入先の型に必要なプロパティやメソッドをすべて持っているかどうかによって決まります。
 *
 * ※同じプロパティを持つ限り、異なる型のオブジェクト同士でも互換性があると見なされます。
 */

// 代入元の型: Person
class Person {
    constructor(public age: number) {}
}

// 1. 互換性のある型: 同一の構造(メンバー変数)
// 代入元: classのPerson(メンバー変数がageのみ)
// 代入先: interfaceのAnimal_1を実装した、me_1 (メンバー変数がageのみ)
interface Animal_1 {
    age: number;
}

let me_1: Animal_1;
me_1 = new Person(39); // 互換性あり

// 1. 互換性のない型: 非同一の構造(メンバー変数)
// 代入元: classのPerson(メンバー変数がageとname)
// 代入先: interfaceのAnimal_1を実装した、me_1 (メンバー変数がageのみ)
interface Animal_2 {
    age: number;
    name: string;
}

let me_2: Animal_2;
me_2 = new Person(30, 'Taro'); // 互換性なし
