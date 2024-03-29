import { NavLink } from "react-router-dom";
import "./LearnButton.css";

function LearnButton(props) {
  const { text = "LEARN MORE", id, path } = props;
  return (
    <div className="learn-more" id={id}>
      <NavLink to={path} className="link">
        {text}
      </NavLink>
    </div>
  );
}

export default LearnButton;
