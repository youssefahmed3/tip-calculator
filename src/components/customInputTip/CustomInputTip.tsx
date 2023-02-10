import React from "react";
import "./style.scss";

interface inputBoxProps {
  type?: "number";
  calVal: React.ChangeEventHandler<HTMLInputElement>;
}

function CustominputTip(props: inputBoxProps) {
  return (
      <input
        type={props.type}
        className="input-field"
        placeholder="Custom"
        onChange={props.calVal}
      />
  );
}

export default CustominputTip;
