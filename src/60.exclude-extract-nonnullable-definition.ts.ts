export {};

/** ------------------------------------------------
 *  Exclude を例に、Conditional Types の動作を確認する)
---------------------------------------------------*/

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Excludeの定義元をMyExcludeとして定義
type MyExclude<T, U> = T extends U ? never : T;

type MyFunctionType = MyExclude<SomeTypes, string | number>;

/** MyExclude の処理の実態
 *
 * 1. 第二引数 U には、 UnionType の string | number が渡される
 *      type MyExclude<T> = T extends string | number ? never : T;
 *
 * 2. 第一引数 T には Distributive Conditional Types として SomeTypes が渡される
 *      Distributive Conditional は引数にunionが渡されると、以下のようにTに対して一つづつ展開される
 *      type MyExclude<string | number | DebugType> =
 *         (string extends string | number ? never : string
 *         |(number extends string | number ? never : number
 *         |(DebugType extends string | number ? never : DebugType;
 *
 * 3. 条件式を適用すると type MyExclude = DebugType となる
 *      type MyExclude =
 *         never        ※true
 *         |never       ※true
 *         |DebugType   ※false
 * */

/** ---------------------------------------
 *  Distributive Conditional Typesについて
-----------------------------------------*/
// https://zenn.dev/hrkmtsmt/articles/be9a20fa7d3aaf

// Distributive conditional types
// Conditional types in which the checked type is a naked type parameter are called distributive conditional types.
// Distributive conditional types are automatically distributed over union types during instantiation.
// For example, an instantiation of T extends U ? X : Y with the type argument A | B | C
// for T is resolved as (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y).
