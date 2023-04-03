import LearnButton from "./LearnButton";
import "./Subpage.css";
import { useRef, useState, useEffect } from "react";

export default function Subpage(props) {
  const { title, image, imageAlt, children, orientation } =
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

  const textContainer = (
    <div className="container">
      <img src={`images/${image}`} alt={imageAlt} id="text"/>
      <p>{children}</p>
    </div>
  );

  return (
    <div className={`subpage ${isShowing ? "show" : ""}`}>
      <div className="content" data-orientation={orientation}>
        <h2 className="subpage-title">{title}</h2>
        {textContainer}
        {/* {orientation === "left" ? textContainer : imageContainer} */}
      </div>
      <LearnButton
        path="/form"
        text="Are You Ready To Join Our Network?"
        id="join-button"
      />
      <span className="detect-visibility" ref={mark}></span>
    </div>
  );
}
