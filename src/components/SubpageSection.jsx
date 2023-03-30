import LearnButton from "./LearnButton";
import "./SubpageSection.css";

export default function SubpageSection(props) {
  const { title, image, imageAlt, children, orientation, path } = props;

  const imageContainer = (
    <div className="image-container">
      <img src={`images/${image}`} alt={imageAlt} />
    </div>
  );
  const textContainer = (
    <div className="text-container">
      <h2>{title}</h2>
      <p>{children}</p>
      <LearnButton path={path} />
    </div>
  );

  return (
    <div className="subpage-section">
      <div className="content">
        {orientation === "left" ? imageContainer : textContainer}
        {orientation === "left" ? textContainer : imageContainer}
      </div>
    </div>
  );
}
