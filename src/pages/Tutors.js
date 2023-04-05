import { getPageTitle } from "../util";
import { Helmet } from "react-helmet";
import Subpage from "../components/Subpage";

function Tutors() {
  const pageTitle = getPageTitle("Tutors");
  const description =
    "Our tutors are drawn from an exclusive group of teaching professionals from around the world. Our entry requirements are extremely strict; we source our colleagues from the most prestigious institutions.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savants.network/tutors" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://savants.network/images/thomas.png"
        />
      </Helmet>
      <div className="main-container">
        <Subpage
          title="Savant Tutors"
          image="Thomas.png"
          imageAlt="Thomas Mann Portrait"
          orientation="left"
          paragraphs={[
            <>
              Our tutors are drawn from an exclusive group of teaching
              professionals from around the world. Our entry requirements are
              extremely strict; we source our colleagues from the most
              prestigious institutions. Our tutors must have at least one degree
              from one of the top ten universities in the world (according to
              Shanghai school rankings) and/or are part of the top ten academic
              programs in their discipline. They are highly esteemed in their
              fields of expertise everywhere. But that&apos;s not all. In
              addition to notable degrees, our tutors are well-respected
              teachers with proven classroom excellence. We use PROT
              (peer-review-of-teaching) evaluations as well as student
              evaluations to vet our tutors. Most of them have won multiple
              teaching awards.
            </>,
            <>
              Distinguished executives from top companies and world renowned,
              award-winning professionals in artistic and creative fields are
              part of our network as well. Their wealth of knowledge and their
              generous desire to share their experiences constitute the pillars
              of our network.
            </>,
            <>
              Short and simple: our pledge is to put the very best teachers in
              the world at your service, for a unique and exclusive tutoring
              experience. SAVANTS STUDENTS
            </>,
            <>
              <strong>SAVANTS STUDENTS</strong>
              <br />
              Like our faculty, our students are curious, enthusiastic, and
              committed. They are ethically-engaged citizens of the world
              looking to broaden their knowledge without the hassle and cost of
              matriculation. They are kids and retirees, full-time parents and
              business professionals. They are military service people and
              ordinary folk who have a thirst for new knowledge and a passion to
              explore new avenues of wisdom.
            </>,
          ]}
        ></Subpage>
      </div>
    </>
  );
}

export default Tutors;
