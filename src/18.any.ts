import axios from 'axios';
export {};

/** any型とは
 *
 * anyはTypeScriptにおける特別な型で、任意の型の値を持つことができることを示します。
 * any型を使用すると、TypeScriptの型チェックを回避することができ、どんな型の値でも受け入れることができます。
 * これにより、柔軟性が増しますが、型安全性が失われるため、使用には注意が必要です。
 */

// prettier-ignore
let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
    //以下コメント行のように、object[]で指定もできるが、object内のプロパティは成約がされない
    // let data: object[];

    //interfaceを用いて、objectのスキーマを定義できる。
    interface Article {
        id: number;
        title: string;
        description: string;
    }
    // interfaceで作成したArticleで型を指定する
    let data: Article[] = response.data;

    // data がArticleで指定した型と異なる場合、エラーになる
    // data = [
    //     {
    //         id: '1', //型が異なっていてもエラー
    //         title: 'aaaa',
    //         // description: 'bbbbb',  //プロパティが不足でもエラー
    //         category: 'fantasy', //プロパティが多くてもエラー
    //     },
    // ];
    console.log(data);
});
