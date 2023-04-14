import React from "react";
import "./special.scss";
import special1 from "../../assets/special1.svg";
import special2 from "../../assets/special2.svg";
import special3 from "../../assets/special3.svg";
import special4 from "../../assets/special4.svg";

const Special = () => {
  return (
    <div className="section__special">
      <div className="container">
        <div className="special">
          <div className="special__item">
            <h3 className="section__title">What makes us special 🔥</h3>
            <p className="section__subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="special__item">
            <div className="special__item-img">
              <img src={special1} alt="special1" />
            </div>
            <div className="special__item-title">Step 1</div>
            <div className="special__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>

          <div className="special__item">
            <div className="special__item-img">
              <img src={special2} alt="special1" />
            </div>
            <div className="special__item-title">Step 2</div>
            <div className="special__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>

          <div className="special__item">
            <div className="special__item-img">
              <img src={special3} alt="special1" />
            </div>
            <div className="special__item-title">Step 2</div>
            <div className="special__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>

          <div className="special__item">
            <div className="special__item-img">
              <img src={special4} alt="special1" />
            </div>
            <div className="special__item-title">Step 4</div>
            <div className="special__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>

          <div className="special__item">
            <div className="special__item-img">
              <img src={special1} alt="special1" />
            </div>
            <div className="special__item-title">Step 1</div>
            <div className="special__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
