import { getPageTitle } from "../util";
import { Helmet } from "react-helmet";
import Subpage from "../components/Subpage";

function Classic() {
  const pageTitle = getPageTitle("Classic Classes");
  const description =
    "At SAVANTS, we stay true to our roots in the Arts and Humanities, and we pride ourselves in offering courses of incomparable quality in these areas. Our master classes in cinema, languages and literatures constitute our core, classic courses; they are the foundation of our offerings, and solidly establish our claim to excellence.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savants.network/classic" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://savants.network/images/marie.png"
        />
      </Helmet>
      <div className="main-container">
        <Subpage
          title="Savants Classic Courses"
          image="Marie.png"
          imageAlt="Marie Curie Portrait"
          orientation="left"
          paragraphs={[
            <>
              At SAVANTS, we stay true to our roots in the Arts and Humanities,
              and we pride ourselves in offering courses of incomparable quality
              in these areas. Our master classes in cinema, languages and
              literatures constitute our core, classic courses; they are the
              foundation of our offerings, and solidly establish our claim to
              excellence. We strive to make our core classic courses available
              in person- to-person format at as many locations as we can.
            </>,
          ]}
        ></Subpage>
      </div>
    </>
  );
}

export default Classic;
