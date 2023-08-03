import "./Card.css";

let Card = (props) => {
  let classs = ' Card '+props.className;
  return <div className={classs}>{props.children}</div>;
};

export default Card;
