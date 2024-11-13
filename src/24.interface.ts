export {};

/** とは
 * interfaceはTypeScriptにおいて、オブジェクトの形状を定義するための構文です。
 * typeと似ていますが、いくつかの違いがあります。(詳細は 47.return-of-interfaces.tsにて記述)
 * 主な特徴
 *  1. 拡張性: interfaceは他のinterfaceを拡張することができます。
 *      これにより、既存の型を基に新しい型を作成することが容易になります。
 *  2. マージ: 同じ名前のinterfaceを複数定義すると、TypeScriptはそれらをマージします。
 *      これにより、型の定義を分割して管理することができます。
 *  3. クラスとの統合: interfaceはクラスに実装させることができ、クラスが特定の形状を持つことを保証します。
 */

type ObjectType = {
    name: string;
    age: number;
};

let object: ObjectType = {
    name: 'hoge',
    age: 43,
};

// interfaceもtypeと同様に形に名前をつけて、利用する事が出来る
// type と interfaceの違いや、interfaceのclassでの利用については別講義で学ぶ
interface ObjectInterface {
    name: string;
    age: number;
}

let object1: ObjectInterface = {
    name: 'hoge',
    age: 43,
};
