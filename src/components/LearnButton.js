import { NavLink } from "react-router-dom";
import "./LearnButton.css";

function LearnButton(props) {
  const { text = "LEARN MORE" } = props;
  return (
    <div className="learn-more">
      <img src="images/hand.jpg" alt="A Hand Pointing Right" />
      <NavLink to={props.path} className="link">
        {text}
      </NavLink>
    </div>
  );
}

export default LearnButton;
