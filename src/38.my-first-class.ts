export {};

class Person {
    name: string;
    age: number;

    // constructorはreturnが無いので、返り値に対してアノテーションは行わない
    // 戻り値が無い型の、voidを指定するとエラーになり、言語仕様として記載しないことを覚えておく必要がある。
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    profile(): string {
        return `name:${this.name}, age:${this.age}`;
    }
}
let taro = new Person('Taro', 35);
// let jiro = new Person();
// let hanako = new Person();

console.log(taro.profile());
