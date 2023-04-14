import React from "react";
import "./header.scss";
import headerImg from "../../assets/header__img.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <img src={headerImg} alt="headerImg" className="header__img" />
        <div className="hero">
          <div className="hero__item">
            <h1 className="hero__title">PaymentOS for DAOs</h1>
            <p className="hero__subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className="hero__buttons">
              <button className="btn hero__btn">
                Open App
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.74994 3.75006V5.25006H11.6924L2.99994 13.9426L4.05744 15.0001L12.7499 6.30756V11.2501H14.2499V3.75006H6.74994Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="hero__btn btn__outline">Watch Demo</button>
            </div>
          </div>

          <div className="hero__stats-title">Lorem Ipsum is simply dummy</div>
          <div className="hero__stats">
            <div className="hero__stats-item">
              <div className="hero__stats-item--num">200+</div>
              <div className="hero__stats-item--text">DAO'S</div>
            </div>

            <div className="hero__stats-item">
              <div className="hero__stats-item--num">$35M+</div>
              <div className="hero__stats-item--text">DISBUrsed</div>
            </div>

            <div className="hero__stats-item">
              <div className="hero__stats-item--num">2500+</div>
              <div className="hero__stats-item--text">Contributors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
