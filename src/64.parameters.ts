export {};

/** ParametersTypes
 *
 *  型引数で指定した型(関数？)の、パラメーターの型をtuple型で取得できる
 */
const debugProfile = (name: string, age: number) => {
    console.log({ name, age });
};

debugProfile('Taro', 43);

type Profile = Parameters<typeof debugProfile>; //type Profile = [name: string, age: number]

const badProfile: Profile = ['Taro', 'Jiro']; // tuple方の2番めはnumberである必要があり、コンパイルエラーになる

const goodProfile: Profile = ['Taro', 43];

debugProfile(...goodProfile); // スプレッド公文で定義する必要がある

// Parametersの実態
type Parameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
) => any
    ? P
    : never;

// 1. 型引数時点で、引数が関数であることが保証される
// 2. 1で関数が保証されているので、処理の中身 'T extends (...args: infer P) => any' は常に true になる
// 3. 結果 P には '...args: infer P' で取得した Parameter が返される。
