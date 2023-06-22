/*
    console
    .log(), .warn(), .error(), .dir()

    콘솔에 메세지나 객체를 출력합니다.
    - log : 일반 메시지
    - warn : 경고 메시지
    - error : 에러 메시지
    - dir : 속성을 볼 수 있는 객체를 출력
*/
// console.log(document.body);
// console.warn(document.body);
// console.error(document.body);
// console.dir(document.body);

/*
    console
    .count(), .countReset()

    콘솔에 메소드 호출의 누적 횟수를 출력하거나 초기화합니다.
*/
// console.count('a');
// console.count('a');


/*
    console
    .time(), .timeEnd()

    콘솔에 타이머가 시작해서 종료되기까지의 시간(ms)을 출력합니다.
    시작과 끝에 들어가는 인수는 동일한 문자형태여야함.
*/
// console.time('반복문');
// for (let i = 0; i < 10; i++) {
//     console.log(i);    
// }
// console.timeEnd('반복문');

/*
    console
    .trace()

    메소드 호출 스택(call stack)을 추적해 출력합니다.
*/
// function a() {
//     function b() {
//         function c (){
//             console.log('Log!');
//             console.trace('Trace!');
//         }
//         c();
//     }
//     b();
// }
// a();
/*
    console
    .clear()

    콘솔에 기록된 메세지를 모두 삭제.
*/

/*
    서식 문자 치환
    %s - 문자로 적용
    %o - 객체로 적용
    %c - css를 적용
*/
// console.log(
//     '%c The brown fox %cjumps over %cthe lazy dog',
//     'color :brown; font-family :serif; font-size: 20px;',
//     '',
//     'font-size: 18px; background-color: green; border-radius:5px; padding: 10px;',
// );

/*
    Cookie(쿠키)

    도메인 단위로 저장
    표준안 기준, 사이트당 최대 20개 및 4kb로 제한
    영구 저장 불가능

    domain : 유효 도메인 설정
    path: 유효 경로 설정
    expires: 만료 날짜(UTC Date) 설정
    max-age: 만료 타이머(S) 설정

    옵션을 쓰고 세미콜론을 꼭 써줘야함.
    만료날짜나 타이머를 설정 안하면, 세션이 자동으로 지정. 브라우저가 쿠키가 종료되면 없어짐.
*/
document.cookie = `a=1; domain=localhost; max-age=${60*60*24*7}`;
document.cookie = `b=2; expires=${new Date(2023,5,22).toUTCString()}`;
// document.cookie = `a=3` //덮어쓰기도 가능

console.log(document.cookie);

function getCookie(name) {
    const cookie = document.cookie.split('; ')
        .find(cookie => {
            return cookie.split('=')[0] === name
        });
    return cookie ? cookie.split('=')[1] : null;
}
console.log(getCookie('a')); //1
console.log(getCookie('b')); //2
console.log(getCookie('c')); //null

/*
    Storage(스토리지)

    도메인 단위로 저장
    5MB 제한
    세션 혹은 영구 저장 가능

    sesstionStorage: 브라우저 세션이 유지되는 동안에만 데이터 저장.
    localStorage: 따로 제거하지 않으면 영구적으로 데이터 저장.

    - .getItem('키'): 데이터 조회
    - .setItem('키','값'): 데이터 추가
    - .removeItem(): 데이터 제거
    - .clear(): 스토리지 초기화

    데이터를 저장하고 꺼낼때는 JSON형태로 저장하고 꺼내는것이 낫다.
    세션스토리지와 로컬스토리지는 만료라는 개념이 없다.
*/
localStorage.setItem('a',JSON.stringify('Hello world'));
localStorage.setItem('b',JSON.stringify({a:1,y:2}));
localStorage.setItem('c',JSON.stringify(123));

console.log(JSON.parse(localStorage.getItem('a')));
console.log(JSON.parse(localStorage.getItem('b')));
console.log(JSON.parse(localStorage.getItem('c')));

localStorage.removeItem('a'); // a 키값아이템 제거
localStorage.clear(); //모두제거

/*
    Location

    현재 페이지 정보를 반환하거나 제어합니다.

    - .href: 전체 URL주소
    - .protocol: 프로토콜
    - .hostname: 도메인 이름
    - .pathname: 도메인 이후 경로
    - .host: 포트 번호를 포함한 도메인 이름
    - .port: 포트 번호
    - .hash: 해시 정보 (페이지의 ID) ex) #id

    method
    - .assign(주소): 해당 '주소'로 페이지 이동
    - .replace(주소): 해당 '주소'로 페이지 이동, 현재 페이지 히스토리(해쉬같은 정보들)를 제거
    - .reload(강력): 페이지 새로고침, `true` 인수는 '강력' 새로고침
*/
console.log(location);

/*
    History 
    
    브라우저 히스토리(세션 기록) 정보를 반환하거나 제어합니다.
    
    - .length: 등록된 히스토리 개수
    - .scrollRestoration: 히스토리 탐색시 `스크롤 위치 복원` 여부 확인 및 지정
    - .state: 현재 히스토리에 등록된 데이터

    - .back(): 뒤로가기
    - .forward(): 앞으로가기
    - .go(위치): 현재 페이지 기준 특정 히스토리 '위치'로 이동 숫자로

    - .pushState(상태, 제목, 주소): 히스토리에 상태 및 주소를 추가
    - .replaceState(상태, 제목, 주소): 현재 히스토리의 상태 및 주소를 교체
     > 모든 브라우저(Safari 제외)는 '제목' 옵션을 무시합니다. ''빈문자열로 넣으면됨.
*/
console.log(history);

/*
    history2 예제 페이지
    history.html에서 확인.
*/
const page1 = /* html */`
    <section class="page1">
        <h1>Page 1</h1>
    </section>
`;
const page2 = /* html */`
    <section class="page2">
        <h1>Page 2</h1>
    </section>
`;
const page3 = /* html */`
    <section class="page3">
        <h1>Page 3</h1>
    </section>
`;
const page4 = /* html */`
    <section class="page4">
        <h1>Page 4</h1>
    </section>
`;
const pageNotFound = /* html */`
    <section class="pageNot">
        <h1>404 Page Not Found!</h1>
    </section>
`;

const pages = [
    { path: '#/page1', template: page1},
    { path: '#/page2', template: page2},
    { path: '#/page3', template: page3}
];
const appEl = document.querySelector('#app');

const render = () =>{
    const page = pages.find(page=> page.path === location.hash);
    appEl.innerHTML = page ? page.template : pageNotFound
};

window.addEventListener('popstate',render);
render();

const pagePush = num => {
    history.pushState(`전달할 데이터 - ${num}`,null,`#/page${num}`);
    render();
};

const inputEl = document.querySelector('nav input');
inputEl.addEventListener('keydown',event =>{
    if(event.key ==='Enter'){
        pagePush(event.target.value);
    }
});