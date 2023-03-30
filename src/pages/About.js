import { getPageTitle } from "../util";
import Helmet from "react-helmet";

function About() {
  const pageTitle = getPageTitle("About Us");
  const description =
    "SAVANTS is an exclusive space where teaching professionals with the highest qualifications offer private tutoring services to extremely engaged students.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savants.network/about" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://savants.network/images/jose.png"
        />
      </Helmet>
      <div>
        <h1>About Us</h1>
        <p>
          SAVANTS is an exclusive space where teaching professionals with the
          highest qualifications offer private tutoring services to extremely
          engaged students. All our programs are unique, tailored specifically
          to your schedule, pace, and curiosities. We have an ever-growing
          number of face-to-face locations where our tutors and students can
          meet in person, as well as virtual/remote options for most of our
          custom courses. We offer small group classes on occasion.
        </p>
      </div>
    </>
  );
}

export default About;
