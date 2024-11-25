export {};

/** 
 * インターフェース（interface）とは、TypeScriptにおいてクラスが実装すべきメソッドやプロパティのシグネチャーを定義するための構造です。
 * インターフェース自体は実装を持たず、クラスがそのインターフェースを実装することで、特定のメソッドやプロパティを持つことを保証します。
 *  1. 複数のインターフェースの実装: TypeScriptでは、クラスは複数のインターフェースを実装することができます。
 *     これにより、異なる機能を持つクラスを作成することが可能です。
 *  2. シグネチャーの定義: インターフェースは、メソッドの名前、引数、戻り値の型を定義しますが、実際の処理内容は持ちません。
 *  3. クラスとの関係: クラスはimplementsキーワードを使用してインターフェースを実装します。
 *     インターフェースで定義されたメソッドをすべて実装しないと、コンパイルエラーが発生します。
*/
class Mahoutsukai {}
class Souryo {}

//TypeScriptは、単一のClassしか継承ができない仕様になっている。
//以下のように記載するとコンパイルエラーになる。
class Taro extends Mahoutsukai, Souryo{}


//interfaceであれば、複数継承する事が可能
//ただし本来interfaceは継承ではなく実装になるので、
//正しくは複数のinterfaceをベースにclassを実装(implement)することが可能

//interfaceを定義して、処理の実態のないSignatureを定義する
interface Kenja {
    ionazun(): void;    //Signatureの定義
}
interface Senshi {
    kougeki(): void;    //Signatureの定義
}

// interfaceからclassを実装する場合は'implements'を利用する
class Jiro implements Kenja, Senshi{
    // ただし、interfaceで定義している｢イオナズン｣と｢攻撃｣が実装されていないとコンパイルエラーになる
}

// interfaceのシグネチャー通りに、classが実装されるとコンパイルエラーは解消される
class Hanako implements Kenja, Senshi{
    ionazun(): void {
        console.log('イオナズンを唱えた');
    }
    kougeki(): void {
        console.log('攻撃をした');
    }
}

