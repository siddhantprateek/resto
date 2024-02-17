// Author: Siddhant Prateek Mahanayak: github.com/siddhantprateek

import React from "react";

// Internals
import "./awardbadge.styles.css";
import { IAward } from "../../../mirage/types";

const AwardBadge = (props: IAward) => {
  return (
    <div className="award-badge">
      <div className="blue-container">
        <h3>{props.organization}</h3>
      </div>
      <div className="red-container">
        <p>{props.award}</p>
      </div>
      <div className="award-year">
        <h3>{props.year}</h3>
      </div>
    </div>
  );
};

export default AwardBadge;
