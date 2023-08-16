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
