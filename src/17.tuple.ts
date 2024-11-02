export {};

// この記述だと、共用型の場合、順序性の成約は付加されない
let profile: (string | number)[] = ['Ham', 43];
profile = [43, 'Ham']; // 順番を変えてもエラーにならない

let profile2: [string, number] = ['Ham', 43];
//tuple型は順番を変えるとエラーになる
// profile2 = [43, 'Ham'];

// tuple型は型推論されないので、セルフで記述する必要がある
