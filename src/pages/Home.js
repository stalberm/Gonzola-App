import Helmet from "react-helmet";
import HomeLogo from "../components/HomeLogo";
import LearnButton from "../components/LearnButton";
import SubpageSection from "../components/SubpageSection";
import { getPageTitle } from "../util";
import "./Home.css";

function Home() {
  document.body.style.overflowX = "hidden";
  setTimeout(() => {
    document.body.style.overflowX = "";
  }, 1000);
  const pageTitle = getPageTitle();
  const description =
    "SAVANTS is an exclusive space where teaching professionals with the highest qualifications offer private tutoring services to extremely engaged students.";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savants.network/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://savants.network/logo1024.png"
        />
      </Helmet>
      <div>
        <div className="main-container">
          <HomeLogo />
          <SubpageSection
            title="About Us"
            image="Jose.png"
            imageAlt="Jose Echegaray Portrait"
            path="/about"
            orientation="right"
          >
            <strong> SAVANTS </strong> is an exclusive space where teaching
            professionals with the highest qualifications offer private tutoring
            services to extremely engaged students. All our programs are unique,
            tailored specifically to your schedule, pace, and curiosities. We
            have an ever-growing number of face-to-face locations where our
            tutors and students can meet in person, as well as virtual/remote
            options for most of our custom courses. We offer small group classes
            on occasion.
          </SubpageSection>
          <SubpageSection
            title="Savant Tutors"
            image="Thomas.png"
            imageAlt="Thomas Mann Portrait"
            path="/tutors"
            orientation="left"
          >
            Our tutors are drawn from an exclusive group of teaching
            professionals from around the world. Our entry requirements are
            extremely strict; we source our colleagues from the most prestigious
            institutions. <br /> Our tutors must have at least one degree from
            one of the top ten universities in the world (according to Shanghai
            school rankings) and/or are part of the top ten academic programs in
            their discipline. They are highly esteemed in their fields of
            expertise everywhere. <br /> But that’s not all. In addition to
            notable degrees, our tutors are well-respected teachers with proven
            classroom excellence. We use PROT (peer-review-of-teaching)
            evaluations as well as student evaluations to vet our tutors. Most
            of them have won multiple teaching awards.
          </SubpageSection>
          <SubpageSection
            title="Savant Custom Courses"
            image="Gabriel.png"
            imageAlt="Gabriel Marquez Portrait"
            path="/virtual"
            orientation="right"
          >
            At <strong> SAVANTS </strong> we offer virtual custom courses in any
            conceivable subject virtually. Whatever your need, whatever your
            curiosity, we are here to provide a curated educational encounter.
            Across time zones and space, our tutors and students meet online to
            explore a variety of learning experiences. Our tutors create unique
            custom courses to students of all ages and all levels, from basic to
            advanced, from all four corners of the globe.
          </SubpageSection>
          <SubpageSection
            title="Savant Classic Courses"
            image="Marie.png"
            imageAlt="Marie Curie Portrait"
            path="/classic"
            orientation="left"
          >
            At <strong> SAVANTS </strong>, we stay true to our roots in the Arts
            and Humanities, and we pride ourselves in offering courses of
            incomparable quality in these areas. Our master classes in cinema,
            languages and literatures constitute our core, classic courses; they
            are the foundation of our offerings, and solidly establish our claim
            to excellence. We strive to make our core classic courses available
            in person- to-person format at as many locations as we can.
          </SubpageSection>
          <SubpageSection
            title="Professional Savants Seminars"
            image="Severo.png"
            imageAlt="Severo Ochoa Portrait"
            path="/seminars"
            orientation="right"
          >
            The professional <strong> SAVANTS </strong> seminars are designed to
            provide actual, accountable results and real value at a fast-paced
            rhythm. Our professional students have excelled in their careers so
            far, but now need to more fully master a particular subject (usually
            a foreign language, but sometimes a specific aspect of business).
            <br /> Typically sponsored by companies directly, the
            <strong> SAVANTS SEMINARS </strong> are always custom built around
            the particular needs students or small groups. These courses engage
            business-related issues and practices from the very first meeting.
          </SubpageSection>
          <SubpageSection
            title="Savants Cultural Consulting"
            image="Martin.png"
            imageAlt="Martin King Portrait"
            path="/consulting"
            orientation="left"
          >
            Are you looking to make your next travel adventure more rich and
            pleasant, more intellectually and culturally informed? Or maybe
            you&apos;re a team leader looking to prepare your team for an
            important international or cross-cultural endeavor? Or perhaps you
            are, as many of our students are, simply curious about the world.
          </SubpageSection>
          <SubpageSection
            title="Savants in Conversation"
            image="Emily.png"
            imageAlt="Emily Balch Portrait"
            path="/conversations"
            orientation="right"
          >
            From intermediate to advanced, at <strong> SAVANTS </strong>, we
            offer conversation courses in almost any language to students of all
            ages almost anywhere on Earth. As much as we value online
            communications, we make every effort to offer such courses in a
            person-to-person mode.
          </SubpageSection>
          <SubpageSection
            title="Savants Book and Film Clubs"
            image="Alfred.png"
            imageAlt="Alfred Fried Portrait"
            path="/clubs"
            orientation="left"
          >
            Our <strong> SAVANTS </strong> BOOK AND FILM CLUBS are one of our
            most popular learning opportunities. <br />
            Have you ever wanted an expert to walk you through the nuances of
            French New Wave cinema or German Expressionism? Are you looking for
            someone to help you curate a crash course in Classic Hollywood?
            Curious about Charles Dickens or Jane Austen but don’t know where to
            start? Or maybe you’re looking to brush up on classical Chinese
            poetry or the best of current Young Adult fiction? Want to debate
            The Book vs. The Movie Version of a story you love? We’ve got you.
            <br /> Typically offered in a six-week format, in our book and film
            clubs, tutor and student create a tailor-made program designed to
            meet your interests and prior training. We frequently offer these
            experiences for families or groups of friends looking to take their
            next gathering to the next level.
          </SubpageSection>
          <SubpageSection
            title="Savants Writing Workshops"
            image="Erwin.png"
            imageAlt="Erwin Schrodinger Portrait"
            path="/workshop"
            orientation="right"
          >
            Young, ambitious writers as well as seasoned professionals seek us
            out to deepen and develop their skills. Our
            <strong> SAVANTS </strong> WRITING WORKSHOPS provide high-quality
            feedback from accomplished authors. Whether you want to hone your
            professional writing skills or produce a manuscript of original
            poetry, our writing workshops offer all participants a challenging
            and rewarding experience.
          </SubpageSection>
          <LearnButton
            path="/form"
            text="Are You Ready To Join Our Network?"
            id="join-button"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
