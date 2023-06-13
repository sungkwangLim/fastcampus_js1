/*
    DOM(document object model)
    DOM이란 HTML 문서를 객체로 표현한 것,
    JS에서 HTML을 제어 할 수 있게 해줌.
*/
const element  = document.querySelector('h1');
console.log(element.textContent);

/*
    Node vs Element
    - Node(노드) : HTML 요소, 텍스트, 주석 등 모든 것을 의미
    - Element(요소) : HTML 요소를 의미    
*/
const parent = document.querySelector('.parent');

// 부모 요소의 모든 자식 노드 확인
console.log(parent.childNodes);
// 부모 요소의 모든 자식 요소 확인
console.log(parent.children);
console.dir(parent); //객체로 보는 방법 console.dir

// class N {}
// class E extends N {}

// console.dir(E);
// console.dir(N);
// console.dir(E.__proto__); // 일반적인 코드에서는 __proto__ 사용 X

// console.dir(Element);
// console.dir(Node);
// console.dir(Element.__proto__);


console.log('** DOMAPI **');

/*      
    document.getElementById()
    HTML `id` 속성(attributes) 값으로 검색한 요소를 반환.
    여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환.
    검색 결과가 없으면, `null`을 반환
*/
// const el = document.getElementById('child2');
// console.log(el);

/*  
    document.querySelector();
    'CSS 선택자'로 검색한 요소를 하나 반환.
    여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환.
    검색 결과가 없으면, `null`을 반환
*/
// const el = document.querySelector('.child:nth-of-type(2) ');
// console.log(el);

/*  
    document.querySelectorAll();
    'CSS 선택자'로 검색한 모든 요소를 `Node List`로 반환.
    `Node List` 객체는 `.forEach()`를 사용할 수 있습니다.
    검색 결과가 없으면, NodeList []을 반환
    유사배열 array-like
*/
// const nodeList = document.querySelectorAll('.child');
// console.log(nodeList);
// nodeList.forEach(el=>console.log(el.textContent));
// console.log(Array.from(nodeList)); // 유사배열을 배열로 내장함수를 사용할때.

/*  
    N= node, E= Element

    N.parentElement  
    노드의 부모요소를 반환
*/
// const el = document.querySelector('.child:nth-of-type(2) ');
// console.log(el.parentElement); 

/*  
    E.closest()
    
    자신을 포함한 `조상` 요소 중 'CSS 선택자'와 일치하는,
    가장 가까운 요소를 반환
    요소를 찾지 못하면, `null`을 반환
*/
// const el = document.querySelector('.child');
// console.log(el.closest('div'));
// console.log(el.closest('body'));
// console.log(el.closest('.hello'));

/*  
    N.previousSibling() / N.nextSibling
    
    노드의 이전(previousSibling) 형제 혹은 다음(nextSibling) 형제 노드를 반환.
*/
// const el = document.querySelector('.child');
// console.log(el.previousSibling);
// console.log(el.nextSibling);

/*  
    E.previousElementSibling() / E.nextElementSibling
    
    요소의 이전(previousSibling) 형제 혹은 다음(nextSibling) 형제 요소를 반환.
    검색 결과가 없으면, `null`을 반환
*/
// const el = document.querySelector('.child');
// console.log(el.previousElementSibling);
// console.log(el.nextElementSibling);

/*  
    E.children
    
    요소의 모든 자식 요소를 반환.
    유사배열 array-like
*/
// const el = document.querySelector('.parent');
// console.log(el.children);
// console.log(Array.from(el.children)); // 유사배열을 배열 내장함수를 사용할때

/*  
    E.firstElementChild / E.lastElementChild
    
    요소의 첫 번째 자식 혹은 마지막 자식 요소를 반환.
    검색 결과가 없으면, `null`을 반환
*/
// const el = document.querySelector('.parent');
// console.log(el.firstElementChild);
// console.log(el.lastElementChild);


console.log('** 생성, 조회, 수정1 **');
/*
    document.createElement()
    메모리에만 존재하는 새로운 HTML 요소를 생성해 반환.
*/
// const divEl = document.createElement('div');
// console.log(divEl);
// const inputEl = document.createElement('input');
// console.log(inputEl);

/*
    E.prepend() / E.append()
    `노드`를 요소의 첫 번째(prepend) 혹은 마지막(append) 자식으로 삽입합니다.
    메소드 인수에 한개이상 여러개를 넣을수있음.
*/
// const parentEl = document.querySelector('.parent');
// const divEl = document.createElement('div');
// divEl.textContent = '안녕하세요 div메모리로 생성했어요.';
// parentEl.prepend(new Comment(' 주석 '));
// parentEl.append(divEl,'노드텍스트로 추가해볼게요.');

/*
    E.remove()

    요소를 제거합니다.
*/
// const el = document.querySelector('.child');
// el.remove();

/*
    E.insertAdjacentElement()

    `대상 요소`의 지정한 위치에 `새로운 요소`를 삽입합니다.
    대상_요소.insertAdjacentElement(위치,새로운요소)

    위치 - beforebegin, afterbegin, beforeend, afterend
*/
/* html */`
<!-- 위치 -->
<!-- 'beforebegin' -->
<div class="target">
    <!-- 'afterbegin' -->
    Content!
    <!-- 'beforeend' -->
</div>
<!-- 'afterend' -->
`
// const childEl = document.querySelector('.child');
// const newEl = document.createElement('span');
// newEl.textContent = '안녕하세요 span태그를 메모리에 생성했어요.';
// childEl.insertAdjacentElement('beforeend',newEl);

/*
    N.insertBefore()

    `부모 노드`의 자식인 `참조 노드`의 이전 형제로 `노드`를 삽입합니다.
    부모_노드.insertBefore(노드, 참조_노드)
*/
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child:last-child');
// const newEl = document.createElement('span');
// newEl.textContent = '안녕하세요 span태그를 메모리에 생성했어요.';

// parentEl.insertBefore(newEl,childEl);

/*
    N.Contains()

    `주어진 노드`가 `노드`의 자신을 포함한 후손인지 확인.
    노드.contains(주어진_노드)
*/
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// console.log(parentEl.contains(childEl)); //true
// console.log(document.body.contains(parentEl)); //true
// console.log(document.body.contains(childEl)); //true
// console.log(document.body.contains(document.body)); //true
// console.log(parentEl.contains(parentEl)); //true
// console.log(parentEl.contains(document.body)); //false - 주어진 노드가 상위노드라서 X
// console.log(childEl.contains(document.body)); //false - 주어진 노드가 상위노드라서 X

/*
    N.textContent

    `노드`의 모든 텍스트를 얻거나 변경.
*/
// const childEl = document.querySelector('.child');
// console.log(childEl.textContent); // 1
// childEl.textContent = '7';
// console.log(childEl.textContent); // 7

/*
    E.innerHTML

    `요소`의 모든 HTML 내용을 하나의 문자로 얻거나,
    새로운 HTML을 지정합니다.
*/
// const parentEl = document.querySelector('.parent');
// console.log(parentEl.innerHTML);
// parentEl.innerHTML = /* html */`
//     <!-- comment tagged 확장프로그램을 설치했으니 백틱기호일땐 내가 작성한 언어를 주석으로넣기 -->
//     <!-- /* html */ -->
//     <div style="border: 4px solid #ddd">
//       <strong style="font-size:20px;color:blue">HTML를 바꾸다.</strong>
//       <p style="font-size:14px;color:blue">바꾸고나서 적용했다.</p>
//     </div>
// `

console.log('** 생성, 조회, 수정2 **');
/*
    E.dataset

    `요소`의 각 `data-` 속성 값을 얻거나 지정합니다.
*/
// const el = document.querySelector('.child');
// const str = '메모리상에 텍스트 생성';
// const obj = {a : 1, b : 2};

// el.dataset.helloWorld = str;
// // el.dataset.object = obj; // [object ojbect]
// el.dataset.object = JSON.stringify(obj);
// console.log(el.dataset.helloWorld);
// console.log(el.dataset.object);
// console.log(JSON.parse(el.dataset.object));

/*
    E.tagName

    `요소`의 태그 이름을 반환합니다.
*/
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// const el = document.createElement('span');
// console.log(parentEl.tagName); //DIV
// console.log(childEl.tagName); //DIV
// console.log(el.tagName); //SPAN
// console.log(document.body.tagName); //BODY

/*
    E.id

    `요소`의 `id` 속성 값을 얻거나 지정합니다.
*/
// const el = document.querySelector('.child');
// console.log(el.id);
// el.id = 'child1';
// console.log(el.id);
// console.log(el);

/*
    E.className

    `요소`의 `class` 속성 값을 얻거나 지정합니다.
*/
// const el = document.querySelector('.child');
// console.log(el.className);
// el.className += ' child1 active';
// console.log(el.className);
// console.log(el);

/*
    E.classList

    `요소`의 `class` 속성 값을 제어합니다.
    - `.add()` : 새로운 값을 추가
    - `.remove()` : 기존 값을 제거
    - `.toggle()` : 값을 토글
    - `.contains()` : 값을 확인
*/
// const el = document.querySelector('.child');
// el.classList.add('active');
// console.log(el.classList.contains('active'));
// el.classList.remove('active');
// console.log(el.classList.contains('active'));
// el.addEventListener('click',()=>{
//     el.classList.toggle('active');
//     console.log(el.classList.contains('active'));
// });

/*
    E.style

    요소의 `style` 속성(`인라인 스타일`)의 CSS 속성 값을 얻거나 지정합니다.        
    동적으로 관리할때만 사용하기를 권장.    
*/
// const el = document.querySelector('.child');
// 개별지정
// el.style.width = '100px';
// el.style.fontSize = '20px';
// el.style.backgroundColor = 'green';
// el.style.position = 'absolute';

// 한꺼번에 지정
// const cssStyle1 = {
//     width: '100px',
//     fontSize: '20px',
//     backgroundColor: 'green',
//     position: 'absolute'
// };
// Object.assign(el.style, cssStyle1)
// console.log(el.style);
// console.log(el.style.width);
// console.log(el.style.fontSize);
// console.log(el.style.backgroundColor);
// console.log(el.style.position);
// console.log(el.style.display);

/*
    E.getComputedStyle()

    요소에 적용된 스타일 객체를 반환합니다.
*/
// const el = document.querySelector('.child');
// const styles = window.getComputedStyle(el);
// console.log(styles.width);
// console.log(styles.fontSize);
// console.log(styles.backgroundColor);
// console.log(styles.position);
// console.log(styles.display);

/*
    E.getAttribute() / E.setAttribute('속성','값');

    요소에서 특정 속성 값을 얻거나 지정합니다.
    HTML에서 속성은 attribute 
    css,js에서 속성은 property
    개념은 동일.
*/
// const el = document.querySelector('.child');
// el.setAttribute('title','DOM에서 타이틀 지정했습니다.');
// console.log(el.getAttribute('title'));

/*
    E.hasAttribute() / E.removeAttribute()

    요소에서 특정 속성을 확인하거 제거합니다.
*/
// const el = document.querySelector('.child');
// console.log(el.hasAttribute('class'));
// el.removeAttribute('class');
// console.log(el.hasAttribute('class'));
// console.log(el);


console.log('** 크기와 좌표 **');

/*
    window.innerWidth / window.innerHeight

    현재 화면(viewport)의 크기를 얻습니다.
*/
console.log(`window.innerWidth ${window.innerWidth}`,`window.innerHeight ${window.innerHeight}`);

/*
    window.scrollX / window.scrollY

    페이지의 좌상단 기준, 현재 화면(viewport)의
    수평(scrollX) 혹은 수직(scrollY) 스크롤 위치를 얻습니다.
*/
console.log(`window.scrollX ${window.scrollX}`,`window.scrollY ${window.scrollY}`);

/*
    window.scrollTo() / E.scrollTo()

    지정된 좌표로 대상(화면,스크롤 요소)을 스크롤합니다.
    대상.scrollTo(X좌표,Y좌표)
    대상.scrollTo({top:Y,left:X,behavior:'smooth'})
*/
// const parentEl = document.querySelector('.parent');
// setTimeout(()=>{
//     parentEl.scrollTo({
//         top: 500,
//         left:0,
//         behavior :'smooth'
//     })
// },1000);

/*
    E.clientWidth / E.clientHeight

    테두리선(border)을 제외한 요소의 크기를 얻습니다.
    스크롤바 너비도 제외함.
    일반적으로는 사용하지않지만 특별하게 사용할때 주의하면서 사용해야함.
*/
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// console.log(parentEl.clientWidth,parentEl.clientHeight); 
// console.log(childEl.clientWidth,childEl.clientHeight);

/*
    E.offsetWidth / E.offsetHeight

    테투리 선(border)을 포함한 요소의 크기를 얻슶니다.
    이 속성을통해 크기를 구하는것을 권장.    
*/
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// console.log(parentEl.offsetWidth,parentEl.offsetHeight); 
// console.log(childEl.offsetWidth,childEl.offsetHeight);

/*
    E.scrollLeft / E.scrollTop

    스크롤 요소의 좌상단 기준,
    현재 스크롤 요소의 수평(scrollLeft) 혹은 수직(scrollTop) 스크롤 위치를 얻습니다.
*/
// window.parentEl = document.querySelector('.parent');
// console.log(parentEl.scrollLeft,parentEl.scrollTop);

/*
    E.offsetLeft / E.offsetTop

    페이지의 좌상단 기준, 요소의 위치를 얻습니다.
*/
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// console.log(parentEl.offsetLeft,parentEl.offsetTop); 
// console.log(childEl.offsetLeft,childEl.offsetTop);

/*
    E.getBoundingClientRect()

    테두리 선(border)을 포함한 요소의 크기와
    보여지는 화면에서의 상대 위치 정보를 얻습니다.
*/
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// console.log(parentEl.getBoundingClientRect());
// console.log(childEl.getBoundingClientRect());