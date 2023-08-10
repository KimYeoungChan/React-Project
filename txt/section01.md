# Section01 : 시작하기

## 2.React.js가 무엇인가?

```
    react.js 공식 홈페이지에 있음
    [리액트 공식 웹페이지](https://react.dev/)
    정의 : 웹 및 네이티브 사용자 인터페이스를 위한 라이브러리
    특징 : 사용자 인터페이스 구축을 위한 JavaScript 라이브러리
    [예시 페이지](https://www.netflix.com/kr/)

    장점
    - 많은 상호 작용을 하면서 작동을 잘한다.
    - 화면 전환이 빠르다
    - 로딩을 안 기다려도 된다.
    대표적은 예인 사이트로는 넷플릭스가 있습니다.

    리액트를 사용하는 목적
    1. 클라이언트 사이드의 자바스크립트 라이브러리
    2. 웹사이트를 위한 최신의 반응형 웹사이트 인터페이스임
    3. 최신의 다채롭고 복잡한 사용자 인터페이스를 쉽게 구축 가능
```

## 3. 리액트JS 와 "바닐라 자바스크립트" 비교: 왜 리액트를 사용해야 할까요?

```
    목표는 자바스크립트 기초 지식을 갖췄다고 전제하고 자바스크립트 코드를 자세히
    설명하진 않는다.

    자바스크립트 파일이랑 리액트 파일이랑 같은 기능을 구현을 하더라도 방식이나 해석하는 방식이 다르다.

    자바스크립트 파일은 index.html, index.js 파일로 구도를 한다.

    리액트 파일은 App.js 안에서 JSX라는 구문을 씁니다.
    중간에 html 요소를 쓴다.
    UI 요소랑 동적인 이벤트 요소를 따로 구분을 지어서 코드를 작성함


    1. 리액트는 목표로하는 UI 상태를 정의할 뿐, 거쳐야 하는 게 아니다
    2. 반드시 선언형으로 실행을 한다
```

## 4. 첫 번째 리액트 앱 편집하기

[예시 사이트](https://codesandbox.io/s/first-react-app-start-forked-qqtlhk)

- content 배열에 4번째 배열 생성을 하였다
- 네번째 탭 버튼을 생성을 하면됨

```
    <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            React vs JS
          </button>
```

추가를 하면 된다

## 5. 이 코스 소개 및 개요

1. 기본 개념 익히기
2. 고급 개념 익히기

- 퀴즈 및 개념풀이 문제들 풀이 할거임

## 6. 이 코스를 수강하는 두 가지 방법

- 처음부터 듣는 기본 개념 듣는 학생
- 섹션 30부터 바로 고급 개념 듣는 학생

## 7. 강의 소개 및 강의 개요

- 리액트에 대한 기본적인 것

  - Components 및 UI 생산
  - props 와 state
  - 리액트 앱 스타일
  - Hooks

- 고급 주제( 훨씬 더 심화적인 내용, 실제로 쓰는 앱들 쓰는 것)
  - Ref와 같은 Hooks
  - Context API & Redux
  - Http Requests & Custom Hooks
  - NextJS에 대해서
- 특정 개념 요약 및 리마인 등 , 개념 정리
  - 자바스크립트 기능 다시 리마인딩
  - ReactJS 요약

강의 방식

- 데모와 예시를 이용을 해서 한다
- 현실적인 프로젝트를 만든다
- 챌린지과 경험을 통한 과제

## 9. 리액트 프로젝트 생성하기: 브라우저 기반 및 로컬 개발

1. 로컬 개발
   - 리액트 프로그램을 로컬로 작업함
   - 프로그램에 필요한 개발 툴 및 프로그램 로컬에 설치
   - 옵션이나 내가 쓰고싶은 확장 프로그램을 쓸 수 있다
2. 브라우저 기반 개발
   - 코드샌드박스 같은 것
   - 파일 생성 및 파일을 설치를 안해 됨
   - 보고싶은 사람한테 공유가 가능함
   - 기존에 있는 것을 하는 것이라서 온전히 제어를 못함

## 10. 로컬에서 리액트 프로젝트 생성하기

- [Node.js 다운로드 사이트] (https://nodejs.org/ko)
- [VScode 다운로드 사이트] (https://code.visualstudio.com/)
- npm 다운로드 터미널 명령어 : npm install
- react 실행 명령어 : npm run start
- [React 생성 코드](https://create-react-app.dev/)
- [vite로 react 코드](https://vitejs.dev/guide/)

## 11. 코드샌드박스로 리액트 개발하기(로컬 설정 필요없음)

- [코드샌드박스로 실행](https://react.new/)

## 12.모듈 리소스

```
모듈 리소스

여러분의 코드를 제 코드와 비교해 볼 수 있습니다(예: 오류 찾기+수정하기).

코드 샌드박스 링크:

바닐라JS: https://codesandbox.io/s/vanilla-js-demo-6049kj

리액트를 사용하는 동일한 앱: https://codesandbox.io/s/react-vs-vanilla-demo-uc08fv

편집된 리액트 앱: https://codesandbox.io/s/first-react-app-zj5cx1

이 모듈에 대한 여러 코드 스냅샷은 아래Github 저장소에서 찾을 수 있습니다: https://github.com/academind/react-complete-guide-code/tree/01-getting-started

사용법은 위 링크 페이지에서 확인할 수 있습니다.

/code 폴더에 있는 스냅샷 중 하나를 선택하기만 하면 됩니다. 하위 폴더 이름은 이 코스 섹션의 강의 이름과 매치되도록 붙여진 것입니다.

섹션 슬라이드가 사용 가능한 경우 Github 리포지토리에서 찾을 수 있습니다.
```
