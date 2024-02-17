// Author: Siddhant Prateek Mahanayak: github.com/siddhantprateek

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Internals
import "./eventcard.styles.css";
import { EVENT1 } from "../../../assets";

interface IEvent {
  name: string;
  date: string;
  description: string;
}

const Eventcard = (props: IEvent) => {
  const { ref: eventRef, inView: eventView } = useInView({ threshold: 0 });

  const currentDate = new Date();

  const calculateTimeLeft = (date: string) => {
    let targetDate = new Date(date);
    let difference = targetDate.getTime() - currentDate.getTime();
    let daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

    return daysLeft;
  };

  const [daysLeft, setDaysLeft] = useState(calculateTimeLeft(props.date));

  let eventDate = new Date(props.date);
  const formatTargetDate = eventDate
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, " : ");

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft(calculateTimeLeft(props.date));
    }, 1000);

    return () => clearInterval(interval);
  }, [props.date, calculateTimeLeft]);

  return (
    <div className={`event-card ${eventView ? "trans-from-left" : ""}`}>
      <div className="event-detail-container" ref={eventRef}>
        <div className="left-event-details">
          <p className="purple">&#91; About Event &#93; </p>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <button className="book-event-btn">Book Now</button>
        </div>
        <img className="event-thumbnail" src={EVENT1} alt="" />
      </div>
      <div className="event-footer">
        <div className="event-left-footer">
          <h2>
            Count <span className="purple">Every Second</span> Until the Event
          </h2>
        </div>
        <div className="event-right-footer">
          <h1 className="formatted-event-date">{formatTargetDate}</h1>
          <p>{daysLeft} days left.</p>
        </div>
      </div>
    </div>
  );
};

export default Eventcard;
