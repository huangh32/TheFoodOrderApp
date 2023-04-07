import classes from "./Input.module.css";
import React from "react";
//{...props.input} is spread operatorto spread props.input.This ensures that all the key value pairs in this input object,
//which we receive on props input are added as props to input.
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
