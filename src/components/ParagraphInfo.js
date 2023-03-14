import React from "react";
import "./css/ParagraphInfo.css";

function ParagraphInfo({ children, color }) {
  return (
    <div className="paragraphinfo me-1">
      <p style={{ color: color }} >{children}</p>
    </div>
  );
}

export default ParagraphInfo;
