import { getPageTitle } from "../util";
import { Helmet } from "react-helmet";
import SubpageSection from "../components/SubpageSection";

function Clubs() {
  const pageTitle = getPageTitle("Clubs");
  const description =
    "Our SAVANTS BOOK AND FILM CLUBS are one of our most popular learning opportunities. Have you ever wanted an expert to walk you through the nuances of French New Wave cinema or German Expressionism? Are you looking for someone to help you curate a crash course in Classic Hollywood? Curious about Charles Dickens or Jane Austen but don’t know where to start? Or maybe you’re looking to brush up on classical Chinese poetry or the best of current Young Adult fiction? Want to debate The Book vs. The Movie Version of a story you love? We’ve got you.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savants.network/clubs" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://savants.network/images/alfred.png"
        />
      </Helmet>
      <div className="main-container">
        <SubpageSection
          title="Savants Book and Film Clubs"
          image="Alfred.png"
          imageAlt="Alfred Fried Portrait"
          path="/clubs"
          orientation="left"
          fullPage={true}
        >
          Our SAVANTS BOOK AND FILM CLUBS are one of our most popular learning
          opportunities. Have you ever wanted an expert to walk you through the
          nuances of French New Wave cinema or German Expressionism? Are you
          looking for someone to help you curate a crash course in Classic
          Hollywood? Curious about Charles Dickens or Jane Austen but don’t know
          where to start? Or maybe you’re looking to brush up on classical
          Chinese poetry or the best of current Young Adult fiction? Want to
          debate The Book vs. The Movie Version of a story you love? We’ve got
          you. Typically offered in a six-week format, in our book and film
          clubs, tutor and student create a tailor-made program designed to meet
          your interests and prior training. We frequently offer these
          experiences for families or groups of friends looking to take their
          next gathering to the next level. Even our basic, introductory courses
          go well beyond simple cultural contextualizing and biographical
          readings. They cover complex, technical aspects to help you discover
          the ¨tricks of the trade,¨ so that you can experience and enjoy new
          ways to further understand, appreciate and enjoy literature and film
          in a comprehensive, multifaceted way.
        </SubpageSection>
      </div>
    </>
  );
}

export default Clubs;
