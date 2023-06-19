/*
    .addEventListener()
    대상에 이벤트 청취(Listen)를 등록합니다.
    대상에 지정한 이벤트가 발생했을 때 지정한 함수(handler)가 호출됩니다.
*/
const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');
const anchorEl = document.querySelector('a');
const inputEl = document.querySelector('input');

// parentEl.addEventListener('click',(e)=>{ // 첫번째 인수에는 이벤트문자, 두번째 인수는 콜백함수
//     console.log('parent');
// });
// childEl.addEventListener('click',(e)=>{
//     console.log('child');
// });

/*
    .removeEventListener()
    대상에 이벤트 청취(Listen)를 제거합니다.
    메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있습니다.
*/
// const handler = () => {//콜백함수를 변수로 할당해야 remove할수있음.
//     console.log('parent');
// };
// parentEl.addEventListener('click',handler); 
// childEl.addEventListener('click',()=>{
//     parentEl.removeEventListener('click',handler);
// });

/*
    이벤트 객체
    이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있습니다.
*/
// parentEl.addEventListener('click', event =>{
//     console.log(event.target,event.currentTarget);
//     console.log(event);
// });
// parentEl.addEventListener('wheel',event => {
//     console.log(event);
// });
// inputEl.addEventListener('keydown',event => {
//     console.log(event);
// });

/*
    기본 동작 방지
*/
// 마우스 휠의 스크롤 동작방지!
// parentEl.addEventListener('wheel', event => {
//     event.preventDefault();
//     console.log('wheel event!');
// });

// // <a> 태그에서 페이지 이동방지!
// const anchorEl = document.querySelector('a');
// anchorEl.addEventListener('click', event =>{
//     event.preventDefault();
//     console.log('click event!');
// });

/*
    이벤트 전파(버블) 정지
    후손요소에서 상위요소까지 이벤트 전파되는 현상

    addEventListener (,,3번째 옵션)
    3번째 옵션에 capture : true 값을 넣어주면 상위요소에서 이벤트를 먼저 실행
    이거를 캡쳐링 이라고 함.

    event.stopPropagation(); 
    버블링에서 캡쳐링에서 둘다 전파되는것을 정지한다.
*/
// window.addEventListener('click', event => {
//     console.log('Window!');
// }, { capture : true });
// document.body.addEventListener('click', event => {
//     console.log('Body!');
//     // event.stopPropagation(); // 버블링 정지!
// }, { capture : true });
// parentEl.addEventListener('click', event => {
//     console.log('Parent!');    
// }, { capture : true });
// childEl.addEventListener('click', event => {
//     console.log('Child!');
//     // event.stopPropagation(); // 버블링 정지!
// });
// anchorEl.addEventListener('click', event => {
//     event.preventDefault();
//     console.log('Anchor!');
// });
// /* 이벤트에 capture 옵션을 추가했으면, 제거할때도 동일하게 추가를 해야 제거가됨. 
// const handler = () => {
//     console.log('Handler Parent!');
// };
// parentEl.addEventListener('click',handler, {capture: true})
// parentEl.removeEventListener('click',handler, {capture: true})
// */

/*
    핸들러 한번 만 실행
    addEventListener (,,3번째 옵션)
    3번째 옵션에 once : true 를 추가하면 한번만 실행
*/
// parentEl.addEventListener('click', event => {
//     console.log('Parent!');    
// }, { once : true });

/*
    기본 동작과 핸들러 실행 분리
    addEventListener (,,3번째 옵션)
    3번째 옵션에 passive : true

    복잡한 로직이 있으면, 이벤트가 진행되는동안 로직이 계속 실행되기때문에,
    과부화가 생겨서 기본동작이 제대로 진행이 안될수있다.
    그때 passive 옵션을 넣으면 기본동작과 핸들러를 분리해서 진행이 되서 사용성이 좋아진다.
*/
// parentEl.addEventListener('wheel', () => {
//     // console.log('Parent!'); 
//     for(let i = 0; i < 10000; i +=1){
//         console.log(i);
//     }
// }, { passive : true });

/*
    이벤트 위임(Delegation)
    비슷한 패턴의 여러 요소에서 이벤트를 핸들링 해야 하는 경우
    단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있습니다.

    이벤트리스너 를 여러개 추가하는거보다 조상요소에서 이벤트를 하나만 추가하고 
    헨들링 내부에서 조건을 통해 관리하는것이 애플리케이션 관리가 효율적이다.
*/
// const childEls = document.querySelectorAll('.childs');
// const parentEl2 = document.querySelector('.parent2');
// // 모든 대상 요소에 이벤트 등록!
// // childEls.forEach(el=>{
// //     el.addEventListener('click', event => {
// //         console.log(event.target.textContent);
// //     });
// // });
// parentEl2.addEventListener('click', event =>{
//     const c = event.target.closest('.childs');
//     if(c) { 
//         console.log(c.textContent);
//     } else {
//         // 값이 없는경우는 null 이기때문에
//     }
// })
/*
    Mouse & Pointer Events

    - click : 클릭했을 때
    - dblclick : 더블 클릭했을때
    - mousedown : 버튼을 누를 때
    - mouseup : 버튼을 땔 때
    - mouseenter : 포인터가 요 소 위로 들어 갈 때
    - mouseleave : 마우스를 요소 밖으로 나올 때
    - mousemove : 포인터가 움직일 때
    - contextmenu : 우클릭 했을 때
    - wheel : 휠 버튼이 회전할 때
*/
// window.addEventListener('wheel',event =>{
//     console.log(event);
// });

/*
    Keyboard Events

    - keydown : 키를 눌를 때
    - keyup : 키를 땔 때
*/
// inputEl.addEventListener('keydown', event => {
//     if (event.key === 'Enter' && !event.isComposing) {
//         //cjk 문자들은 브라우저에서 처리과정이 한단계가 더 필요하기때문에 처리과정인지 알수있는 명령어 isComposing을 활용.
//         console.log(event.isComposing); 
//         console.log(event.target.value);
//     }
// });

/*
    Focus & Form Events

    - focus : 요소가 포커스를 얻었을 때
    - blur : 요소가 포커스를 잃었을 때
    - input : 값이 변경 되었을 때
    - change : 상태가 변경 되었을 때
    - submit : 제출 버튼을 선택했을 때 (form 요소에)
    - reset : 리셋 버튼을 선택했을 때 (form 요소에)
*/
// const formEl = document.querySelector('form');
// const inputEls = document.querySelectorAll('input');

// inputEls.forEach(el=>{
//     el.addEventListener('focus',()=>{
//         formEl.classList.add('active')
//     });
//     el.addEventListener('blur',()=>{
//         formEl.classList.remove('active')
//     });
//     el.addEventListener('change',event =>{
//         console.log(event.target.value);
//     });
// });

// formEl.addEventListener('submit', event =>{
//     event.preventDefault();
//     const data = {
//         id : event.target[0].value,
//         pw : event.target[1].value
//     }
//     console.log('제출!',data);
// });
// formEl.addEventListener('reset',event => {
//     console.log(event);
// });

/*
    커스텀 이벤트와 디스패치
*/
const child1 = document.querySelector('.childs:nth-child(1)');
const child2 = document.querySelector('.childs:nth-child(2)');
const child3 = document.querySelector('.childs:nth-child(3)');
const child4 = document.querySelector('.childs:nth-child(4)');
child1.addEventListener('click', event => {
    child2.dispatchEvent(new Event('click'));
    child2.dispatchEvent(new Event('wheel'));
    child2.dispatchEvent(new Event('keydown'));
})
child2.addEventListener('click', event=>{
    console.log('child2 click', event);
});
child2.addEventListener('wheel', event=>{
    console.log('child2 wheel', event);
});
child2.addEventListener('keydown', event=>{
    console.log('child2 keydown', event);
});
child3.addEventListener('hello-world',event=>{
    console.log('커스텀 이벤트 발생!');
    console.log(event.detail);
});
child4.addEventListener('click',event=>{
    child3.dispatchEvent(new CustomEvent('hello-world',{
        detail: 123 // data도 전송할수있다. 하지만 오직 detail로만.
        // detail 을 사용 안할거면 그냥 new Event 생성자 함수를 이용.
    }));
})