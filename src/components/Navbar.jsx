import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!toggleRef.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Logo</span>
        <ul className="menu">
          <li className="menu__item">Blog</li>
          <li className="menu__item">Twitter</li>
          <li className="menu__item">Discord</li>
          <li className="menu__item">Open App</li>
        </ul>
      </div>
      <div className="nav-toggle">
        <RxHamburgerMenu onClick={() => setToggle(!toggle)} />
        {toggle && (
          <ul className="nav-toggle__items" ref={toggleRef}>
            <li className="nav-toggle__item">Blog</li>
            <li className="nav-toggle__item">Twitter</li>
            <li className="nav-toggle__item">Discord</li>
            <li className="nav-toggle__item">Open App</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
