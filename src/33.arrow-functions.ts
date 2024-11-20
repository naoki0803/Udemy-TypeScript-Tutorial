export {};

/** アロー関数の基本的な型定義
 *
 * アロー関数において実施するアノテーションは、以下の3点
 *
 *  1. 引数
 *  2. 戻り値
 *  3. 無名関数として定義した変数自体   //型推論が正しければ、アノテーションしない事も問題ない
 *
 * 変数にアノテーションを付けることで、以下のメリットがあります:
 * 1.コードの意図が明確になり、可読性が向上する
 * 2. 実装前に関数の型を定義できる
 * 3. 誤った型の関数を代入するミスを防ぐことができる
 *
 * ただし、関数の実装が明確で型推論が適切に行われる場合は、変数のアノテーションを省略しても問題ありません4。
 *
 *
 * @param height
 * @param weight
 * @returns
 */

let bmi: (weight: number, height: number) => number = (
    weight: number,
    height: number
): number => {
    return weight / (height * height);
};

let oneLineBmi: (weight: number, height: number) => number = (
    weight: number,
    height: number
): number => weight / (height * height); //アロー関数で1行で表現される場合、{}とreturを省略可能

console.log('🚀🚀🚀🚀🚀 ~ bmi ~ bmi:', bmi(1.7, 56));
console.log('🚀🚀🚀🚀🚀 ~ bmi ~ bmi:', oneLineBmi(1.7, 56));
