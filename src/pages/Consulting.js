import { getPageTitle } from "../util";
import { Helmet } from "react-helmet";
import Subpage from "../components/Subpage";

function Consulting() {
  const pageTitle = getPageTitle("Consulting");
  const description =
    "Are you looking to make your next travel adventure more rich and pleasant, more intellectually and culturally informed? Or maybe you're a team leader looking to prepare your team for an important international or cross-cultural endeavor? Or perhaps you are, as many of our students are, simply curious about the world.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savants.network/consulting" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://savants.network/images/martin.png"
        />
      </Helmet>
      <div className="main-container">
        <Subpage
          title="Savants Cultural Consulting"
          image="Martin.png"
          imageAlt="Martin King Portrait"
          path="/consulting"
          orientation="left"
          fullPage={true}
          paragraphs={[
            <>
              Are you looking to make your next travel adventure more rich and
              pleasant, more intellectually and culturally informed? Or maybe
              you&apos;re a team leader looking to prepare your team for an
              important international or cross-cultural endeavor? Or perhaps you
              are, as many of our students are, simply curious about the world.
            </>,
            <>
              In SAVANTS Cultural Consulting programs, students immerse
              themselves in past and present political and cultural contexts of
              a country or region, focusing on history, socio-economics,
              politics, and cultural studies. These courses do more than prepare
              you to travel; we prepare you to confidently navigate a different
              culture, equipped with a diverse array of insights and
              perspectives on your destination. Our students leave fully
              prepared to face complex cultural situations as well as day-to-day
              interactions.
            </>,
            <>
              Whether you are packing up for a short, intensive visit or a
              permanent relocation, SAVANTS CULTURAL CONSULTING PROGRAMS will
              ensure you feel confident and savvy upon arrival (although we have
              yet to come up with a cure for jet lag). When offered in a
              professional, business mode, the final objective of our CULTURAL
              CONSULTING PROGRAMS may be an in-depth understanding of a
              particular foreign culture in situ, especially any
              business-related idiosyncrasies. Business organizations often
              contact us when interested in attracting and retaining local
              clientele belonging to, or with roots in, a foreign nationality.
              We understand that when a significant percentage of such a group
              constitute an important part of a given market, cross-cultural
              competency is an absolute must. SAVANTS tutors will offer all the
              tools to build solid bridges between your business and the
              targeted group.
            </>,
            <>
              SAVANTS tutors have strong bonds to the culture you&apos;re
              discovering; they are usually native to the culture or have close
              ties to it. Additionally, they have studied it in-depth in an
              academic context. In other words, SAVANTS tutors are not simply
              native informants; they are important, intellectually-engaged
              actors in the culture or country of study.
            </>,
          ]}
        ></Subpage>
      </div>
    </>
  );
}

export default Consulting;
