# Section02 : 자바스크립트 새로고침

## 13. 모듈 소개

- React 기초 학습
- 적어도 자바스크립트 개념을 알고 듣는 것이 좋다

## 14. 시작 프로젝트

- 자바스크립트로 할 것이고 보통 값은 콘솔에 찍일 것입니다
- 리액트 개발을 위한 자바스크립트 개념 공부

## 15. 페이지에 자바스크립트 추가하기 및 리액트 프로젝트의 차이점

- 브라우저에도 실행 가능, 로컬로더 가능, 모바일에서도 가능

- 웹사이트에서 자바스크립트 코드가 추가가 되는지 확인하는 방법

- <script> 태그를 삽입하는 방법
- 자바스크립트 코트를 임포트하는 방법

- 자바스크립트는 파일명이 .js로 된다
- head 영역이랑 body영역에 넣을 수 있다.
- 'defer' 라는 속성으로 html을 다 읽은후 script를 읽어라는 명령을 할 수 있습니다.
- defer가 없으면 바로 script가 실행이 된다.
- "type = module"를 하면 모듈로 인식해서 다른 js 파일을 import 할 수 있습니다.
- 리액트로 작업을 할 떄, 빌드 프로세스를 이용을 함

## 16. 리액트 프로젝트 구축 프로세스

- 자바스크립 코드로 구축이 된다
- 작성한 코드 그대로 브라우저에 실행이 되는게 아니고 그 대신 브라으저 내부적으로 코드가 수정됩니다
- 리액트의 핵심은 자바스크립트 파일에 HTML 같은 코드를 넣는 것이기 때문입니다
- 두번째 이유 : 웹사이트 방문자가 다운로드해야 하는 코드의 양을 최대한 줄일 수 있도록 최적화된 코드입니다

## 17. “import” 및 "export"

- export를 하면 다른 파일에서 export한 파일을 쓸 수 있습니다
- 로컬 환경에서 이와같이 해야됨
  @@ -80,3 +80,52 @@
  imoport { 전변수명 as 바꿀 변수명}
  console.log(바꿀 변수명) // 전변수명

## 18. 변수와 값 다시 보기

- 자바스크립트를 이용해서 앱을 만들 때, 데이터를 다룹니다.
- 다양한 유형의 타입의 데이터를 다룰 수 있다 (string, Number, boolean,)
- 변수를 사용을 하면 재사용 및 가독성에 좋다
- 'let 이라는 재할당 가능 변수, const이라는 상수형 변수'
- 카멜케이스 문법으로 두 번째 단어부터는 첫 문자는 대문자로 쓰면된다
- const라는 상수형 변수는 다시 선언을 못한다

## 19. 연산자 다시 보기

- "+, -, \*, /" 등 수학 연산자로는 숫자는 가능하다
- 문자형은 "=(대입), ==(값만 일치), ===(값과 타입 일치)"
- if문으로 조건을 걸어서 내가 원하는 값을 추출 할 수 있다

## 20. 함수와 매개변수 다시 보기

특징

- 함수(function) : function, () => 등의 신택스 로 할수 있다
- 바로 실행되는 코드가 아니라 나중에 함수를 호출 했을 때, 실행되는 코드를 정의하는 것임
- 함수를 여러번 실행도 가능하다
- 값을 반환도 가능하다( return이라는 키워드로)
- 매개변수와 return이라는 키워드는 서로 독립적으로 사용 가능하면서 동시에 사용 가능하다

```

// 함수 문법

function 변수명(매개변수1, 매개변수2 ="값") {
// 내가 실행할 코드
console.log('Hello')
console.log(매개변수1)
console.log(매개변수2)
}

```

// 구성
함수안에 이렇게 하면 (매개변수1, 매개변수2 ="값")
매개변수 값에 기본값을 지정을 할 수 있는 것이다 (즉, 오버라이드 한것입니다.)
// 함수 실행하는 법
변수명(매개변수1, 매개변수2);
// 함수 동시에 사용하는 방법
return에서 사용되는 코드 명령어를 변수로 저장을 해서 변수로 호출을 하면 된다.

```

```

연습: 함수 다루기
여러분이 해야 할 작업은 다음과 같은 특성을 가진, combine이라는 이름의 함수를 만드는 것입니다.

· 입력값은 3개 받습니다.

· 입력값에 따른 새로운 값 a \* b / c (a, b, c는 입력값)을 계산합니다.

· 계산 결과를 반환합니다.

```

답

```

function combine (a, b, c) {
return a \* b / c
}
combine();

```

```

## 21. 화살표 함수

- 익명함수를 이용할 때, 자주 사용하는 것임

```
  익명함수 쓰는 법
  export default function() {
    console.log('Hello!');
  }

  export default (userName, message) =>  {
    console.log('Hello!');
    return userName + message;
  }
```

## 22. 화살표 함수 구문에 대해 자세히 알아보기

화살표 함수를 다룰 때는 '구문 단축키'를 사용할 수 있습니다.
가장 중요한 것은 다음과 같은 대안에 대해 알고 있어야 한다는 것입니다.

```
1. 매개변수 목록 괄호 생략하기
화살표 함수가 정확히 하나의 매개변수만 사용하는 경우, 묶는 괄호를 생략할 수 있습니다.
(userName) => { ... } 가 아니라 userName => { ... } 라고 쓸 수 있습니다.
함수에 매개변수가 없는 경우에는, 괄호를 생략해서는 안 됩니다.

() => { ... } 라고 써야 옳습니다.

함수가 둘 이상의 매개변수를 받는 경우에도 괄호를 생략해서는 안 됩니다.
userName, userAge => { ... } 라고 쓰면 안 됩니다.
(userName, userAge) => { ... } 라고 써야 합니다.
```

2. 함수 본문 중괄호 생략하기

화살표 함수에 반환문 외에 다른 로직이 없는 경우, return키워드와 중괄호를 생략할 수 있습니다.
number => { return number \* 3;} 라고 쓰는 게 아니라 number => number \* 3; 라고 쓸 수 있습니다.

아래와 같이 오류가 생깁니다.
number => return number \* 3; // 이 경우 retrun 키워드는 생략되어야 하므로, 오류가 생깁니다.
number => if (number === 2) { return 5 }; // 이 경우 if 문은 반환될 수 없으므로 오류가 생깁니다.

3. 특수한 경우: 객체만 반환하는 경우

2.에서 설명한 짧은 대안으로 자바스크립트 객체를 반환하려고 하면, 다음과 같이 유효하지 않은 코드가 나올 수 있습니다.

number => ({ age: number }); // 객체를 반환하려고 합니다.
자바스크립트는 중괄호를 JS 객체를 생성하는 코드가 아닌 함수 본문 래퍼로 취급하기 때문에 이 코드는 유효하지 않습니다.
객체를 생성하고 반환해야 한다고 자바스크립트에 “말하려면” 코드를 다음과 같이 수정해야 합니다:

number => ({ age: number }); // 추가 괄호를 써서 객체를 감싸줍니다.
객체와 중괄호를 추가 괄호로 감싸면, 자바스크립트는 중괄호가 함수 본문을 정의하는 것이 아니라 객체를 생성하기 위한 것임을 이해합니다. 따라서 객체가 반환됩니다.

## 23. 객체와 클래스 다시 보기

```
  객체(object)
  const user = {
    name "Max",
    age : 34,
    greet() {
      console.log("Hello!!");
      console.log(this.age);
    }
  };

  console.log(user) // name :"Max", age : 34
  console.log(user.name) // "Max"
  user.greet() // "Hello!!", 34
```

class 키워드 사용

```
class User {
  // 생성자 생성
  constructor(name, age){
    this.name = name;
    this. age = age;
  }
  greet() {
    console.log("Hi");
  }
}

const user1 = new User("Manuel", 35);
console.log(user1);

```

## 24. 배열 및 배열 메소드(map()과 같은)

- 배열(Array)
- 배열 생성할라면 [](대괄호)로 해야됨
- 배열 안데 여러 가지 타입의 값을 저장을 할 수 있다.
- 개별 값은 쉽표로 구분이 된다.

```
  const hobbies = ['Sports', 'Cooking', "Reading"];
  console.log(hobbies[0]); // Sports
  console.log(hobbies[1]); // Cooking
  console.log(hobbies[2]); // Reading

  // 배열 메소드를 사용법
  hobbies.(여러 가지 함수)

  // 새로운 배열 생성
  hobbies.push("Working");
  console.log(hobbies); // ['Sports', 'Cooking', "Reading", "Working"]

  // 특정 원하는 값을 찾는 메소드
  const index = hobbies.findIndex((item) =>
    return item === "Sports"
   );
   // 리턴문을 삭제 할 수 있음
  const index = hobbies.findIndex((item) => item === "Sports")
  console.log(index); // 0

  // 배열의 모든 원소를 다른 원소로 변경
  // 기존에서 학는게 아니고 완전 새 배열에서
  const editedHobbies = hobbies.map((item) => item + "!");
  console.log(editedHobbies); // ['Sports', 'Cooking', "Reading", "Working"]

  // 객체로 담을 수 있다
  // 각자 text:키에 itek ㄴ허는 함수이다
  const editedHobbies = hobbies.map((item) => item + ({ text : item }));
  console.log(editedHobbies);
```

```
메소드
여러분이 해야 할 작업은 숫자 목록을 자바스크립트 객체 목록으로 변환하는transformToObjects() 함수에 빠진 로직을 추가하는 것입니다.

새로 반환되는 배열에서, 모든 객체는 val키와 입력 배열의 숫자를 값으로 가져야 합니다.

예를 들어, [1, 2, 3] 이 입력된 경우,  transformToObjects([1, 2, 3]) 함수는 [{val: 1}, {val: 2}, {val: 3}]을 변환해야 합니다.

```

```
// 답
function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    return numberArray.map((item) => ({ val : item }) )
}
transformToObjects([1,2,3])
```

## 25. 디스트럭처링

```
// 배열
// 사용하기 전
const userNameData = ["Max", "Schwarzuiller"];

const firstName = userNameData[0];
const lastName = userNameData[1];

// 사용 한 후

const [firstName, lastName] = ["Max", "Schwarzuiller"];
console.log(firstName);
console.log(lastName);

```

```
// 객체
// 사용하기 전
  const user = {
    name : "Max",
    age : 34
  };

  const name = user.name;
  const age = user.age;

  // 사용한 후

   const {name : userName, age} = {
    name : "Max",
    age : 34
  };


console.log(userName);
console.log(age);
```

- 왼쪽은 해달 배열을 분해해 이 신택스 사용하면 배열 값을 가지고 옴
- 분해 신택스는 배열, 객체에서도 사용 가능하다
- 위치에 따라 이름을 지을 수 있습니다
- 객체는프로퍼티 이름을 기준으로 가져오므로 동일한 프로퍼티 이름으로 사용해야 됨

## 26. 함수 매개변수 목록에서 디스트럭처링

함수 매개변수 목록에서 디스트럭처링

이전 강의에서 설명한 디스트럭처링 구문은 함수 매개변수 목록에서도 사용할 수 있습니다.

예를 들어, 함수가 객체를 포함하는 매개변수를 수락하는 경우, 객체 프로퍼티를 “꺼내어’” 로컬 범위 변수(즉, 함수 본문 내에서만 사용할 수 있는 변수)로 사용할 수 있도록 함수를 디스트럭처링할 수 있습니다.

다음은 예시입니다:

```
function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}
```

storeOrder 함수 본문 내부의 "점 표기법"을 통해 order 프로퍼티에 접근하지 않고, 다음과 같이 디스트럭처링을 사용할 수 있습니다:

```
function storeOrder({id, currency}) { // 디스트럭처링
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
```

디스트럭처링 구문은 이전 강의에서 배운 것과 같습니다. 상수나 변수를 수동으로 생성하지 않을 뿐입니다.

대신, 들어오는 객체(즉, storeOrder 에 인수로 전달된 객체)에서 id와 currency 를 "꺼내어" 사용합니다.

이 예제에서 storeOrder 는 여전히 하나의 매개변수만 받는다는 점이 매우 중요합니다! 매개변수는 두 개가 아니라, 하나의 매개변수, 즉 내부적으로 디스트럭처링된 객체만 받습니다.

함수는 여전히 다음과 같이 호출됩니다

storeOrder({id: 5, currency: 'USD', amount: 15.99}); // 1개의 매개변수 / 값!

## 27. 스프레드 연산자

```
  const hobbies = ["Sports", "Cooking"];
  const user = {
    name : "Max",
    age "34"
  };

  cosnt newHobbies = ["Reading"];
  // 새 배열에 병합할 첫 번째 배열의 이름 작성
  const mergeHobbies = [...hobbies, ...newHobbies]; // ... 가 JS 신택스입니다

  const extendedUser = {
    isAdmin : true,
    ...user
  }


```

- 전개 연산자를 사용하면 각 배열에서 값을 가져와 개별 값을 배열에 추가한다.
- 배열 작동 원리 : 배열의 값을 가져와 쉽표로 구분된 개별 값을 새 배열에 추가합니다
- 객체 작동 원리 : 객체의 모든 키-값 쌍을 가져와 이 객체에 키-값 쌍을 추가합니다

## 28. 컨트롤 구조 다시 살펴보기

- 제어문 해보기

```

  const password = prompt('Your password');

  if(password === "Hello"){
    console.log("Hello works");
  } else if(password === "hello") {
    console.log("hello works");
  } else {
     console.log("Access not granted.");
  }

```

```

  const hobbies = ["Sports", "Cooking"];

  for(const hobby of hobbies) {
    console.log(hobby);
    // Sports, Cooking
  }

```

## 29. 리액트 없이 DOM 조작하기!

- 리액트 코드는 선언형이니깐 dom요소를 사용하지 않는다

## 30. 함수를 값으로 사용하기

- 함수를 다른 함수에 값으로 전달 할수 있다는 것이에요
- 미리 된것을 전달 할 떄는 함수명만 적으면 된다
- 소괄호 추가를 하면 타이머 함수가 실행 할 때, handleTimeout 함수가 바로 실행됨 handleTimeout의 반환값이 전달됨
- 두 번째 매개변수는 실행할 함수의 타이머ㄹ르 설정

```

  // function 함수
  function handleTimeout() {
    console.log("Timed out!")
  }

  // 상수형 함수
  const handleTimeout2 = () => {
    console.log("Timed out! ... again!")
  }

  setTimeout(handleTimeout, 2000);

  function greeter(greeFn) {
    greeFn();
  }

  greeFn(() => console.log("hi"))
```

## 31. 함수 내부에서 함수 정의하기

- 함수 안에 다른 함수 정의하는 것
-

```
 function init() {
  function greet() {
    console.log("Hi")
  }

  greet();
 }

init(); // Hi

// init 밖에서 greet을 실행 할 수 있습니다.
// 그 이유는 init 안에 선언이 되었어다
```

## 32. 참조형과 기본 값 비교

- String, Number, boolean 모든 기본 값 타입
- 기본 값의 특징 : 값, 티입도 변경을 할 수 없다
- 변수에 값을 저장할 때는 값 자체를 저장하는게 아니라 해당 값의 메무리 주소를 저장합니다(변수는 메모리 어딘가에 저장됨)
- 상수는 주소가 변경이 되지 않는다.
- 상수로 배열이 선언이 되면 주소에 가려진 값을 수정하는 것이이라서 개념에 어그나는 것이 아니다.
- 객체는 주소를 참조에 엑세는 된다는 점이다

```
  // 기본형
  let userMessage = "Hello";
  userMessage = 1; // "Hello1"로 됩니다

  // 참조형
  cosnt hobbies = ["Sports", "Cooking"];
  hobbies.push("Working");
  console.log(hobbies);
  // ["Sports", "Cooking", "Working"];
  // 새롭게 값이 추가가 된다
```

## 33. 차세대 JavaScript - 요약

이 모듈에서, 저는 몇몇 핵심 차세대 자바스크립트 기능들에 대한 간략한 소개를 해 드렸습니다. 물론 이 과정에서 여러분들이 자주 보시게 될 것들에 초점을 맞추었죠. 여기 간략한 요약이 있습니다!

let & const

```


let & const
let 에 대해 더 읽어보기: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

const에 대해 더 읽어보기:: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

let 과 const 는 기본적으로 var 를 대체합니다. 여러분은 var 대신 let 을 사용하고, var  대신 const를 사용하게 됩니다. 만약 이 "변수"를 다시 할당하지 않을 경우에 말이죠 (따라서 효과적으로 constant로 변환합니다).

ES6 Arrow Functions
더 읽어보기: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Arrow function은 JavaScript 환경에서함수를 생성하는 또 다른 방법입니다. 더 짧은 구문 외에도 this 키워드의 범위를 유지하는데 있 이점을 제공합니다 (여기를 보세요).

Arrow function 구문은 낯설게 보일 수 있으나 사실 간단합니다.

function callMe(name) {
    console.log(name);
}
또한 다음과 같이 작성할 수도 있습니다:

const callMe = function(name) {
    console.log(name);
}
이렇게 됩니다:

const callMe = (name) => {
    console.log(name);
}
중요:

arguments가 없는 경우, 함수 선언시 빈 괄호를 사용해야 합니다:

const callMe = () => {
    console.log('Max!');
}
정확히 하나의 argument가 있는 경우, 괄호를 생략할 수 있습니다:

const callMe = name => {
    console.log(name);
}
value를 return할 때, 다음과 같은 숏컷을 사용할 수 있습니다:

const returnMe = name => name
이것은 다음과 같습니다:

const returnMe = name => {
    return name;
}
Exports & Imports
React 프로젝트에서 (그리고 실제로 모든 최신 JavaScript에서), 모듈이라 불리는 여러 자바스크립트 파일들에 코드를 분할합니다. 이렇게 하면 각 file/ 모듈의 목적을 명확하게 하고 관리가 용이하게 합니다.

다른 파일의 기능에 계속 액세스하려면 export  (available하게 하기 위해) 및 import 엑세스를 확보하기 위해) statements가 필요합니다.

두 가지 유형의 export가 있습니다: default (unnamed)와 named 입니다.

default => export default ...;

named => export const someData = ...;

default exports를 다음과 같이 import 할 수 있습니다.

import someNameOfYourChoice from './path/to/file.js';

놀랍게도, someNameOfYourChoice  전적으로 여러분에게 달려 있습니다.

Named exports는 이름으로 import되어야 합니다:

import { someData } from './path/to/file.js';

파일 하나는 오직 하나의 default와 무한한 named exports를 가질 수 있습니다. 하나의 default를 같은 파일 내에서 named exports와 믹스할 수 있습니다.

named exports를 import할 때, 다음 구문을 이용해 한 번에 모든 named exports를 import할 수 있습니다.

import * as upToYou from './path/to/file.js';

upToYou 는 모든 exported 변수/함수를 하나의 자바스크립트 객체에 모읍니다. 예를 들어, export const someData = ...  (/path/to/file.js ) 이와 같이 upToYou 에 액세스 할 수 있습니다: upToYou.someData .

Classes
Classes는 constructor 함수와 prototypes를 대체하는 기능입니다. 자바스크립트 객체에 blueprints를 정의할 수 있습니다.

예시:

class Person {
    constructor () {
        this.name = 'Max';
    }
}

const person = new Person();
console.log(person.name); // prints 'Max'
위의 예시에서, class뿐 만 아니라 해당 class의 property (=> name) 이 정의됩니다. 해당 구문은, property를 정의하는 "구식" 구문입니다. 최신 자바스크립트 프로젝트에서는 (이 코스에서 사용된 것처럼), 다음과 같은 보다 편리한 정의 방법을 사용해 class property를 정의합니다:

class Person {
    name = 'Max';
}

const person = new Person();
console.log(person.name); // prints 'Max'
메소드를 정의할 수도 있습니다. 다음과 같이 말이죠:

class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}

const person = new Person();
person.printMyName();
혹은 이와 같이 할 수도 있습니다:

class Person {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
두 번째 접근 방식은 all arrow function과 같은 이점이 있습니다: this키워드가 reference를 변경하지 않습니다.

class 사용시 inheritance를 사용할 수도 있습니다.

class Human {
    species = 'human';
}

class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'
Spread & Rest Operator
Spread 와 rest operator는 사실 같은 구문을 사용합니다: ...

맞습니다, 연산자입니다 - 점 세개죠. 이것을 사용해 spread로 사용할지 rest operator로 사용할지 결정합니다.

Spread Operator 사용하기:

Spread operator는 배열에서 요소들을 가져오거나 (=> 배열을 요소들의 리스트로 분해) 객체에서 속성을 가져옵니다.

두 가지 예시가 있습니다:

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
객체에 spread operator를 사용한 예시입니다:

const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};
그러면 newObject는 다음이 될 것입니다.

{
    name: 'Max',
    age: 28
}
sperad operator는 배열과 객체를 복제하는데 매우 유용합니다. 둘 다  (primitives가 아닌) reference 유형이기 때문에, 안정적으로 복사를 하는게 어려울 수 있습니다. (복사된 원본에 future mutation 발생 방지). Spread operator로, 객체나 배열의 복사본 (shallow!)을 쉽게 얻을 수 있습니다.



Destructuring
Destructuring을 사용하면 배열이나 객체의 값에 쉽게 엑세스할 수 있고 변수에 할당할 수 있습니다.

한 배열의 예시입니다:

const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]
다음은 객체의 예시입니다:

const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}
Destructuring은 인자를 가진 함수를 작업할 때 매우 유용합니다. 이 예시를 보시죠:

const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'
여기서, 함수내 name만을 print하고 싶지만 함수에 완전한 person 객체를 보내고 있습니다. 당연히 이것은 문제가 되지 않지만 personObj.name을 이 함수내에서 호출해야만 합니다. 이 코드를 destructuring으로 압축시켜 보겠습니다.

const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max')
위와 동일한 결과를 얻지만 코드가 줄었습니다. Destructuring을 통해, name property를 가져와 name 이라는 이름의 변수/인수에 저장하고 함수 본문에서 사용할 수 있습니다.

```

## 34. JS Array functions

```
차세대 자바스크립트는 아니지만 중요합니다. 다음과 같은 자바스크립트 array 함수가 있습니다: map() , filter() , reduce().

많은 React 개념이 (불변의 방식으로) 배열 작업에 의존하기 때문에 제가 그것들을 꽤 많이 사용하는 것을 보게 될 것입니다.

다음 페이지는 어레이 프로토타입에서 사용할 수 있는 다양한 방법에 대한 좋은 개요를 제공합니다. 필요에 따라 이를 클릭하고 지식을 리프레시할 수 있습니다. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

이 코스에서 특히 중요한 사항은 다음과 같습니다:

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b

concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b

slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

```

## 35. 모듈 리소스

```
모듈 리소스

여러분의 코드를 제 코드와 비교해 볼 수 있습니다(예: 오류 찾기+수정하기)

코드샌드박스의 완성된 코드: https://codesandbox.io/s/javascript-refresher-j56djd

이 모듈의 완성된 코드 스냅샷은 아래 Github 저장소에서 확인할 수 있습니다: https://github.com/academind/react-complete-guide-code/tree/02-js-refresher

사용법은 링크된 페이지에서 확인할 수 있습니다.

섹션 슬라이드가 사용 가능한 경우 Github 저장소에서 찾을 수 있습니다.

```
