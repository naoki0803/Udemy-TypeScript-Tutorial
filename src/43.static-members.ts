export {};

// いつも決まった変化しないメンバーや、インスタンスを作成せず直接アクセスできるclassがstatic

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Taro';
    static lastName: string = 'Tanaka';

    static work() {
        // return "Hey, guys! Are you interested in TypeScript? let's dive into TypeScript:";
        return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? let's dive into TypeScript:`;
    }
}

// static 修飾子を付与したメンバーへのアクセスは、インスタンス経由では出来ない。
// let me = new Me();
// console.log(me.isProgrammer); // isProbrammerの部分でコンパイルエラーになる error TS2576: Property 'isProgrammer' does not exist on type 'Me'. Did you mean to access the static member 'Me.isProgrammer' instead?

// classに直接接続する事で、メンバー変数にアクセスする事ができる。
console.log(Me.isProgrammer);
console.log(Me.work());
