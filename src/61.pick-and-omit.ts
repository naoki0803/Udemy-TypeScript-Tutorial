export {};

/** --------------------------------------
 * Pick
 * 
 * 特定の型から、必要なプロパティを抽出して新たに型を作成する Utility型
-----------------------------------------*/

type DetailedProfile = {
    name: String;
    height: number;
    wight: number;
};

const taro: DetailedProfile = { name: 'Taro', height: 170, wight: 56 };
console.log(taro['name']);

type SimpleProfile = Pick<DetailedProfile, 'name' | 'wight'>;
// type SimpleProfile = {
//     name: String;
//     wight: number;
// }

// Pick の実態と展開
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
// type Pick<DetailedProfile, K extends keyof DetailedProfile> = {[P in K]: DetailedProfile[P]};
// type Pick<DetailedProfile, 'name' | 'wight'> = {[P in 'name' | 'wight']: DetailedProfile[P]};
// type Pick<DetailedProfile, 'name' | 'wight'> = {['name']: DetailedProfile['name']};
// type Pick<DetailedProfile, 'name' | 'wight'> = {['wight']: DetailedProfile['wight'];
// };

// マッピングについてAIに確認した内容
// https://chatgpt.com/share/6752126c-c424-8003-bb5b-c8e74f280e6a

/** ----------------------------------------------------------------
 * Omit
 * 
 * 特定の型から、不要なプロパティを除外して新たに型を作成する Utility
-------------------------------------------------------------------*/
type smallProfile = Omit<DetailedProfile, 'height'>;
// type SmallProfile = {
//     name: String;
//     wight: number;
// }

// Omit の実態と展開
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type MySmallProfile = MyOmit<DetailedProfile, 'height'>;

/** 展開
 * 1. K に代入される、'height' は、K extends keyof any で、string に該当するので、 K = 'height' になる
 *      type MyOmit<T> = Pick<T, Exclude<keyof T, 'height'>>;
 *
 * 2. Exclude<keyof T, 'height'> が実行されて、 右辺は Pick<T, 'name' | 'wight'> になる
 *      type MyOmit<T> = Pick<T, 'name' | 'wight'>;
 *
 * 3. Pick が実行される
 *      type MySmallProfile = {
 *          name: String;
 *          wight: number;
 *       }
 *  */
