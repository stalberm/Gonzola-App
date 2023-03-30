import { getPageTitle } from "../util";
import { Helmet } from "react-helmet";

function Conversations() {
  const pageTitle = getPageTitle("Conversations");
  const description =
    "From intermediate to advanced, at SAVANTS, we offer conversation courses in almost any language to students of all ages almost anywhere on Earth. As much as we value online communications, we make every effort to offer such courses in a person-to-person mode.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://savants.network/conversations"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://savants.network/images/emily.png"
        />
      </Helmet>
      <div>
        <h1>Conversations</h1>
        <p>
          SAVANTS IN CONVERSATION
          <br />
          From intermediate to advanced, at SAVANTS, we offer conversation
          courses in almost any language to students of all ages almost anywhere
          on Earth. As much as we value online communications, we make every
          effort to offer such courses in a person-to-person mode. What makes
          our conversation courses unique and different, besides the
          incomparable quality of our tutors, is the opportunity to move beyond
          confident chit-chat to fully competency in reading and writing as
          well. Even when kept light, such skills constitute an important part
          of our courses. The overall confidence gained by our students leads to
          increased competencies in language fundamentals, which leads
          organically to more sophisticated and nuanced communicative techniques
          and tactics.
        </p>
      </div>
    </>
  );
}

export default Conversations;
