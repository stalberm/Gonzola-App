import "./HomeLogo.css";

export default function HomeLogo() {
  return (
    <div className="home-logo">
      <div>
        <span className="welcome-blurb">Welcome to the</span>
        <div className="icon-container">
          <div className="left logo-half">
            <img src="/images/icon_half_left.svg" alt="left half of logo" />
          </div>
          <div className="logo-spacer"></div>
          <div className="right logo-half">
            <img src="/images/icon_half_right.svg" alt="right half of logo" />
          </div>
        </div>
        <h1>SAVANTS NETWORK</h1>
      </div>
    </div>
  );
}
