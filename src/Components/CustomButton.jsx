import React from "react";
import "../Styles/common.css";

const CustomButton = ({
  text,
  onClick,
  style = {},
}) => {
  return (
    <button
      className="btn rounded-pill d-flex align-items-center justify-content-center"
      style={{
        width: "165px",
        height: "44px",
        gap: "8px",
        borderRadius: "30px",
        background: "#191919",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "500",
        
        
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
