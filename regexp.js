/**
 * 정규표현식(RegExp, Regular Expression)
 * 
 * 생성자
 * new RegExp('표현','옵션');
 * 
 * 리터럴
 * /표현/옵션
 * /[a-z]/gi
 * 
 * g - 모든 문자 일치(Global)
 * i - 영어 대소문자를 구분 않고 일치(Ignore case)
 * m - 여러 줄 일치(Multi line), 각가의 줄을 시작과 끝으로 인식!
 * 
 * 정규식.test(문자열) - 일치 여부 반환
 * 문자열.match(정규식) - 일치하는 문자의 배열 반환
 * 문자열.replace(정규식, 대체문자) - 일치하는 문자를 대체
 * 
 */

const str = `
010-1234-5678
thesecon@gmail.com
Hello world!
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
hello@naver.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록
abbcccddddeeeee
`
console.log(str.match(/동해물과/));

/**
 * 정규표현식(RegExp, Regular Expression) 패턴
 * 
 * ^ab      | 줄(Line) 시작에 있는 ab와 일치
 * ab$      | 줄(Line) 끝에 있는 ab와 일치
 * .        | 임의의 한 문자와 일치
 * a|b      | a 또는 b와 일치
 * ab?      | b가 없거나 b와 일치
 *   
 * {3}      | 3개 연속 일치
 * {3,}     | 3개 이상 연속 일치
 * {3,5}    | 3개 이상 5개 이하(3~5개) 연속 일치
 * +        | 1회 이상 연속 일치, `{1,}`
 *   
 * [ab]     | a 또는 b
 * [a-z]    | a부터 z사이의 문자 구간에 일치(영어 소문자)
 * [A-Z]    | A부터 Z사이의 문자 구간에 일치(영어 대문자)
 * [0-9]    | 0부터 9사이의 문자 구간에 일치(숫자)
 * [가-힣]  | 가부터 힝 사이의 문자 구간에 일치(한글)
 * 
 * \w       | 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
 * \b       | 63개 문자에 일치하지 않는 문자 경계(Boundary)
 * \d       | 숫자(Digit)에 일치
 * \s       | 공백(Space, Tab 등)에 일치 
 * 
 * (?:)     | 그룹 지정
 * (?=)     | 앞쪽 일치(Lookahead) 앞쪽에 찾을 문자를 넣기 아래 예제
 * (?<=)    | 뒤쪽 일치(Lookbehind) 뒤쪽에 찾을 문자를 넣기 아래 예제
 * 
 */

// console.log(str.match(/^h.../gim)); // ['Hell', 'http', 'hell', 'http']
// console.log(str.match(/...\.com$/gm)); // ['ail.com', 'ver.com']
// console.log(str.match(/fox|dog|\.com/g)); // ['.com', '.com', 'fox', 'dog', '.com']
// console.log(str.match(/https?/g)); // ['https', 'http']

// console.log(str.match(/\d{3}/g)); // ['010', '123', '567', '703', '123']
// console.log(str.match(/\d{3,9}/g)); // ['010', '1234', '5678', '7035', '1234']
// console.log(str.match(/\d{1,}/g)); // {1,}와 + 동일 ['010', '1234', '5678', '7035', '60', '1234']

// console.log(str.match(/[a-zA-Z가-힣]{1,}/g)); // ['thesecon', 'gmail', 'com', 'Hello', 'world', 'https', 'www', 'omdbapi', 'com', 'apikey', 'c', 'c', 's', 'frozen', 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog', 'hello', 'naver', 'com', 'http', 'localhost', '동해물과', '백두산이', '마르고', '닳도록', 'abbcccddddeeeee']
// console.log(str.match(/[가-힣]{3}/g)); // ['동해물', '백두산', '마르고', '닳도록']
// console.log(str.match(/[가-힣0-9]{3}/g)); // ['010', '123', '567', '703', '123', '동해물', '백두산', '마르고', '닳도록']

// console.log(str.match(/\w+/g)); // ['010', '1234', '5678', 'thesecon', 'gmail', 'com', 'Hello', 'world', 'https', 'www', 'omdbapi', 'com', 'apikey', '7035c60c', 's', 'frozen', 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog', 'hello', 'naver', 'com', 'http', 'localhost', '1234', 'abbcccddddeeeee']
// console.log(str.match(/\b[0-9]+\b/g)); // ['010', '1234', '5678', '1234']
// console.log(str.match(/\b\d{1,}\b/g)); // ['010', '1234', '5678', '1234']
// console.log(str.match(/\s/g)); // ['\n', '\n', '\n', ' ', '\n', '\n', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '\n', '\n', '\n', ' ', ' ', ' ', '\n', '\n']

// console.log(str.match(/https?:\/\/(?:\w+\.?)+\/?/g)); // ['https://www.omdbapi.com/', 'http://localhost']
// console.log(str.match(/.+(?=과)/g)); // ['동해물']
// console.log(str.match(/(?<=과).+/g)); // [' 백두산이 마르고 닳도록']
// console.log(str.match(/\d{3}-\d{4}-\d{4}/g)); // ['010-1234-5678']
// console.log(str.match(/\w{1,}@\w{1,}\.\w{1,}/g)); // ['thesecon@gmail.com', 'hello@naver.com']