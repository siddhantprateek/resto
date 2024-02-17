// Author: Siddhant Prateek Mahanayak: github.com/siddhantprateek

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Internals
import "./about.styles.css";
import {
  CHEF,
  MOCK1,
  MOCK2,
  MOCK3,
  MOCK4,
  MOCK5,
  RES_MOCK1,
} from "../../assets";
import { Reservations } from "../../components";

interface IAmbience {
  description: string;
}

interface IAmb {
  ambience: IAmbience;
}

interface IChef {
  name: string;
  bio: string;
  signature_dish: string;
}

const About = () => {
  const [ambience, setAmbience] = useState<IAmb>();
  const [chef, setChef] = useState<IChef>();

  const { ref: barRef, inView: barView } = useInView({ threshold: 0 });
  const { ref: imgRef, inView: imgView } = useInView({ threshold: 0 });
  const { ref: ambRef, inView: ambView } = useInView({ threshold: 0 });
  const { ref: aboutRef, inView: aboutView } = useInView({ threshold: 0 });

  useEffect(() => {
    fetch("https://restaurant.service/api/ambience")
      .then((res) => res.json())
      .then((json) => setAmbience(json));
  }, []);

  useEffect(() => {
    fetch("https://restaurant.service/api/chef")
      .then((res) => res.json())
      .then((json) => setChef(json.chef));
  }, []);

  return (
    <div className="about-page">
      <div className="chef-dp">
        <div className="chef-v1-header">
          <h1>Our Chef</h1>
        </div>
        <div className="chef-detials-container">
          <div className="chef-details">
            <div className="chef-custom-img">
              <div
                className={`yellow-bar ${barView ? "trans-from-left" : ""}`}
              />
              <img
                className={`chef-img ${barView ? "trans-from-buttom" : ""}`}
                src={CHEF}
                alt=""
                ref={barRef}
              />
              <div
                className={`blue-bar ${barView ? "trans-from-right-less" : ""}`}
              />
            </div>
            <div className="chef-bio-details">
              <h2>{chef?.name}</h2>
              <p>{chef?.bio}</p>
              <div className="signature">
                <p className="signature-dish">{chef?.signature_dish}</p>
                <p className="bold">Signature Dish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-page-header" ref={aboutRef}>
        <h1 className={aboutView ? "trans-from-right-less" : ""}>
          About Us <span className="red-dot">.</span>
        </h1>
        <div className="center-sub-about-header">
          <hr />
        </div>
        <div
          className={`resto-content-container ${
            ambView ? "trans-from-left" : ""
          }`}
        >
          <p className="about-resto-content">
            {ambience?.ambience.description}
          </p>
        </div>
        <div
          className={`hotel-image ${ambView ? "trans-from-right-less" : ""}`}
          style={{
            background: `url("${RES_MOCK1}")`,
            backgroundSize: "cover",
          }}
          ref={ambRef}
        />
      </div>

      <div className="restaurant-gallery">
        <h1 className="restaurant-gallery-title">Gallery</h1>

        <div className="gallery-images" ref={imgRef}>
          <div className={imgView ? "trans-from-left" : ""}>
            <img className="mock-img" src={MOCK3} alt="" />
          </div>
          <img className="mock-img" src={MOCK1} alt="" />
          <img className="mock-img" src={MOCK2} alt="" />
          <img className="mock-img" src={MOCK5} alt="" />
          <div className={imgView ? "trans-from-right-less" : ""}>
            <img className="mock-img" src={MOCK4} alt="" />
          </div>
        </div>
      </div>
      <div className="location-container">
        <div className="location-header">
          <h1>Where We are? </h1>
        </div>
        <p className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1889750.364140218!2d-76.67179198586234!3d40.173483527201874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sin!4v1701598188956!5m2!1sen!2sin"
            width="100%"
            style={{ borderRadius: "20px" }}
            height="350"
            loading="lazy"
          />
        </p>
      </div>
      <Reservations />
    </div>
  );
};

export default About;
