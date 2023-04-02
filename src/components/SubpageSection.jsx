import LearnButton from "./LearnButton";
import "./SubpageSection.css";
import { useRef, useState, useEffect } from "react";

export default function SubpageSection(props) {
  const { title, image, imageAlt, children, orientation, path, fullPage } =
    props;
  const mark = useRef(null);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isShowing) return;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsShowing(true);
      }
    });
    const element = mark?.current;
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  });

  const imageContainer = (
    <div className="image-container">
      <img src={`images/${image}`} alt={imageAlt} />
    </div>
  );
  const textContainer = (
    <div className="text-container">
      <p>{children}</p>
      {!fullPage && <LearnButton path={path} />}
    </div>
  );

  return (
    <div className={`subpage-section ${isShowing ? "show" : ""}`}>
      <div className="content" data-orientation={orientation}>
        <h2 className="subpage-title">{title}</h2>
        {orientation === "left" ? imageContainer : textContainer}
        {orientation === "left" ? textContainer : imageContainer}
      </div>
      {fullPage && (
        <LearnButton
          path="/form"
          text="Are You Ready To Join Our Network?"
          id="join-button"
        />
      )}
      <span className="detect-visibility" ref={mark}></span>
    </div>
  );
}
