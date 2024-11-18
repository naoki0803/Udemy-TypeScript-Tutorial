export {};

/** 関数の基本的な型定義
 *
 * 関数において実施するアノテーションは、以下の2点
 *  1. 引数
 *  2. 戻り値
 *
 * @param height
 * @param weight
 * @returns
 */

//引数
function bmi(height: number, weight: number): number {
    return weight / (height * height);
}

console.log(bmi(1.7, 57));
