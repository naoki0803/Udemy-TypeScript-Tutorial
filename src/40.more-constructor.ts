export {};

// Typescript特有のClassの省略記法
// メンバー変数とアクセス修飾子を、constructor内で定義しており、コードはスッキリする。
// プロジェクトや内容nよって記述の使い分けは必要で、値を代入するだけのシンプルな物であれば利用する事も検討
class Person {
    constructor(
        public name: string,
        protected age: number,
        protected nationality: string
    ) {}
}

// 本来のClass定義は以下のように、メンバ変数の記述と、constructorでの初期化処理を記述する
/*
    class Person {
        public name: string;
        protected age: number;
        protected nationality: string;

        constructor(name: string, age: number, nationality: string) {
            this.name = name;
            this.age = age;
            this.nationality = nationality;
        }
    }
*/

const me = new Person('Naoki', 38, 'japan');
console.log(me);
