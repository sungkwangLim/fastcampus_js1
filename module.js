/*
    모듈(Module)이란 특정 데이터들의 집합(파일) 입니다.
    모듈 가져오기(Import), 내보내기 (Export)

    모듈을 사용 하려면 index.html 파일에 type에 module을 명시해야함.
    ex) <script defer type="module" src="./module.js"></script>
*/

// 기본 내보내기를 가져올때는 변수명을 편하게 쓸수있음.
// 이름 내보내기를 가져올때는 중괄호{}를 쓰고 변수명을 같이써야함.
// *<- 와일드카드 (전체)
//import abc ,{ str as xyz, arr, hello as h } from './module_test.js'
import * as abc from './module_test.js';
import {a , b} from './module_utils.js';
// console.log(abc);
// console.log(xyz);
// console.log(arr);
// console.log(h());
console.log(abc);
console.log(a(),b);