export {};

/** nullableとは
 *
 * nullable型は、変数がnullの値を持つことを許可する型です。
 * TypeScriptでは、strictNullChecksオプションが有効な場合、nullやundefinedを代入することができません。
 * そのため、nullable型を使用(unionでnullを記載)することで、
 * 特定のプロパティや変数に対してnullを許可することができます。
 *
 */

// tsconfig.json内の compilerOptions.strictNullChecks = true の場合、Nullを代入する事ができない
// ※初期値はコメントアウトされているが、コメントアウトはデフォルトでtrueになっている
let profile: { name: string; age: number } = {
    name: 'Taro',
    age: null, //コンパイルエラーになる
};

// union型でnullを追加する事で、局所的にnullを許容することができる
let nullableProfile: { name: string; age: number | null } = {
    name: 'Taro',
    age: null, //nullが許容される
};
