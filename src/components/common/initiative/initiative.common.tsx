// Author: Siddhant Prateek Mahanayak: github.com/siddhantprateek

import React from "react";
import { useInView } from "react-intersection-observer";

// Internals
import "./initiative.styles.css";
import { FARMFOOD, SEAFOOD, WASTEMGT } from "../../../assets";
import { IInitiative } from "../../../mirage/types";

const IMG_MAP: { [key: string]: string } = {
  "Farm-to-Table": FARMFOOD,
  "Waste Reduction": WASTEMGT,
  "Ocean-Friendly Seafood": SEAFOOD,
};

const Initiative = (props: IInitiative) => {
  const { ref: initRef, inView: initView } = useInView({ threshold: 0 });

  return (
    <div
      className={`initiative-card 
      ${
        props.name === "Waste Reduction"
          ? "display-flex"
          : "display-flex-reverse"
      }
    `}
      ref={initRef}
    >
      <div
        className={`left-init-content ${
          initView ? "trans-from-right-less" : ""
        }`}
      >
        <p className="purple">&#91; Initiative &#93; </p>
        <h1 className="init-title">{props.name}</h1>
        <p className="init-dp">{props.description}</p>
      </div>
      <div
        className={`right-init-content ${initView ? "trans-from-left" : ""}`}
      >
        <img className="init-img" src={IMG_MAP[props.name]} alt="" />
      </div>
    </div>
  );
};

export default Initiative;
