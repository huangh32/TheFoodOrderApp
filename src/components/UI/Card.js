import classes from "./Card.module.css";
//which then wraps props children so that whatever is passed
//between the opening and closing tag of the Card component
//is in the end used inside of Card.
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
