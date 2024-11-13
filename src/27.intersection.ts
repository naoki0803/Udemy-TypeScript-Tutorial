export {};
/**Intersectionとは
 *
 * intersection（インターセクション）とは、TypeScriptにおいて複数の型を組み合わせて新しい型を作成するための機能です。
 * これにより、複数の型のプロパティを持つオブジェクトを定義することができます。
 * 例えば、Pitcher1型とBatter1型を組み合わせて、両方のプロパティを持つ新しい型を作成することができます。
 * 以下のように、&演算子を使用してインターセクション型を定義します。
 */

type Pitcher1 = {
    throwingSpeed: number;
};

type Batter1 = {
    battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
    throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
    // throwingSpeed: 154, //OchiaiさんはBatter1型をアノテーションしており、Pitcher1型で定義したthrowingSpeedは定義出来ない
    battingAverage: 0.367,
};

//二刀流の大谷選手のような型もできるが、冗長
type _TwoWayPlayer = {
    throwingSpeed: number;
    battingAverage: number;
};

// intersectionを利用する事で、複数の方を組み合わせた新たな型を作成ができる。
type TwoWayPlayer = Pitcher1 & Batter1;
const OtaniShohei: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 2.86,
};
