export {};

// nullを値に入れても、型推論ではnull型を推論してくれない
// let absence = null;
let absence: null = null;
// absence = 'hello';  //null以外は代入出来ない

//nullとおなくじ、undefinedを代入しても、型推論はanyになる
// let data = undefined;
let data: undefined = undefined;
// data = 123; //endefined以外は代入出来ない
