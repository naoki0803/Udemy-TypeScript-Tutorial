export {};

class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): string {
        return 'I can run';
    }
}

class Lion extends Animal {
    //継承したLionClassでも親クラスと同じconstructorが実行されており、見た目が冗長になる
    //言語仕様として親クラスを実行した後に、小クラスで初期化が実行されるので、実際には問題ないが、
    //Pattern 2 の記述の方が可読性が向上する可能性が高い

    /* Pattern 1*/
    // constructor(public name: string, public speed: number) {
    //     super(name);
    // }

    /* Pattern 2*/
    public speed: number;

    constructor(name: string, speed: number) {
        super(name);

        this.speed = speed;
    }

    run(): string {
        const parentMessage = super.run();
        console.log('🚀🚀🚀🚀🚀 ~ Lion ~ run ~ parentMessage:', parentMessage);

        // return `I can run ${this.speed}km.`; //親クラスでも｢I can run｣を値を返すrun()が存在する為冗長
        return `${super.run()} ${this.speed}km/h`; //親クラスでも同じ戻り値を返すrun()が存在する為冗長
    }
}

// let animal = new Animal();
// console.log('🚀🚀🚀🚀🚀 ~ animal:', animal.run());

// let lion = new Lion();
// console.log('🚀🚀🚀🚀🚀 ~ animal:', lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('simba', 80).run());
