# Section05 : 리액트 State 및 이벤트 다루기

## 66. 모듈 소개

- 리액트는 선언형 접근법을 취한다
- 우리가 원하는 목표 상태를 정의하고 나면 리액트가 해당 상태에 도달하도록 하는 거죠
- 정적 어플리케이션 만들었음
- 사용자의 클릭과 사용자가 입력한 데이터에 대응하고 어떤 일이 발생하면 그에 따라 바뀌는 반응형 앱
- 클릭과 같은 이벤트인 사용자 이벤트 사용법(핸들러 이벤트 사용법)
- UI 업데이트 및 state에 대한 것
- 컴포넌트와 state에 대해서 다시 알려주세요

## 67. 이벤트 수신 및 이벤트 핸들러로 작업하기

- 버튼을 클릭하면 어떤 반응인지 보기
- html button element 라고 구글에 검색을 하면 button에 대한 설명이 나옴
- 리액트는 버튼 이벤트에 대해서 프로퍼티에 대해서 생성함
- 보통 on으로 시작을 한다.
- 클릭을 할 때에는 onClick 프로퍼티를 쓰고 onClick 안에 함수를 써야된다.

```
onClick={() => {
          console.log("Clicked");
        }}
  익명의 함수를 쑤는 것도 좋고 function을 써도 좋지만 보통 바람직하지 않는 표현임
```

- 보통 함수는 return 전에 쓰는 것이 좋다
- 함수를 function을 쓰든 const로 변수로 해서 써도 좋다.

```
<button onClick={clickHandler}>Change Title</button>
```

- 함수 이름만 넣으면 된다(그 뜻이 지목을 한다는 것이다)
- 클릭을 했을 때, 실행이 되는게 아니라 JSX 코드가 평가 될때, onClick에 있는 함수가 실행됨
- 모든 내장 HTML에 이벤트 리스너를 추가 할 수 있다
- 기본 DOM 동작에 대해서만 기능을 한다
- 함수 이름을 적을 때, 이벤트이름 + Hanlder를 보통 붙여준다

```
연습: 이벤트 수신하기
Imagine you're working on a brand-new React app that should allow users to bookmark articles (e.g., news articles).

To start with your work, your task is to "connect" a click event listener to an already existing button and output "Stored!" via console.log(). And, of course, you should do that "the React way".

답
import React from 'react';

import './styles.css';
// don't change the Component name "App"
export default function App() {
    const connectHandler = () => {
        console.log("Stored!")
    }

    return <button onClick={connectHandler}>Bookmark</button>;
}
```

## 68. 컴포넌트 함수가 실행되는 방법

- 화면에 표시가 되는 부분 수정하는 법
- let 변수 생성 후 하는법
- 함수는 실행이 되는데 DOM에는 반영이 안되는 이유는 리액트가 생성되는 이유가 아니라서
- 리액트 코드가 어떻게 JSX를 파싱하는지
- 함수는 호출을 해야지 실행이 된다.
- 리액트는 Expenses.js 안에 있는 함수 호출
- 리액트는 JSX에서 마주치는 모든 컴포넌트 함수를 계속해서 호출합니다(모든 함수 호출)
- index.js에서 보통 App.js를 호출함
- 버튼을 클릭을 하면 title이 바뀌어야 함

## 69. "State"와 함께 일하기

- 내장되있는 시스템을 이용함
- clickHandler가 실행 했을 때, title 값은 사실 데이터입니다.
- 이 컴포넌트가 재평가되고 이 title 데이터에 변동 사항이 생기면 화면에도 반영이 되야됨
- 이 코드로는 첫 번재 렌더링 다음에 호출이 되지 않음
- 리액트 라이브러를 가지고 와야됨
- import {} : 리액트 라이브러리의 특정 요소
- 모든 리액트 훅은 use라는 단어로 시작함
- 함수 안에는 호출을 해야됨
- useState는 변수 값이 변하면 재호출을 하도록 만드는 것임
- 해당 변수에 새 값을 할당하기 위해 호출 할수 있는 함수를 리턴함
- 상태 변수가 작동하는 방식임
- useState는 배열을 리턴함
- 배열 구조 분해 할당이라는 JS 기능을 사용함

```
  const [초기값, set초기값] = useState()
  초기값 : 변수값
  set초기값 : 나중에 새 품명을 설정할 떄 호출됨(초기값 변수를 이용함)
```

- 리턴하는 두 요소의 이름을 관용적인 방식입니다.
- set초기값을 실행하는 것이 단지 변수의 값을 변하는 것이 아니다
- 상태 업데이트 함수를 실행할 떄, 이 특별한 변수는 새 값을 수신할 뿐만 아니라 useState값이 있는 값이 있는 함수를 재실행합니다
- 정리를 하면 useState 함수를 쓰면 처음에 렌더링 되는 부분에서
  변수의 값이 변환이 되면 JSX 코드를 재평가를 해서 다시 재 렌더링이 되는 부분입니다.
- 재렌더링 시키고 싶으면 상태가 등록된 useState를 쓰면 된다

코딩 연습 9

```
여러분이 해야 할 작업은 App컴포넌트에 이미 포함된 버튼 클릭을 수신하는 이벤트 리스너를 추가하는 것입니다.

버튼을 클릭하면 가격이 $100에서 $75로 변경되어야 합니다.

기존 App 컴포넌트 함수에 상태 값을 추가하고, 버튼 클릭 시 상태 값이 업데이트되고 JSX 코드의 일부로 출력되도록 합니다.

---

중요: useState()와 같은 리액트 Hook을 사용할 때는,useState()만 별도로 import해서 사용하지 말고, React.useState()로 사용해야 합니다. 이 Udemy 코드 에디터/환경에서는 React.useState()를 사용하지 않으면 UI를 표시하지 못할 수 있습니다!

```

답

```
import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {

    const [money, setMoney] = React.useState("$100");

    function clickHandler () {
        setMoney("$75")
    };

    return (
        <div>
            <p>{money}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}

```

## 70. useState Hook 자세히 살펴보기

- "useState"는 이것이 호출되는 컴포넌트에 대한 어떤 상태(즉, 어떤 값을 상태로써 등록합니다)
- 특정 컴포넌트 인스턴스에 대한 상태 등록
- 이 컴포넌트 함수만이 해당 컴포넌트가 사용된 이 인스턴스만이 리액트에 의해 재평가 됨
- 상태는 컴포넌트 인스턴스별로 구별됩니다

### const를 사용하는 이유는?

- 상태를 업데이트할 때 새 값을 할당하는 방식이 아님 대신 상태 업데이트 함수 호출
- useState를 사용을 해서 우리 대신에 React에서 값을 관리하는 일
- 우리는 그냥 함수만 호출하는 것이라서 등호 연산자를 이용해서 title에 새로운 값을 할당하는 것은 좋은 생각이 아닙니다
- 상태가 업데이트 되면 컴포넌트 함수도 재실행 됨
- 주목할 만한 것 : 리액트가 주어진 컴포넌트 인스턴스에서 처음 useState를 호출하는 때를 추적하는 것임
- 가장 처음 호출할 때, 리액트는 인자를 초기값으로 설정합니다
- 초기값은 해당 컴포넌트 함수가 주어진 컴포넌트 인스턴스에 대해 처음으로 실행되는 때에만 고려됩니다.
- useState를 활용해 상태를 등록해 주기만 하면 된다
- 값이 늘 두 개가 리턴됩니다.
- 값자체가 함수입니다.

## 71. State는 여러 가지 방법으로 업데이트될 수 있습니다!

```
지금까지, 우리는 유저 이벤트 발생 시 상태를 업데이트 했습니다 (예: 클릭)

이는 매우 일반적이지만 상태 업데이트에 꼭 필요한 것은 아닙니다. 어떤 이유로든 상태를 업데이트할 수 있습니다.

코스 후반부에서, 완료된 Http 요청을 볼 수 있지만(여기서 반환된 Http 응답을 기반으로 상태를 업데이트하려고 함) 타이머가 만료되어 상태를 업데이트할 수도 있습니다 ( setTimeout()으로 설정).
```

## 72. 양식 입력 추가하기

- 사용자 인풋을 모으는 기능 추가
- 비용 추적기 기에서 중요한 기능임

## 73. 사용자 입력 수신하기

- input이 onChange 이벤트리스너 추가
- 이벤트가 실행 할 때마다 event 객체를 추가 해줌
- 이 수많은 event 객체 중에서 value값을 필요함

## 74. 여러 상태 사용하기

- 사용자의 입력 값을 모아서 전체 폼에 제출 후 객체로 보여줌
- 값을 저장하고 함수가 재실행 되어도 컴포넌트가 재평가 되어도 값이 남아 있도록 하기 위해서 우리는 다시 상태를 활용할 겁니다
- 한마디로 input의 값이 바뀌면 위 함수가 실행이 되도록 하는 것임

- useState를 이용을 해서 가능하다.

```
const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
```

- 여러 개의 데이터를 관리하는 법은 데이터 갯수만큼 useState를 쓰면 된다
- 여러 개의 각기 다른 상태를 업데이트하고 관리하는 것은 가능합니다

## 75. 대신 상태 하나 사용하기(더 좋은 점)

- 상태 하나로 사용하기
- 사용자의 인풋으로 움직이는데 똑같은 폼이 세개 이기 때문에 반복이 된다
- 단일 상태로 하는 방법

```
const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
```

- 키-쌍 값이 사라지는 것임
- 단일로 하는 것은 객체로 저장을 해서 하는 것임
- 기존 값 말고 나머지 값을 유지할라면 수동으로 값을 복사를 해줘야 합니다.

## 76. 이전 상태에 의존하는 상태 업데이트하기

- 하나의 상태로 할 때에는, 이전 상태에 의존하는 상태로 해야된다!
- 이전 상태의 스냅샷에 기대서 기존의 값을 복사한 뒤 새 값으로 이전 값을 오버라이드 한 거죠
- 기존에 있는 값을 주석처리하고 먼저 함수를 호출한 다음 이 함수에 함수를 넣어야 합니다
- 한마디로 useState 안에 함수를 넣는 것입니다

```
setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
```

- 다수의 상태 업데이를 동시에 예약할 경우, 오래 되었꺼나 잘못된 상태 스냅샷에 의존하게 될 수도 있습니다.
- 리액트는 상태 업데이트를 예약한다고 즉시 처리 못함

```
연습: 양식 입력에 상태 사용하기
문자 메시지 앱을 작업 중이라고 해봅시다. 여러분이 해야 할 작업은 사용자가 타이핑하는 동안 사용자가 입력한 텍스트의 유효성을 검사하는 작업을 수행하는 것입니다.

입력한 문자 메시지가 유효한 경우(예를 들어 길이가 3 글자 이상인 경우) 입력 필드 아래에 "Valid message" 라는 텍스트가 표시됩니다. 유효하지 않은 경우(즉, 3 글자보다 짧은 경우) "Invalid message"라는 텍스트가 표시되어야 합니다.

이 이미지는 유효하지 않은 메시지(즉, 너무 짧은 메시지)를 입력했을 때 완성된 앱이 어떻게 보이는지 보여줍니다:



이것은 동일한 앱에 유효한 메시지를 입력한 경우입니다:



이런 결과를 얻으려면, 현재 메시지 유효성(즉, "Invalid"또는 "Valid" 문자열)을 어떤 상태 값에 저장해야 합니다. 이 상태 값은 입력 값이 변경될 때마다 업데이트되어야 합니다. 따라서 상태를 업데이트하는 코드를 트리거하는 적절한 이벤트 리스너를 추가해야 합니다.



적절한 상태 값(즉, "Invalid"또는 "Valid" )을 도출하기 위해 다음 if조건을 사용할 수 있습니다.

if (value.trim().length < 3) {  // 할일: "Invalid"라고 하도록 상태를 업데이트하기} else {  // 할일: "Valid"라고 하도록 상태를 업데이트하기}
당연히 App 컴포넌트의 JSX 코드의 일부로 상태 값을 출력하여 "Invalid message"또는 "Valid message"가 표시되도록 해야 합니다.

중요: Udemy 코드 에디터에서 작업할 때는 useState()가 아니라 React.useState()를 사용해야 합니다!
```

답

```
import React, {useState} from 'react';

// don't change the Component name "App"
export default function App() {

    const [message, setMessage] = React.useState('Invalid');

    const handleInputChange = (evnent) => {
        const inputValue = evnent.target.value;
        if (inputValue.trim().length < 3) {
            setMessage('Invalid')
        } else {
            setMessage('Valid')
        }
    }

    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={handleInputChange} />
            <p>{message} message</p>
        </form>
    );
}
```

연습: 이전 상태를 기반으로 상태 업데이트하기

답

```
import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [counter,setCounter] = React.useState(0)

    function increaseCount() {
    setCounter(prevCounter => prevCounter + 1);
    };


    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={increaseCount}>Increment</button>
      </div>
    );
}
```

## 77. 대안: 공유 핸들러 함수 생성하기

- ChangeHandler 함수가 세 개가 있습니다(제목, 금액, 날짜),상태 슬라이도 세 개, 인풋도 세 개로 제작을 할 수 있다
- 하지만, 공유 핸들러 함수를 이용을 해서도 가능하다

```
// function
// 화살표
const inputChangeHandler = (identifier, value) => { // identifier랑 value라는 매개변수 필요
    if (identifier === "title") { // identifier가 title 이면
      setEnteredTitle(value); // title 값 업데이트
    } else if (identifier === "date") { // identifier가 date 이면
      setEnteredDate(value); // date 값 업데이트
    } else {
      setEnteredAmount(value); // amount 값 업데이트
    }
  };

// 렌더링 부분
// 넘기는 부분을 화살표 함수를 통해서 호출 하는 곳에 직접 쓴다
// event 라는 것을 받고 inputChangeHandler를 실행한다.
// 매개변수 값을 넘겨 줘야된다. 첫 번째 인수는 : title, 두번째 인수는 event.target.value로 넘깁니다.
<div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>

```

## 78. 양식 제출 처리하기

- button의 type이 submit이면 form 요소 자체에서 이벤트 발생함
- submit 이벤트를 하면 웹 브라우저 자체에서 다시 로딩이 됨. 그 이유는 브라우저는 자동으로 요청을 보낸다
- 이 양식이 제출이 되었을 때, JS로 처리하고 직접 데이터 수집하고 모아서 먼가 하는 것임

```
// submit 이벤트
 const submitHandler = (event) => {
    event.preventDefault(); // 기본 기능 막음(자동 발송 되는 기능 막음)

    // 객체 생성
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);


  };
```

콘솔 값

```
amount
:
"0.04"
date
:
Tue Dec 13 2022 09:00:00 GMT+0900 (한국 표준시) {}
title
:
"test"
[[Prototype]]
:
Object
```

- 그 다움 입력란 비우는 것임

## 79. 양방향 바인딩 추가하기

- input 값 지우는 방법은 입력된 값을 저장하기 위해서 useState를 사용하였음
- 다른 방법으로는 컴포넌트 함수 밖에서 지역 변수를 쓰는 방법도 있음
- 양방햔 바인딩(Two-way binding): 인풋 요소에 발생하는 변경사항을 수신도 하고 인풋 요소에 새 값을 넣을 수도 있다
- 즉, 코드를 이용해 인풋의 값을 초기화하거나 바꿀수 있다
- 실행 순서는 양식이 제출됐을 때, setEnteredTitle를 호출하해서 빈 문자열로 인풋으로 체울소 있는 것임 즉, 초기 상태로 하는 것임
- 양방향 바인딩이 리액트 핵심 개념입니다.

```
const submitHandler = (event) => {
    event.preventDefault(); // 기본 기능 막음(자동 발송 되는 기능 막음)

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    setEnteredTitle(""); // 빈 값으로 바꿈
    setEnteredAmount(""); // 빈 값으로 바꿈
    setEnteredDate(""); // 빈 값으로 바꿈
  };


div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // 인풋값 초기화 및 바꾸는 법 : value 속성 추가하면됨
            onChange={titleChangeHandler}
          />
        </div>
```

## 80. 자식-부모 컴포넌트 통신(상향식)

- 목표 : 새 지출 사용자가 입력한 이 내역을 기존 지출 목록에 추가하기
- 식별자 추가, 수집한 데이터 전달을 해야됨(ExpenseForm에 생성한 데이터를 App 컴포넌트로 전달해야됨)
- 여태까지는 부모가 자식한테 주는 방식으로 배웠음
- 그럼 자식이 부모한테 데이터 주는 방식은?(Expenses에서 App으로 전송)
- ExpenseForm 컴포넌트에서 form 태그에서 사용자가 직접하고
  title 인풋에 값을 입력할 때마다 titleChangeHandler 함수 실행되고 그 함수에서 자동으로 이 기본 event 객체를 받음
  이 것은 브라우저에서 받는 것임
  기본으로 리액트에서 제공하는 컴포넌트로라서 DOM에는 인풋 요소로 전달되는 그런 컴포넌트입니다.
  끝에 보면 컴포넌트를 마무리하는 문자가 있음
  컴포넌트 속성 지동하고 onChange라는 속성도 넣음

- 상향식으로 하는 방법은 값으로 함수를 요구하고 그 함수를 부모 컴포넌트에게 받아 자식 컴포넌트ㄴ에게 전달하고 그 함수를 자식 컴포넌트 안에서 호출하는 것임
  그 함수를 호출할 떄, 데이터를 함수에 인자 형태로 전달할 수 있꼬. 이 방식을 이용해 자식에서 부모로 데이터 전달가능함

- 자식에서 부모로 데이터 전달

1. 지출 데이터를 NewExpenses로 전달함

```
// 함수 영역
const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

// 렌더링 영역
<div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
```

- 컴포넌트 사이에서 정보 교환이 자주 일어남(상향 및 하향)
- 상태와 이벤트 처리 작업
- 데이터를 위로도 전달을 할 수 있다.
