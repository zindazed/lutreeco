import React from "react";
import "./css/ParagraphInfo.css";

function ParagraphInfo({ children }) {
  return (
    <div className="paragraphinfo">
      <p>{children}</p>
    </div>
  );
}

export default ParagraphInfo;
