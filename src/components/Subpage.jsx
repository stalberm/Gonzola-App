import LearnButton from "./LearnButton";
import "./Subpage.css";

export default function Subpage(props) {
  const {
    title,
    image,
    imageAlt,
    paragraphs: paragraphTexts,
    orientation,
  } = props;

  const paragraphs = [];
  let i = 0;
  for (const text of paragraphTexts) {
    paragraphs.push(<p key={i++}>{text}</p>);
  }

  const textContainer = (
    <div className="container">
      <img src={`images/${image}`} alt={imageAlt} id="text" />
      {paragraphs}
    </div>
  );

  return (
    <div className="subpage">
      <div className="content" data-orientation={orientation}>
        <h2 className="subpage-title">{title}</h2>
        {textContainer}
      </div>
      <LearnButton
        path="/form"
        text="Are You Ready To Join Our Network?"
        id="join-button"
      />
      <span className="detect-visibility"></span>
    </div>
  );
}
