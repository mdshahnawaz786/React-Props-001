import React from "react";
import "./Comp.css";

const Comp = (props) => {
  return (
    <>
      <div className="box">
        <div
          style={{ backgroundColor: props.colorCode }}
          className="upper_div"
        ></div>
        <div style={{ boxShadow: props.boxShadow }} className="lower_div">
          <h4>{props.colorCode}</h4>
          <p style={{ color: props.colorCode, fontWeight: "bold" }}>
            {props.colorName}
          </p>
        </div>
      </div>
    </>
  );
};

export default Comp;
