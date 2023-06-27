/*
    심볼(Symbol)

    변경이 불가한 데이터로, 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용할 수 있습니다.

    Symbol('설명')
    '설명'은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 관계가 없습니다.
*/

// const sKey = Symbol('Hello');
// const user = {
//     key : '일반 정보',
//     [sKey] : '민감한 정보'
// };

// console.log(user.key);
// console.log(user['key']);
// console.log(user[sKey]);
// console.log(user[Symbol('Hello')]);
// console.log(sKey);

/*
    BigInt

    BigInt는 길이 제한이 없는 정수(integer)입니다.
    숫자(number) 데이터가 안정적으로 표시할 수 있는,
    최대치(`2^53-1`)보다 큰 정수를 표현할 수 있습니다.
    정수 뒤에 `n`을 붙이거나 `BigInt()`를 호출해 생성합니다.
*/
// console.log(1234567890123456789012345678901234567890);
// console.log(1234567890123456789012345678901234567890n);
// console.log(BigInt('1234567890123456789012345678901234567890'));

// const a = 11n;
// const b = 22;

// // 숫자 => Bigint
// console.log(a+BigInt(b)); //33n
// console.log(typeof(a+BigInt(b))); //bigint
// // Bigint => 숫자
// console.log(Number(a) + b); //33
// console.log(typeof(Number(a) + b)); //number

/**
 * 불변성 & 가변성
 * 
 * 불변성(Immutability)은 생성된 데이터가 메모리에서 변경되지 않고,
 * 가변성(Mutability)은 생성된 데이터가 메모리에서 변경될 수 있음을 의미합니다.
 * 
 * 자바스크립트 원시형은 '불변성'을, 참조형은 '가변성'을 가지고 있습니다.
 * 
 * 객체,배열,함수 데이터가 참조형 데이터
 * 나머지는 원시형 데이터
 */

// ex) 메모리1, 메모리2, 메모리3, 메모리4, 메모리5, 메모리6
// const a = { a : 1 }; // -> 메모리1에 {}객체에 키 벨류값을 할당.
// const b = a; // -> 메모리1을 복사해서 가져옴. 

// b.a = 2; // -> 메모리1을 바라보는 b변수가 -> 메모리2 에 값을 할당 -> 메모리1 객체 { a : 메모리2값 }
// console.log(a); //2 -> 그래서 메모리 1객체안에 메모리2값을 가져오기때문에 숫자2를 불러옴
// console.log(b); //2 -> 메모리1을 바라보기때문에 동일한 값

// a.a = 7; // -> 메모리3에 값을 할당 -> 메모리1 객체 { a : 메모리3값 }
// console.log(a); //7 -> 메모리1 객체 안에 메모리3값을 가져오기때문에 숫자7를 불러옴
// console.log(b); //7 -> 메모리1을 바라보기때문에 동일한 값

// b.a = 1; // -> 메모리1을 바라보는 b변수가 -> 메모리4에 값을 할당 메모리1 객체 { a : 메모리4값 }
// console.log(a); //1 -> 메모리1 객체 안에 메모리4값을 가져오기 때문에 숫자 1을 불러옴.
// console.log(b); //1 -> 메모리1을 바라보기때문에 동일한 값

// console.log(a===b); //true 이것은 메모리에 저장된게 같다라는 의미도 됨

// // array
// const arr1 = [1,2,3]; // ->위에 객체와 개념은 비슷함. 응용해보셈.
// const arr2 = arr1;

// arr2[0] = 10;
// console.log(arr1); //[10, 2, 3] 
// console.log(arr2); //[10, 2, 3] 

// arr1[1] = 20;
// console.log(arr1); //[10, 20, 3]
// console.log(arr2); //[10, 20, 3]

// console.log(arr1 === arr2); //true

/**
 * 얕은 복사 & 깊은 복사
 * 
 * 참조형은 가변성으로 인해, 데이터를 복사할 대 주의가 필요합니다.
 * 
 * 얕은 복사(Shallow Copy) - 참조형의 1차원 데이터만 복사
 * 깊은 복사(Deep Copy) - 참조형의 모든 차원 데이터를 복사
 */
// // 객체 얕은 복사방법
// const a = { x: 1 };
// const b = Object.assign({}, a); // 어사인방법으로 얕은 복사방법
// // const c = { ...a }; // 전개연산자로 얕은 복사방법

// b.x = 2;

// console.log(a); //{x: 1}
// console.log(b); //{x: 2}

// // 깊은 복사를 이용할때는 lodash를 설치하고 cloneDeep을 불러와서 사용해야함.
// import cloneDeep from 'lodash/cloneDeep';
// // 객체 깊은 복사방법
// const d = { x : { y : 2 } }
// const e = cloneDeep(d);

// e.x.y = 3;
// console.log(d); //x : {y: 2}
// console.log(e); //x : {y: 3} 

// // 배열 얕은 복사 방법
// const arr1 = [1,2,3];
// const arr2 = arr1.concat([]); // 콘캣방법으로 얕은 복사 방법
// // const arr3 = [...arr1] //전개 연산자로 얕은 복사 방법

// arr2[0] = 10;
// console.log(arr1); //[1, 2, 3]
// console.log(arr2); //[10, 2, 3]

// // 배열 깊은 복사방법
// const arr4 = [[1,2],[3]];
// const arr5 = cloneDeep(arr4);

// arr5[0][0] = 10;
// console.log(arr4); //[[1, 2],[3]]
// console.log(arr5); //[[10, 2],[3]]

/**
 * 가비지 컬렉션(GC, Garbage Collection, 쓰레기 수집);
 * 
 * 자바스크립트의 메모리 관리 방법으로 자바스크립트 엔진이 자동으로,
 * 데이터가 할당된 메모리에서 더 이상 사용되지 않는 데이터를 해제하는 것을 말합니다.
 * 가비지 컬렉션은 개발자가 직접 강제 실행하거나 관리할 수 없습니다.
 */

// const user = {
//     name : 'lsk',
//     age : 11,
//     emails : ['thesecon@gmail.com','heropy@abc.com']
// }
// delete user.emails; // 필요없는 데이터는 딜리트를 통해 삭제해서 메모리에서 더이상 사용되지 않게 함.

// console.log(user); // {name: 'lsk', age: 11}


/**
 * 클로저(Closure)
 * 
 * 함수가 선언될 때의 유효범위(렉시컬 범위)를 기억하고 있다가,
 * 함수가 외부에서 호출될 때 그 유효범위의 특정 변수를 참조할 수 있는 개념을 말합니다.
 */

function createCount(){ //유효범위(렉시컬 범위)
    let a = 0;
    return function(){
        return a += 1;
    }
}

const count1 = createCount();
const count2 = createCount();
console.log(count1()); //1
console.log(count1()); //2
console.log(count1()); //3
console.log(count2()); //1
console.log(count2()); //2

/**
 * 메모리 누수(Memory Leak) 
 * 
 * 더 이상 필요하지 않은 데이터가 해제되지 못 하고 메모리를 계속 차지되는 현상입니다.
 * 
 * - 불필요한 전역 변수 사용
 * - 분리된 노드 참조
 * - 해제하지 않은 타이머
 * - 잘못된 클로저 사용
 */

// 분리된 노드 참조 ex
// const btn = document.querySelector('button');
// // const parent = document.querySelector('.parent'); // 선언한 위치가 제거 이벤트 이전이라 메모리에 계속 저장되어있다.
// btn.addEventListener('click',()=>{
//     const parent = document.querySelector('.parent');  // 선언한 위치가 제거이벤트쪽이라 제거되면 가비지 컬렉션에 의해서 메모리에서도 제거됨.
//     console.log(parent);
//     parent && parent.remove(); // && 연산자는 거짓데이터를 반환하기때문에, 대상이 있다면 다음꺼를 실행하고 없으면 null을 반환하기때문에 첫번째에서 반환됨.
// });

// 해제하지 않은 타이머
// let a = 0;
// const intervalId = setInterval(()=>{
//     a += 1;
// },100);

// setTimeout(()=>{
//     console.log(a);
//     clearInterval(intervalId); //setInterval을 하면 계속실행시키는 데이터가 아니면, clearInterval을 실행을 권장
// },1000);

// 잘못된 클로저 사용
// const getFn = ()=>{
//     let a = 0;  //함수 내에서 a를 사용하지않으면, 가비지 컬렉션에 의해 메모리에서 제거됨.
//     return name =>{
//         // a +=1 // 함수에서 a를 불필요하게 사용하지않으면 코드에서 제거
//         return `hello ${name}`;
//     }
// }
// const fn = getFn()
// console.log(fn('lsk')); 

/**
 * Call Stack, Task Queue, Event Loop, Web APIs
 * 
 * 브라우저에서 돌아가는 현상들.
 * 참고는 동영상강의.
 */