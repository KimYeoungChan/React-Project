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
