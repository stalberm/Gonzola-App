import { getPageTitle } from "../util";
import { Helmet } from "react-helmet";
import Subpage from "../components/Subpage";

function Virtual() {
  const pageTitle = getPageTitle("Custom Virtual Classes");
  const description =
    "At SAVANTS we offer virtual custom courses in any conceivable subject virtually. Whatever your need, whatever your curiosity, we are here to provide a curated educational encounter.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savants.network/virtual" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://savants.network/images/gabriel.png"
        />
      </Helmet>
      <div className="main-container">
        <Subpage
          title="Savant Custom Courses"
          image="Gabriel.png"
          imageAlt="Gabriel Marquez Portrait"
          orientation="right"
          paragraphs={[
            <>
              At SAVANTS we offer virtual custom courses in any conceivable
              subject virtually. Whatever your need, whatever your curiosity, we
              are here to provide a curated educational encounter.
            </>,
            <>
              Across time zones and space, our tutors and students meet online
              to explore a variety of learning experiences. Our tutors create
              unique custom courses to students of all ages and all levels, from
              basic to advanced, from all four corners of the globe.
            </>,
            <>
              At SAVANTS, we understand that knowledges and learning styles are
              diverse. In addition to more traditional intellectual courses, our
              wellness-related initiatives are becoming ever more popular. And
              if you&apos;re looking for an untraditional approach to
              traditional topics, we can offer tutors trained in decolonizing
              methodologies, who approach learning from non-Western, indigenous,
              and community-based perspectives.
            </>,
            <>
              From anthropology, acarology or apiology to volcanology,
              xenobiology or zoology, at SAVANTS you will find a tutor to guide
              you into a learning adventure custom created for you.
            </>,
          ]}
        ></Subpage>
      </div>
    </>
  );
}

export default Virtual;
