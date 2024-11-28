export {};

/** as constとは
 *
 * オブジェクトや配列のプロパティを不変にすることができます。
 * これにより、意図しない変更を防ぎ、型安全性を向上させることができます。
 * 例えば、配列に対してas constを使用すると、配列の要素もリテラル型として扱われます。
 *
 * オブジェクトや配列のプロパティを不変にすることができます。
 * これにより、意図しない変更を防ぎ、型安全性を向上させることができます。
 *
 * また、as constを使用することで、オブジェクトのプロパティもreadonlyとして扱われるため、
 * 変更を防ぐことができます。
 */

let name = 'Taro';
name = 'Jiro';

// letで定義した変数でも、値の後ろに 'as const'をつける事で、定数になる。
let nickname = 'Ham' as const;
// as const を指定したnicknameに対して、'Ham'以外の値を代入する事はできない
nickname = 'HamTaro';

// objectに対してのas const

let normalProfile = {
    name: 'Taro',
    height: 178,
};

// as constを付与しない通常のオブジェクトの場合、値の再代入が可能
normalProfile.name = 'Jiro';
normalProfile.height = 190;

let constProfile = {
    name: 'Taro',
    height: 178,
} as const;

// as constを付与した場合はコンパイルエラーになる
constProfile.name = 'Jiro';
constProfile.height = 190;

// constProfileの型推論を書くにすると以下のように自動で'readonly'が付与されている
// objectのプロパティに追加変更があった場合も、動的にreadonlyが付与される為実装コストが抑えられる
/**
 * let constProfile: {
 *  readonly name: "Taro";
 *  readonly height: 178;
 * }
 */

// 配列も同様
const colors = ['red', 'green', 'blue'] as const;
colors[0] = 'yellow'; // エラー: readonly配列の要素は変更できません
