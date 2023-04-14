import "./NotFound.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getPageTitle } from "../util";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>
      <div className="not-found-page">
        <h1>404</h1>
        <p>
          Page not found. Return to <NavLink to="/">Home</NavLink>.
        </p>
      </div>
    </>
  );
}
