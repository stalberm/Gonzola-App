import "./NotFound.css";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>
        Page not found. Return to <NavLink to="/">Home</NavLink>.
      </p>
    </div>
  );
}
