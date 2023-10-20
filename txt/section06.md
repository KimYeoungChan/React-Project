# Section06 : 렌더링 리스트 및 조건부 Context

## 85. 모듈 소개

- 컴포넌트 구축 방법과 다수의 컴포넌트 작업하는 방법 state 작업 사용자 이벤트 다루는 법
- 목록과 조건부 컨텐츠를 렌더링 하는 방법

## 86. 데이터의 렌더링 목록

- 새로운 아이템 추가 날짜 선택해서 Add Expense를 클릭을 하면 목록에 추가가 되어야 됨
- Expenses.js파일에서, 현재 expenses 목록을 JSX코드를 개별적으로 추가하면서 렌더링 하고 있음
- ExpenseItem의 수를 목록으로 동적으로 렌더링 해봐야됨
- App.js에서 정의된 expenses를 렌더링 해야됨. 여기 expenses 배열이 있고 Expenses 컴포넌트에서 이것을 렌더링 해야됨
- 첫 단계는 prop를 통해 expense를 전달하는 것
- map 메소드 이용을 한다
- 이제 이것은 동적으로 벌어지고 있으며 실제 배열에 기반을 두고 있다는 것을 뜻합니다

연습: 데이터 목록 렌더링하기
“할 일 목록” 웹 앱을 만든다고 해봅시다. 여러분이 해야 할 작업은 더미 할 일 항목의 목록을 동적으로 출력하는 것입니다. 이 작업에 대해 Todo 컴포넌트가 준비되어 있지만, 할 일 텍스트를 수신하고 출력하기 위해서는 여전히 코드를 좀 더 추가해야 합니다.

더 정확히 말하면, App컴포넌트에서 제공된 DUMMY_TODOS 배열(변경해서는 안 됩니다!)을 JSX 요소 목록(정확히 말하면 <Todo> 요소)으로 변환해야 합니다. 모든 할 일 컴포넌트 항목은 text라는 prop을 통해 할 일 텍스트를 수신하고 출력해야 합니다.

정답

```
App.js
import React from 'react';

import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

export default function App() {
    return (
        <ul>
        {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
        </ul>
    );
}

Todo.js

import React from 'react';

export default function Todo(props) {
  return <li>{props.text}</li>;
}

```

## 87. State 저장 목록 사용

- 새로운 state 값을 얻을 때마다 expense뱅ㄹ을 어떻게 업데이트 할까요?
- state 사용함
- useState를 import를 함
- 초기 데이터를 DUMMY_EXPENSES로 지정한다
- DUMMY_EXPENSES의 값이 업데이트 하기 위해서 값이 업데이트 될 때마다 렌더링이 된다.
- 기존에 있는 배열에서 새 배열을 사용을 하여서 이전 상태에 의존하는 것으로 렌더링하는 함수 생성
- App.js

```
const addExpenseHandler = (expenses) => {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };
```
