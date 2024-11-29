export {};

// 必須プロパティを定義したprofileを定義する
type profile = {
    name: string;
    age: number;
};

// profileと同じ構造かつ、オプショナルなプロパティが必要な場合、
// 愚直に実装すると以下のようになるが、大本のprofileのプロパティが追加になると、
// 修正箇所が2個所になってしまう。
type profile_2 = {
    name?: string;
    age?: number;
};

// オプショナルなプロパティを自動変換してくれるUtilityとして｢partial｣が利用可能
type PartialType = Partial<profile>;

// PartialTypeの型は以下のように定義される
// type PartialType = {
//     name?: string | undefined;
//     age?: number | undefined;
// }

// 必須のプロパティに自動変換してくれるUtilityとして｢Required｣が利用可能
type mixProfile = {
    name?: string;
    age: number;
    zipCode?: number;
};

type RequiredType = Required<mixProfile>;
// RequiredTypeの型は以下のように定義される
// type RequiredType = {
//     name: string;
//     age: number;
//     zipCode: number;
// }
