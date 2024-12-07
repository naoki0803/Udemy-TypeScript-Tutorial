export {};

// 作成する機能の要件
/*
    Owner
        − 所有者を管理
        - 初期化時に設定が出来る    ※constructorで設定可能
        - 途中で変更できない       ※privateに設定
        - 参照出来る              ※getterを定義
    SecretNumber
        - 個人番号を管理
        - 初期化時に設定が出来る    ※constructorで設定可能
        - 途中で変更できる         ※setterを定義
        - 参照できない             ※privateに設定
*/

class MyNumberCard {
    private _owner: string; //getterのownerと名前が重複するので、メンバ変数は_をつけて記述する。 ※アンダースコアを付与するのがTypescriptの慣習的な記述方法
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner() {
        return this._owner;
    }

    set secretNumber(newSecretNumber: number) {
        this._secretNumber = newSecretNumber;
    }

    // 変更した_secretNumberの値を確認する為の関数(外部参照不可の為、debug用で値を返す関数を作成)
    debugConsole() {
        return this._secretNumber;
    }
}

let card = new MyNumberCard('Jiro', 1234567890);
// card.owner = 'hoge'; ownerはprivateの為途中で変更不可
console.log(card.owner);

// setterにより、途中で値の変更が可能になっている。
card.secretNumber = 1111111111;
// 変更された値を確認する
console.log(card.debugConsole());

// 直接メンバー変数(実際はsetter)の値を変えようとすると、戻り値は'undefined'になる
//実際setterにはreturnも記載していない。
console.log(card.secretNumber);
