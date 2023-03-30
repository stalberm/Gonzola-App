import { getPageTitle } from "../util";
import { Helmet } from "react-helmet";

function Virtual() {
  return <>
    <Helmet>
      <title>{getPageTitle("Custom Virtual Classes")}</title>
    </Helmet>
    <div>
      <h1>Custom Virtual Classes</h1>
      <p>
        SAVANTS CUSTOM COURSES
        <br />
        At SAVANTS we offer virtual custom courses in any conceivable subject
        virtually. Whatever your need, whatever your curiosity, we are here to
        provide a curated educational encounter. Across time zones and space,
        our tutors and students meet online to explore a variety of learning
        experiences. Our tutors create unique custom courses to students of all
        ages and all levels, from basic to advanced, from all four corners of
        the globe. At SAVANTS, we understand that knowledges and learning styles
        are diverse. In addition to more traditional intellectual courses, our
        wellness-related initiatives are becoming ever more popular. And if
        you're looking for an untraditional approach to traditional topics, we
        can offer tutors trained in decolonizing methodologies, who approach
        learning from non-Western, indigenous, and community-based perspectives.
        From anthropology, acarology or apiology to volcanology, xenobiology or
        zoology, at SAVANTS you will find a tutor to guide you into a learning
        adventure custom created for you.
      </p>
    </div>
  </>;
}

export default Virtual;
