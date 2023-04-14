import React from "react";
import "./trusted.scss";
import img1 from "../../assets/trusted1.svg";
import img2 from "../../assets/trusted2.svg";
import img3 from "../../assets/trusted3.svg";
import img4 from "../../assets/trusted4.svg";
import img5 from "../../assets/trusted5.svg";
import img6 from "../../assets/trusted6.svg";
import img7 from "../../assets/trusted7.svg";
import img8 from "../../assets/trusted8.svg";
import img9 from "../../assets/trusted9.svg";
import img10 from "../../assets/trusted10.svg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Trusted = () => {
  return (
    <div className="section__trusted">
      <div className="container">
        <div className="section__title trusted__title">
          Trusted by DAOs around the world
        </div>

        <div className="trusted">
          {images.map((image, idx) => (
            <div className="trusted__item" key={idx}>
              <img src={image} alt={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
