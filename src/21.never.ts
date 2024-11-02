export {};

// this function is never return
// never型は呼び出し元に戻ってこない型

function error(message: string): never {
    throw new Error(message);
}

try {
    error('errorだよ');
} catch (error) {
    console.log(error);
}

const afterMessage: string = 'try/catch後の処理';
console.log(afterMessage);

// let hoge: void = undefined; //void型はundefindeを含むのでエラーにならない
// let moge: never = undefined; //値が帰ってこないので、undefinedやnullは代入できない。
// let fuga: never = error('error関すはnever型で定義しているので代入できる'); //利用用途はないが、仕様として理解する
