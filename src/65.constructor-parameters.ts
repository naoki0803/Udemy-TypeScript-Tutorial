export {};

/** ConstructorParametersTypes
 *
 *  class で定義している constructor の parameter を tuple 型で取得できる ConditionalTypes
 */

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let Taro = new Person('Taro', 30);
type Profile = ConstructorParameters<typeof Person>;

const profile: Profile = ['Jiro', 35];
const jiro = new Person(...profile);
console.log('🚀🚀🚀🚀🚀 ~ jiro:', jiro); //🚀🚀🚀🚀🚀 ~ jiro: Person { name: 'Jiro', age: 35 }

// ConstructorParametersの実態;
type ConstructorParameters<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: infer P) => any ? P : never;

/**
 * 1. <T extends abstract new (...args: any) => any>  で受取る型引数を class に制約する
 * 2. 1でclass制約されるので処理の中身 'T extends abstract new (...args: infer P) => any ' は true になる
 * 3. ...args: infer P に格納した、引数が、tuple型で返される
 */
