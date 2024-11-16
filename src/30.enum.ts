export {};

/**enumとは
 * enum型とは、TypeScriptにおいて関連する定数の集合を定義するための機能です。
 * enumを使用することで、各キーに対して自動的に連番の値（インデックス）を付与することができます。
 * これにより、コードの可読性が向上し、定数の管理が容易になります。
 *
 */

// 1~12月に対して、シーケンシャルな番号を手動で割り振る場合
// 以下のように手動で入力する必要があり、手間と入力ミスの可能性がある。
const ManualMonths: any = {
    January: 1,
    February: 2,
    April: 3,
    March: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
};

// enumとすることで、自動的にkeyに対してvalueの値がシーケンシャルに振られる
enum Months {
    January = 1, //indexの値を指定する事で、Januaryを0スタートではなく1スタートにすることが可能
    February,
    April,
    March,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}
console.log('🚀🚀🚀🚀🚀 ~ Months.January:', Months.January); //🚀🚀🚀🚀🚀 ~ Months.January: 1

//文字列のenum型

enum COLORS {
    RED = '#FF000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log('🚀🚀🚀🚀🚀 ~ green:', green);

//enumの中にyellowがない状態だとエラーになる。
// let yellow = COLORS.yellow;

// 利用したい直前でenumに値を追加する事が可能
enum COLORS {
    YELLOW = '#FFFF00',
}
let yellow = COLORS.YELLOW;

console.log('🚀🚀🚀🚀🚀 ~ COLORS:', COLORS);
//🚀🚀🚀🚀🚀 ~ COLORS: {
//           RED: '#FF000',
//           WHITE: '#FFFFFF',
//           GREEN: '#008000',
//           BLUE: '#0000FF',
//           BLACK: '#000000',
//           YELLOW: '#FFFF00'
//         }
