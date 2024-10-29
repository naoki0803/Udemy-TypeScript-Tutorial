export {};

type ObjectType = {
    name: string;
    age: number;
};

let object: ObjectType = {
    name: 'hoge',
    age: 43,
};

// interfaceもtypeと同様に形に名前をつけて、利用する事が出来る
// type と interfaceの違いや、interfaceのclassでの利用については別講義で学ぶ
interface ObjectInterface {
    name: string;
    age: number;
}

let object1: ObjectInterface = {
    name: 'hoge',
    age: 43,
};
