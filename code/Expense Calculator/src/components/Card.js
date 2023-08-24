import "./Card.css";

function Card(props) {
  // Card 컴포넌트에 쓰이는 클래스를 가지고 온다
  // 기본 카드 스타일과 prop을 통해 전달된 추가 클래스 스타일을 결합하는 데 사용됩니다.
  const classes = "card " + props.className; // "card expense-item"
  // props.children
  // 열림 태그와 닫힘 태그 사이에 위치한 내용을 나타냅니다.
  return <div className={classes}>{props.children}</div>;
}
export default Card;
