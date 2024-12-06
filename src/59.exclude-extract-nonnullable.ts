export {};

/**. Exclude と Extract と Nun Nullableとは
 *  ユニオン型から特定の型を除外(Exclude) or 抽出(Extract)して新しい型を作成します
 *  ユニオン型に対してのみ使用可能
 */

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

/** ------------------------------------
 *              Exclude (除外)
---------------------------------------*/
// Excludeの公文
// Exclude<Union, 除外するもの>

// string と number を除外する
type FunctionType = Exclude<SomeTypes, string | number>;

// DebugType(自作した関数の型) を除外する
type NunFunctionType = Exclude<SomeTypes, DebugType>;

// 関数の型を除外する
// SomeTypes に別の型が追加されたときに、メンテナンスが必要になるが、
// 関数すべてを汎用的に除隊したい場合、Function を指定する事が可能。
type TypeExcludingFunction = Exclude<SomeTypes, Function>;
// type TypeExcludingFunction = string | number

/** ------------------------------------
 *              Extract (抽出)
---------------------------------------*/
// Extractの公文
// Extract<Union, 抽出するもの>

// DebugType(自作した関数の型) を抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// string と number を抽出する
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;

// 関数の型を抽出する
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

/** --------------------------------------------------
 *              NonNullable (null や undefined を排除)
-----------------------------------------------------*/
// NonNullableの公文
// NonNullable<null や undefined を除く union 型>

// NullableTypes から null と undefined を除外
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
// type NonNullableTypes = string | number
