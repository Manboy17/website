import React from "react";
import "./backed.scss";
import icon1 from "../../assets/twitter-icon.svg";
import icon2 from "../../assets/linkedin-icon.svg";
import img1 from "../../assets/backed1.svg";
import img2 from "../../assets/backed2.svg";
import img3 from "../../assets/backed3.svg";
import img4 from "../../assets/backed4.svg";
import img5 from "../../assets/backed5.svg";
import img6 from "../../assets/backed6.svg";
import img7 from "../../assets/backed7.svg";
import img8 from "../../assets/backed8.svg";

const posts = [
  {
    id: 1,
    image: img1,
    text: "Dragonfly Capital",
    twitter: icon1,
    linkedin: icon2,
  },
  {
    id: 2,
    image: img2,
    text: "Leighton Cusack",
    twitter: icon1,
    linkedin: icon2,
    isWhite: true,
  },
  {
    id: 3,
    image: img3,
    text: "Linda Xie",
    twitter: icon1,
    linkedin: icon2,
  },
  {
    id: 4,
    image: img4,
    text: "Sandeep Nailwal",
    twitter: icon1,
    linkedin: icon2,
    isWhite: true,
  },
  {
    id: 5,
    image: img5,
    text: "Cooper Turley",
    twitter: icon1,
    linkedin: icon2,
    isWhite: true,
  },
  {
    id: 6,
    image: img6,
    text: "Consensys",
    twitter: icon1,
    linkedin: icon2,
  },
  {
    id: 7,
    image: img7,
    text: "Ryan Sean Adams",
    twitter: icon1,
    linkedin: icon2,
    isWhite: true,
  },
  {
    id: 8,
    image: img8,
    text: "Mike Dudas",
    twitter: icon1,
    linkedin: icon2,
  },
];

const Backed = () => {
  return (
    <div className="section__backed">
      <div className="container">
        <div className="section__title">We are Backed By</div>
        <div className="section__subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>

        <div className="backed">
          {posts.map((post) => (
            <div
              className={
                post.isWhite ? "backed__item white-bg" : "backed__item"
              }
              key={post.id}
            >
              <div className="backed__item-img">
                <img src={post.image} alt={post.image} />
              </div>
              <div className="backed__item-text">{post.text}</div>
              <div className="backed__item-icons">
                <div className="backed__item-icon">
                  <img src={post.twitter} alt="twitter" />
                </div>
                <div className="backed__item-icon">
                  <img src={post.linkedin} alt="linkedin" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backed;
