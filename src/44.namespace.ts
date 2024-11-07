// export {};

// nameSpaceとは
// 同一ファイル内に同一名のclassや変数がある場合、nameSpace内に格納することで、名前の競合を回避してくれる機能

// https://www.perplexity.ai/search/typexcriptniokerunamespacetoha-15XjuzirTZWaPiPGFeFsbw
// TypeScriptにおけるnamespaceとは、以下のような特徴を持つ機能です:
// コードを論理的にグループ化するための方法です。関連する機能をまとめて名前空間として定義できます。
// グローバルスコープの汚染を防ぎ、名前の衝突を避けるのに役立ちます。
// .を使って型やメンバーにアクセスできるようになります。例えばNamespace.Typeのような形式です。
// exportキーワードを使って、名前空間外からアクセスできる要素を指定できます。
// 複数のファイルにまたがって定義することができ、--outFileオプションを使って1つのファイルに結合できます。
// モジュールとは異なり、依存関係を明示的に宣言する必要がありません。
// 主にグローバルな名前空間を整理するために使用されます。
// 現代のTypeScriptでは、モジュールの使用が推奨され、namespaceの使用は特殊なケースに限られる傾向にあります。
// 簡単に言えば、namespaceはコードを整理し、名前の衝突を避けるためのTypeScript独自の機能だと言えます。

namespace Japanese {
    // exportを付加しないと、外部から参照が出来ない。
    export class Person {
        constructor(public name: string) {}
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {}
    }
}

// namespace.namespace内のクラスへアクセスしようとしても、namespaceをexportしていないとエラーになる。
const me = new Japanese.Person('Taro');
console.log('🚀 ~ me:', me);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log('🚀 ~ michael:', michael);

// namexpace がネストされている場合の記述

namespace Japan {
    //ネストされた空間でもexportをする必要がある。
    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {}
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

const tokyoMe = new Japan.Tokyo.Person('TokyoTaro');
console.log('🚀 ~ tokyoMe:', tokyoMe);

const osakaMe = new Japan.Osaka.Person('OsakaTaro');
console.log('🚀 ~ osakaMe:', osakaMe);
