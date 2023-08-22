# Section03 : 리액트 기초 및 실습 컴포넌트

## 36. 모듈 소개

- 사용자 인터페이스 구축하는 방법
- 신택스, JSX
- 컴포넌트에 관한 것
- 데이터에 관한 것
- 지출 추적기 앱( 필터를 해서 연도별로 지출액을 확인 할 수 있다)

## 37. 컴포넌트란 무엇일까요? 컴포넌트는 왜 중요할까요?

- 사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리
- 컴포넌트가 전부이다.
- 아주 사소한 것들에 신경쓸 필요도 없고 오류도 덜 발생할 것입니다.
- HTML 코드, 그리고 스타일링을 위한 CSS 코드, 로직을 위해서 JavaScript 코드임
- 모든 사용자 인터페이스를 컴포넌트들로 분해 할수 있음

### 리액트의 장점

- 컴포넌트의 재활용 가능
- 구성요소를 분산 시킬 수 있다

## 38. 리액트 코드는 "선언적 방식"으로 작성됩니다!

- HTML, CSS, JavaScript를 이용을 해서 작성함
- HTML, JavaScript를로 이루어진 재사용 가능하고 반응성 있는 컴포넌트 제작 가능
- 원하는 최종 상태 정의함( 최종 상태는 목표 상태, 또는 다양한 조건에 따른 다양한 목표)
- 어떤 요소 추가, 삭제, 업테이트를 해야되는지 하는 것

## 39. 새로운 리액트 프로젝트 생성하기

- 구글에 create react project 검색 후 [React 프로젝트 생성](create-react-app.dev)
- 서버에서 react 보는 링크 [React Codepen](react.new)
- [Node.js 다운로드](https://nodejs.org/en/download/)

- 파일을 다운을 받고

```
    // 리액트 실행 코드
    1. npm install
    2. npm start로 개발 서버를 시작
```

## 40. 시작 프로젝트

- [리액트 깃 주소](https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components/code)
- [Codepen 링크](https://codesandbox.io/s/cmp-basics-start-4959mq)

## 41. 표준 리액트 프로젝트 분석하기

- 맨 처음 실행되는 파일 index.js임
- src 폴더에서 js파일 2개, css 파일 있음
- index.js에서 index.css를 임포트 함
- index.css에서 폰트, 배경색 등을 쓸 수 있다
- react-dom으로부터 ReactDOM을 임포트 하고 있습니다.
- ReactDOM을 index.js에 임포트한 다음에 createRoot() 메서드 호출
- 사용자 인터페이스의 기본 진입점 혹은 메인 훅이 생성됨 (그 역할이 createRoot의 역할)
- index.html(브라우저가 로딩하게 될 유일한 HTML 파일)
- index.html 파일에는 body안에 id = "root"가 있습니다
- react-dom 라이브러리가 제공하는 메서드를 사용하죠
- App도 임포트 하는 것입니다.
- JSX라고 부루는 신택스입니다.

## 42. JSX 소개

- JSX(JavaScript XML)의 줄인 말임
- 개발자도구에서는 소스 탭에서 js파일을 볼 수 있다.
- 우리가 vscode에서 작성한 코드가 브라우저에서 변환이 되어서 보여준다.

## 43. 리액트의 작동 방식

- 사용자 지정 HTML 요소라고 생각해요
- 선언형 접근법을 이용해서 제작함
- HTML 코드가 화면에 렌더링 되는 것이죠
- JavaScript는 명령적 접근법입니다.
- App.js 안에 있는 일종의 함수고요( index.js 안에서 마치 사용자 지정 HTML 요소처럼 사용되는 컴포넌트)

## 코딩연습: JSX 코드 작업하기

```
이 예제는 리액트와 JSX 코드를 시작하기 위한 간단한 연습입니다: 여러분이 해야 할 작업은 주어진 리액트 컴포넌트의 JSX 코드를 편집하여 "Exercise done!"이라는 텍스트가 포함된 h1 요소를 페이지에 표시하는 것입니다.

중요: 사용자 정의 JSX 코드는 기존 <div> 요소 안에 추가해야 합니다.
```

## 44. 첫 번째 사용자 정의 컴포넌트 구축하기

- 지출 항목을 먼저 만드는 것임
- 컴포넌트 트리 : 최상단에 있는 컴포넌트가 밑에 컴포넌트 합해서 렌더링 됨
- src 폴더에 component파일을 만들고 ExpenseItem.js파일 생성
- 이름을 지정을 할 때, 대문자로 시작한다
- 여러 단어를 조합해서 한 단어로 만들 경우에는 한 단어가 끝나고 다른 단어가 시작 할 때, 대문자로 시작을 한다.
- 리턴을 할 때, JSX 코드를 리턴합니다
- 컴포넌트는 그냥 함수임

```
    // 기본적인 컴포넌트 형식
    function 컴포넌트명() {
        return()
    }
    export default 컴포넌트명
```

```
연습: 첫 번째 컴포넌트 구축하기
컴포넌트에 대해 배운 내용을 연습하고 새로운 리액트 컴포넌트를 직접 만들어 보세요!

여러분이 해야 할 작업은 화면에 "First exercise - done!"라는 텍스트를 출력하는 사용자 정의 <ExerciseComponent /> 를 만드는 것입니다.

새 컴포넌트 코드에 빈 ExerciseComponent.js파일을 사용하고, 이후 기존 App 컴포넌트 내에서 이 컴포넌트를 출력합니다(App의 기존 JSX 코드를 여러분의 컴포넌트로 대체하세요).

최종 앱에는 이 기본 출력이 표시되어야 합니다:
```

## 연습: 첫 번째 컴포넌트 구축하기

```

컴포넌트에 대해 배운 내용을 연습하고 새로운 리액트 컴포넌트를 직접 만들어 보세요!

여러분이 해야 할 작업은 화면에 "First exercise - done!"라는 텍스트를 출력하는 사용자 정의 <ExerciseComponent /> 를 만드는 것입니다.

새 컴포넌트 코드에 빈 ExerciseComponent.js파일을 사용하고, 이후 기존 App 컴포넌트 내에서 이 컴포넌트를 출력합니다(App의 기존 JSX 코드를 여러분의 컴포넌트로 대체하세요).
```

답

```
    // App.js
    import React from 'react';
    import ExerciseComponent from './ExerciseComponent'
    // don't change the Component name "App"
    export default function App() {
        return <ExerciseComponent />
    }

    // ExerciseComponent.js
    import React from 'react';
    export default function ExerciseComponent() {
        return <p>First exercise - done!</p>
    }
```

## 45. 좀 더 복잡한 JSX 코드 작성하기

```
    // ExpenseItem.js
    function ExpenseItem() {
    return (
        <div>
            <div>March 28th 2021</div>
            <div>
                <h2>Car Insurance</h2>
                <div>$294.67</div>
            </div>
        </div>
    );
}

export default ExpenseItem;

```

## 46. 기본 CSS 스타일 추가하기

- components폴더 안에 ExpenseItem.css를 생성
- css를 적용해서 import "./ExpenseItem.css";를 함

```
    // ExpenseItem.css";

.expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 12px;
  background-color: #4b4b4b;
}

.expense-item__description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
}

.expense-item h2 {
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
}

.expense-item__price {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;
}

@media (min-width: 580px) {
  .expense-item__description {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }

  .expense-item__description h2 {
    font-size: 1.25rem;
  }

  .expense-item__price {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
}
```

## 47. JSX에서 동적 데이터 출력하기 및 표현식 작업하기

- 데이어틀 쓸 떄에는 return 위에 영역에 쓰면 된다.
- 데이터를 호출 할 때, '{ 변수명 }'를 넣는다
- toISOString() : 순화한 확장 ISO 형식의 문자열을 반환

```
    function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expnesTitle = "Car Insurance";
    const expnesAmount = 294.67;

    return (
        <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expnesTitle}</h2>
            <div className="expense-item__price">${expnesAmount}</div>
        </div>
        </div>
    );
    }

export default ExpenseItem;
```

## 48. props를 통해 데이터 전달하기

- 자바스크립트에서 파라미터를 받음으로써 그 함수들을 재사용 가능하게 만듭니다.
- 리액트에서 파라미터는 같은 요소는 props이다.
- props라는 속성을 추가함으로써 데이터를 사용자 지정 컴포넌트에 전달할 수 있습니다.

```
    // App.js의 배열로 된 데이터
    const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 94.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

    // ExpenseItem 컴포넌트의 title 속성은
     expenses의 0~3번째의 속성
    <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>

    <Product
    title={DemoList[0].title}
    price={DemoList[0].price}
    description={DemoList[0].description}/>

      // ExenseItem.js
      // props로 데이터를 받고
      // props.받을 속성명으로 하면 된다
        import "./ExpenseItem.css";

        function ExpenseItem(props) {
            return (
                <div className="expense-item">
                <div>{props.date.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                </div>
            );
        }
        export default ExpenseItem;

```

## 연습: "props"를 통해 데이터 전달하기

온라인 쇼핑몰의 UI 프로토타입을 작업 중이라고 해봅시다. 여러분이 해야 할 작업은 App 컴포넌트의 메인 페이지 제목("내 데모 상점") 아래에 두 개의 제품 항목을 (Product.js 파일에서 찾을 수 있는 <Product /> 컴포넌트를 통해) 출력하는 것입니다.

최종 UI는 다음과 같아야 합니다:

```
    // App.js
    import React from 'react';
    import Product from './Product';
    import './styles.css';

    // don't change the Component name "App"
    export default function App() {

        const DemoList = [
                {
                    title: "Product 1",
                    price: 10,
                    description: "First product"
                },
                {
                    title: "Product 2",
                    price: 20,
                    description: "Second product"
                }
            ]
        return (
            <div>
                <h1>My Demo Shop</h1>
                <Product
        title={DemoList[0].title}
        price={DemoList[0].price}
        description={DemoList[0].description}/>
                <Product
        title={DemoList[1].title}
        price={DemoList[1].price}
        description={DemoList[1].description}/>
            </div>
        );
    }

    // Product.js
    import React from 'react';

    export default function Product(props) {
        return (
            <article className="product">
                <h2>{props.title}</h2>
                <p className="price">${props.price}</p>
                <p>{props.description}</p>
            </article>
        );
    }
```

## 49. 컴포넌트를 여러 컴포넌트로 분할하기

- 리액트에서 코드를 짤 때, 컴포넌트에 props를 설정하고 입력 값으로 props를 받음
- 배열 데이터를 한 개씩 말고 expense data가 있는 컴포넌트 제작하기
- props를 받을 때, 값을 받을 신택스 태그에다가 넣어야된다

### props를 받는 방식

1. 기존에 했던 props 방식

2. 객체 구조 분해 할당

- 사용 방법 : {} 중괄호를 열고 여기서 받는 prop 객체의 다양한 프로퍼티를 참조한다.

- 함수 파라미터 리스트에서 직접 객체 구조 분해 할당을 사용하는 표준 자바스크립트 신택스입니다

```
    function ExpenseItem({ date, title, amount }) {
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
```

## 50. 컴포넌트에 "일반" 자바스크립트 로직 추가하기

- 컴포넌트를 자유롭게 설정하고 재사용할 수 있게 만들기 위해서 데이터를 컴포넌트 전달하는 것
- date 부분을 좀 수정 할 것임

```
 toLocaleString() 쓰는법
 toLocaleString( '내가 쓰는 지역 언어 태그','얼마나 구체적으로 할 설정하는 객체')
```

## 51. props를 전달하고 받는 대안적 방법/props 처리하기

- 컴포넌트 안에 로직과 JSX 코드가 많아지면 컴포넌트가 점점 커진다
- ExpenseItem component를 두개로 나눌수 있다
- ExpenseDate를 생성하고 date 변수를 넣으면 된다
- 컴포넌트가 커지면 컴포넌트를 분할하고 싶다
