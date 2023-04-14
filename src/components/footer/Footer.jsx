import React from "react";
import "./footer.scss";
import send from "../../assets/send.svg";
import link1 from "../../assets/youtube.svg";
import link2 from "../../assets/twitter2.svg";
import link3 from "../../assets/linkedin2.svg";
import link4 from "../../assets/discord2.svg";

const links = [link1, link2, link3, link4];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__item">
            <div className="footer__logo">Logo</div>
            <div className="footer__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="footer__copy">
              Made with love for DAOs{" "}
              <div className="footer__year">{year} Inc.</div>
            </div>
          </div>
          <div className="footer__item">
            <div className="footer__title">Subscribe to our newsletter</div>
            <form className="form">
              <label className="form__label">
                <input
                  type="email"
                  required
                  className="footer__input"
                  placeholder="Email Address"
                />
                <button type="submit" className="footer__submit">
                  <img src={send} alt="send" />
                </button>
              </label>
            </form>

            <div className="footer__text">
              We will send you updates on the latest news and features. No spam.
            </div>
            <div className="footer__links">
              {links.map((link, idx) => (
                <div className="footer__link" key={idx}>
                  <img src={link} alt="link" style={{ width: "25px" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
