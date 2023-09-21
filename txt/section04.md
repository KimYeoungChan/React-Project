# Section04 : 연습 시간:컴포넌트 기본

## 58. 모듈 소개

- 웹사이트 제작
- 컴포넌트 개념 활용
- 사용자 지정 컴포넌트를 여러 개 제작
- 데이터 전달

## 59. 시작 프로젝트 및 여러분이 해야 할 작업

- 리액트 코드 미완성 상태임
- 배열도 있는 상태임
- 첫 번쨰 과제 : 핵심 개념들을 출력
- 여러분들이 만들 수 있는 컴포넌트를 찾아보는 것
- 스니펫 컴포넌트 제작
- 사용자 지정 컴포넌트 만듬

## 60. 연습 힌트

```
연습 힌트

시작하는 방법을 잘 모르거나 막막할 때, 아래에서 도움이 될 만한 힌트를 찾아보세요.

혼자서 연습 문제를 풀기 어려우면, 며칠 또는 몇 주 후에 다시 시도해 보세요!

힌트:

중괄호를 통해 동적 데이터를 출력할 수 있습니다(예:<p>{어떤변수}</p>).

개념 배열을 분석합니다: 배열 요소가 객체인 배열입니다. 화면에 데이터를 출력할 때 이 점을 염두에 두세요.

[index]를 통해 배열 요소에 접근합니다(예: 첫 번째 배열 요소의 경우[0]).

“점 표기법”을 통해 객체 프로퍼티에 접근하세요(예: age라는 프로퍼티에 저장된 값을 가져오기 위해 someObject.age사용).

(잠재적으로 재사용 가능한) UI 빌딩 블록을 얻을 수 있도록 컴포넌트를 분할합니다.

너무 세분화하지 마세요(예: <li> 요소 안의 <p>에 대해 별도의 컴포넌트를 만드는 것은 적절하지 않을 수 있습니다).

"prop"을 사용하여 컴포넌트에 데이터를 전달하세요.

"props"는 항상 하나의 객체이며, 리액트에 의해 자동으로 생성되어 컴포넌트 함수에 전달된다는 점을 명심하세요.

"props" 객체에는 모든 사용자 지정 컴포넌트 "속성"이 프로퍼티로 포함됩니다(예: <User age={33} />는 age라는 프로퍼티를 포함하는 "props" 객체를 받게 됩니다.

여러분의 컴포넌트이므로 prop 이름은 여러분 마음대로 정할 수 있습니다. 하지만 값을 설정(<User age={31} />)하고 접근(props.age)할 때 항상 같은 이름을 사용해야 합니다.
```

## 61. 주요 개념 데이터 출력하기

- 첫번째 과제 해결하기
- App.js안에 concepts 데이터 배열이 준비 되어있음

```
<ul id="concepts">
        <li className="concept">
          <img src={concepts[0].image} alt={concepts[0].title} />
          <h2>{concepts[0].title}</h2>
          <p>{concepts[0].description}</p>
        </li>
</ul>
```

- npm install로 npm 의존성 설치를 해줌

```
  <ul id="concepts">
        <li className="concept">
          <img src={concepts[0].image} alt={concepts[0].title} />
          <h2>{concepts[0].title}</h2>
          <p>{concepts[0].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[1].image} alt={concepts[1].title} />
          <h2>{concepts[1].title}</h2>
          <p>{concepts[1].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[2].image} alt={concepts[2].title} />
          <h2>{concepts[2].title}</h2>
          <p>{concepts[2].description}</p>
        </li>
    </ul>
```

## 62. 가능한 컴포넌트 식별하기

- 지금의 코드를 분할해서 만들 수 있는 컴포넌트가 있는지 확인
- 이걸 분할해서 컴포넌트가 적어도 두 개 있음
- 재사용이 가능한 개념 컴포넌트가 있음
- 이 리스트 항목이 별도의 재사용 가능한 컴포넌트가 될 수 있다
- concept 컴포넌틀도 만들 수 있다.
- 이 코드를 컴포넌트들로 분할하는 것이 좋음

## 63. 사용자 정의 컴포넌트 만들고 사용하기

- header를 컴포넌트 홤

```
App.js

import Header from "./components/Header/Header";
<Header />


Header.js
import keyConceptsImage from "../../assets/images/key-concepts.png";

function Header() {
  return (
    <header>
      <img src={keyConceptsImage} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
}

export default Header;

```

## 64. 컨셉 항목을 재사용 가능한 컴포넌트로 아웃소싱하기

- 재사용이 가능한 컴포넌트 생성

```
App.js

import Concept from "./components/Concept/Concept";

<ul id="concepts">
        <Concept
          image={concepts[0].image}
          title={concepts[0].title}
          description={concepts[0].description}
        />
        <Concept
          image={concepts[1].image}
          title={concepts[1].title}
          description={concepts[1].description}
        />
        <Concept
          image={concepts[2].image}
          title={concepts[2].title}
          description={concepts[2].description}
        />
      </ul>

```

```
Concept.js

function Concept(props) {
  return (
    <li className="concept">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

export default Concept;

```

## 65. 모듈 리소스

```
모듈 리소스

여러분의 코드를 제 코드와 비교해 보고 싶을수 있습니다(예: 오류를 찾고 수정하기 위해서)

이를 위해 이 모듈의 코드 스냅샷들을 아래 Github 저장소에서 찾을 수 있습니다: https://github.com/academind/react-complete-guide-code/tree/03b-cmp-practice



사용 방법도 위 링크 페이지에 나와있습니다.



/code 폴더에서 스냅샷 중 하나를 선택하기만 하면 됩니다. 하위 폴더 이름은 이 코스 섹션의 강의 이름과 일치하기 쉽도록 붙인 것입니다.
```

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
