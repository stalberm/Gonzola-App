import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showMobile, setShowMobile] = useState(false);
  const { pathname } = useLocation();
  document.body.dataset.modalOpen = showMobile;

  return (
    <div className="nav-bar">
      <button onClick={() => setShowMobile(!showMobile)}>
        <img src="logo192.png" alt="Savants Logo" />
        <GiHamburgerMenu id="menu" />
      </button>
      <ul
        className="list"
        id={showMobile ? "mobile" : ""}
        onClick={() => setShowMobile(false)}
      >
        <li className="item" data-current={pathname === "/"}>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li className="item" data-current={pathname === "/about"}>
          <NavLink to="/about" className="link">
            About Us
          </NavLink>
        </li>
        <li className="item" data-current={pathname === "/tutors"}>
          <NavLink to="/tutors" className="link">
            Tutors
          </NavLink>
        </li>
        <li className="item" data-current={pathname === "/virtual"}>
          <NavLink to="/virtual" className="link">
            Virtual
          </NavLink>
        </li>
        <li className="item" data-current={pathname === "/classic"}>
          <NavLink to="/classic" className="link">
            Classic
          </NavLink>
        </li>
        <li className="item" data-current={pathname === "/seminars"}>
          <NavLink to="/seminars" className="link">
            Seminars
          </NavLink>
        </li>
        <li className="item" data-current={pathname === "/consulting"}>
          <NavLink to="/consulting" className="link">
            Consulting
          </NavLink>
        </li>
        <li className="item" data-current={pathname === "/conversations"}>
          <NavLink to="/conversations" className="link">
            Conversations
          </NavLink>
        </li>
        <li className="item" data-current={pathname === "/clubs"}>
          <NavLink to="/clubs" className="link">
            Clubs
          </NavLink>
        </li>
        <li className="item" data-current={pathname === "/workshop"}>
          <NavLink to="/workshop" className="link">
            Workshop
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
