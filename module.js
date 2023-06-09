/*
    모듈(Module)이란 특정 데이터들의 집합(파일) 입니다.
    모듈 가져오기(Import), 내보내기 (Export)

    모듈을 사용 하려면 index.html 파일에 type에 module을 명시해야함.
    ex) <script defer type="module" src="./module.js"></script>

    // 기본 내보내기를 가져올때는 변수명을 편하게 쓸수있음.
    // 이름 내보내기를 가져올때는 중괄호{}를 쓰고 변수명을 같이써야함.

     *<- 와일드카드 (전체)
     as 사용시 변수명 변경가능
*/
//import abc ,{ str as xyz, arr, hello as h } from './module_test.js'
//import * as abc from './module_test.js';
//import {a , b} from './module_utils.js';
// console.log(abc);
// console.log(xyz);
// console.log(arr);
// console.log(h());

// 비동기로 동적으로 불러올때
setTimeout(async ()=>{
    // import('./module_test.js').then(abc=>{
    //     console.log(abc);
    // })
    const abc = await import('./module_test.js');
    console.log(abc);    
},500)
setTimeout(()=>{
    import('./module_utils.js').then(({a,b})=>{
        console.log(a(),b);
    });
},1000);



