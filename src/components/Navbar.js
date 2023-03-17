import "./Navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <ul className="list">
        <li className="item">
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/about" className="link">
            About Us
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/tutors" className="link">
            Tutors
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/virtual" className="link">
            Virtual
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/classic" className="link">
            Classic
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/seminars" className="link">
            Seminars
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/consulting" className="link">
            Consulting
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/conversations" className="link">
            Conversations
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/clubs" className="link">
            Clubs
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/workshop" className="link">
            Workshop
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
