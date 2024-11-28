export {};

/** index signatureとは
 *
 * オブジェクトに対して動的にプロパティを追加するための方法です。
 * これにより、事前にプロパティ名がわからない場合でも、オブジェクトを柔軟に扱うことができます。
 *
 * ※実務では、ユーザーの設定やAPIレスポンスなど、動的なデータ構造を扱う際に便利です。
 */

// アノテーションされていないオブジェクトに対して、プロパティを追加するとコンパイルエラーが発生してしまう。
let profile: {} = {};
profile.name = 'Taro';
profile.age = 18;

// index signaturesを適用することで、オブジェクトに動的なプロパティ追加ができる
// ※index signaturesの書き方(公文)
// {[index: typeForIndex]: typeForValue}
let indexSignaturesProfile: { [index: string]: string | number } = {};
//任意のプロパティに対して値を代入ができる
indexSignaturesProfile.name = 'Taro';
indexSignaturesProfile.age = 18;
indexSignaturesProfile.nationality = 'Japan';
console.log('🚀🚀🚀🚀🚀 ~ indexSignaturesProfile:', indexSignaturesProfile);

// index signaturesを外で定義する事も可能
interface Profile1 {
    [index: string]: string | number;
}
let smartIndexSignaturesProfile: Profile1 = {};

// 必須パラメータを含むオブジェクトと、indexSignatureが混在する場合、
// index signatureに、必須項目の値の型を追加する必要がある(以下例ではbooleanを追加している)
interface Profile2 {
    underTwenty: boolean;
    [index: string]: string | number | boolean; //必須パラメータである、booleanも追加する必要がある。
}
let underTwentyProfile: Profile2 = { underTwenty: true };
underTwentyProfile.name = 'Taro';
console.log('🚀🚀🚀🚀🚀 underTwentyProfile:', underTwentyProfile);

/** index signatureを利用する場面について(備忘録)

    上記の例で underTwentyProfile.name = 17; というふうに、
    本来string型にしたいプロパティにnumber型が代入が可能な為、
    index signatureを利用する前提や背景について調べました。

1. 不特定のプロパティを持つオブジェクト
特定のプロパティが事前にわからない場合、インデックスシグネチャを使用して、任意のプロパティを持つオブジェクトを定義できます。例えば、ユーザーの設定やオプションを格納するオブジェクトなどです。
    ```
    interface UserSettings {
        [key: string]: string | number | boolean;
    }

    let settings: UserSettings = {
        theme: 'dark',
        fontSize: 14,
        notificationsEnabled: true,
    };
    ```

2. APIレスポンスの処理
APIからのレスポンスが動的で、プロパティが事前にわからない場合にインデックスシグネチャを使用できます。例えば、JSONレスポンス

    ```
    interface ApiResponse {
        [key: string]: any; // 任意の型を許可
    }

    let response: ApiResponse = {
        status: 'success',
        data: { id: 1, name: 'Taro' },
        timestamp: 1625256000,
    };
    ```

    3. プロパティの拡張
既存のオブジェクトに新しいプロパティを追加する必要があるが、すべてのプロパティを事前に定義するのが難しい場合に便利です。

型安全性を確保するには？
- 型ガードを使用する: プロパティにアクセスする前に、その型を確認する。
- 特定のプロパティを明示的に定義する: 必要なプロパティはインターフェースで明示的に定義し、その他のプロパティにはインデックスシグネチャを使用する。
    ```
    interface Profile {
        name: string;
        age: number;
        [key: string]: string | number; // その他のプロパティ
    }

    let profile: Profile = {
        name: 'Taro',
        age: 18,
    };

    // 型安全を保つために、プロパティの型を確認する
    if (typeof profile.name === 'string') {
        console.log(profile.name);
    }
    ```
 */
