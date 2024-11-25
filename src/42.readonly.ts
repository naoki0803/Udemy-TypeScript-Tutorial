export {};

// readonlyとはクラスのプロパティを読み取り専用にする物

class VisaCard {
    //ownerに対して読み取り専用のアクセス修飾子を付与すると、参照は可能だが変更が出来なくなる。
    readonly owner: string;

    constructor(owner: string) {
        this.owner = owner;
    }
}

let myVisaCard = new VisaCard('Taro');

console.log(myVisaCard.owner);

// readonlyを付与したメンバー変数の値を変更する事は出来ない。
// myVisaCard.owner = 'Jiro';

// 省略記法時のreadonlyの公文
class AnotherVisaCard {
    //public と readonlyは順不同かつ、readonly を記載している場合、publicは省略も可能
    //ただし、省略記法を知らない人に対して、可読性が下がる為省略はしないほうが良いかもしれない。

    // constructor(public readonly owner: string) {}
    // constructor(public readonly owner: string) {}
    constructor(readonly owner: string) {}
}

let anotherCard = new AnotherVisaCard('Jiro');
console.log(anotherCard.owner);
