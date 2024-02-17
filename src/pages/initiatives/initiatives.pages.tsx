// Author: Siddhant Prateek Mahanayak: github.com/siddhantprateek

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
// Internals
import "./initiatives.styles.css";
import { Initiative } from "../../components/common";
import { createMockServer } from "../../mirage/createMockServer";
import { IInitiative } from "../../mirage/types";

createMockServer();

const Initiatives = () => {
  const { ref: susHeaderRef, inView: susHeaderView } = useInView({
    threshold: 0,
  });
  const [initiate, setInitiatives] = useState<IInitiative[]>();
  useEffect(() => {
    fetch("https://restaurant.service/api/initiatives")
      .then((res) => res.json())
      .then((json) => setInitiatives(json.initiatives));
  }, []);
  return (
    <div className="initiative-page">
      <div className="initative-header" ref={susHeaderRef}>
        <h1 className={susHeaderView ? "trans-from-buttom" : ""}>
          Our Sustainable Initiatives
        </h1>
      </div>

      <div className="listed-initiatives">
        {initiate?.map((init: IInitiative) => (
          <Initiative
            key={init.name}
            name={init.name}
            description={init.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Initiatives;
