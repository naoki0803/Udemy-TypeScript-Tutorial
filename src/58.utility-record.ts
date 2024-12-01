export {};

/** Record とは
 *  複数の型を組み合わせて、同じ構造をもつオブジェクトを作成する際に、
 *  自動で型を補完してくれるユーティリティ型です。
 *
 * オブジェクト型の定義方法:
 * Record型は以下のように2つの型パラメータを受け取ります：
 * type Example = Record<キーの型, 値の型>;
 *
 * ※キーの型にはstring、number、symbol、またはそれらのリテラル型を指定できます。
 */

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';

type Covid19InfectionInfo = {
    kanji_name: string;
    confirmed_cases: number;
};

// アノテーションがない場合
// Shiga.confirmed_casesの値が本来numberで定義したいが、trueを許容してしまう
const noAnnotationCovid19Japan = {
    Tokyo: { kanji_name: '東京', confirmed_cases: 1946 },
    Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
    Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
    Shiga: { kanji_name: '滋賀', confirmed_cases: true },
};

// 愚直にアノテーションを記述する場合
// オブジェクト内の構造をすべて手書きで記述する必要がある
// 入力ミス、可読性の低下、保守性が悪化につながる
const covid19Japan: {
    Tokyo: Covid19InfectionInfo;
    Chiba: Covid19InfectionInfo;
    Tottori: Covid19InfectionInfo;
    Shiga: Covid19InfectionInfo;
} = {
    Tokyo: { kanji_name: '東京', confirmed_cases: 1946 },
    Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
    Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
    Shiga: { kanji_name: '滋賀', confirmed_cases: true },
};

// Record型の場合
// オブジェクト内の「keyに対して、Prefectures」「valueに対して、Covid19InfectionInfo」が適用される
// ShigaはPrefecturesで定義していないので、コンパイルエラーになり、
// 仮にPrefecturesにShigaを追加しても、confirmed_casesがtrueの部分でコンパイルエラーになる。
const utilityRecordCovid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: { kanji_name: '東京', confirmed_cases: 1946 },
    Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
    Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
    Shiga: { kanji_name: '滋賀', confirmed_cases: true },
};
