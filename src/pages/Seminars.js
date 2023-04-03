import { getPageTitle } from "../util";
import { Helmet } from "react-helmet";
import Subpage from "../components/Subpage";

function Seminars() {
  const pageTitle = getPageTitle("Professional Seminars");
  const description =
    "The professional SAVANTS seminars are designed to provide actual, accountable results and real value at a fast-paced rhythm. Our professional students have excelled in their careers so far, but now need to more fully master a particular subject (usually a foreign language, but sometimes a specific aspect of business). Typically sponsored by companies directly, the SAVANTS SEMINARS are always custom built around the particular needs students or small groups.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savants.network/seminars" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://savants.network/images/severo.png"
        />
      </Helmet>
      <div className="main-container">
        <Subpage
          title="Professional Savants Seminars"
          image="Severo.png"
          imageAlt="Severo Ochoa Portrait"
          orientation="right"
          paragraphs={[
            <>
              The professional SAVANTS seminars are designed to provide actual,
              accountable results and real value at a fast-paced rhythm.
            </>,
            <>
              Our
              professional students have excelled in their careers so far, but now
              need to more fully master a particular subject (usually a foreign
              language, but sometimes a specific aspect of business). Typically
              sponsored by companies directly, the SAVANTS SEMINARS are always
              custom built around the particular needs students or small groups.
              These courses engage business-related issues and practices from the
              very first meeting.
            </>,
            <>
              It&apos;s one thing to leisurely flip through a
              language app while on vacation. But clearly and effortlessly
              communicating with clients in a foreign language during an important
              business exchange is something else entirely.
            </>,
            <>
              From correctly
              comprehending casual conversations to discussing multi-million-dollar
              contracts, an international professional&apos;s foreign language
              expertise must also include a confident cross-cultural capacity. A
              fully competent toolbox of communicative and culturally-informed
              tactics are now crucial to brokering successful transactions. Our
              trained tutors can help you navigate not only grammar and vocabulary
              but also the cultural insights you need to successfully operate in a
              global context.
            </>,
            <>
              Beyond strengthening language proficiencies, other
              students within this professional category may want to brush up on
              their marketing, sales, or accounting skills. These students often
              come to us after taking on a higher position within their
              organizations, which requires increased expertise in a particular
              area.
            </>,
            <>
              At SAVANTS we not only manage to customize our learning programs
              to your specific professional learning need, but we also adapt to your
              busy schedules as well, beginning with your first master class.
            </>,]}
        ></Subpage>
      </div>
    </>
  );
}

export default Seminars;
