import React from "react";
import img from "./img/menu-bar.png";
import { Link } from "react-router-dom";
function Menu_bar() {
  return (
    <header>
      <div className="menu-bar">
        <img src={img} />
        <ul className="menu">
          <li>
            <Link className="menu-link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/series">
              SERIES
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/character">
              CHARACTER
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/notice">
              NOTICE
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/questions">
              Q&A
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Menu_bar;
