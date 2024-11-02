export {};

class Person {
    public name: string; //public:   クラス内外から参照が可能。 ※記載しなくても同じ意味になる為、基本的には記述しない
    // private age: number; //private:  クラス内のメンバー変数であれば直接参照出来るが、作成したインスタンスから直接参照が出来ない
    protected age: number; //Androidクラスは、Personクラスを継承している為、ageがprotectedでないと、Androidクラスからのアクセスが出来ない。
    protected nationality: string;
    // constructorはreturnが無いので、返り値に対してアノテーションは行わない
    // 戻り値が無い型の、voidを指定するとエラーになり、言語仕様として記載しないことを覚えておく必要がある。
    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string {
        return `name:${this.name}, age:${this.age}, nationality:${this.nationality}`;
    }
}

class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        super(name, age, nationality);
    }
    profile(): string {
        // ageは継承元のPersonのアクセス装飾子がprotectedであれば、Androidクラスからageにアクセスが出来る。
        return `name:${this.name}, age:${this.age}, nationality:${this.nationality}`;
    }
}

let taro = new Person('Taro', 35, 'japan');
// let jiro = new Person();
// let hanako = new Person();

console.log(taro.name);
// console.log(taro.age);   //Personクラスのメンバー変数で、アクセス修飾子'private'を不要してるので、インスタンスから直接アクセスが出来ない
console.log(taro.profile()); //profile()の中でageを利用しているが、Person内で直接定義している為、profile()を通してであれば、ageに外からもアクセスは可能
