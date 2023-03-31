import { getPageTitle } from "../util";
import { Helmet } from "react-helmet";
import SubpageSection from "../components/SubpageSection";

function Workshop() {
  const pageTitle = getPageTitle("Writing Workshops");
  const description =
    "Young, ambitious writers as well as seasoned professionals seek us out to deepen and develop their skills. Our SAVANTS WRITING WORKSHOPS provide high-quality feedback from accomplished authors. Whether you want to hone your professional writing skills or produce a manuscript of original poetry, our writing workshops offer all participants a challenging and rewarding experience.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savants.network/workshop" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://savants.network/images/erwin.png"
        />
      </Helmet>
      <div className="main-container">
        <SubpageSection
          title="Savants Writing Workshops"
          image="Erwin.png"
          imageAlt="Erwin Schrodinger Portrait"
          path="/workshop"
          orientation="right"
          fullPage={true}
        >
          Young, ambitious writers as well as seasoned professionals seek us out
          to deepen and develop their skills. Our SAVANTS WRITING WORKSHOPS
          provide high-quality feedback from accomplished authors. Whether you
          want to hone your professional writing skills or produce a manuscript
          of original poetry, our writing workshops offer all participants a
          challenging and rewarding experience. Our advanced seminars are
          typically taken by junior professionals who want to consult with
          senior SAVANTS tutors who are experts in these fields. As part of our
          classic SAVANTS programs, we offer these courses face-to-face in as
          many communities as we can.
        </SubpageSection>
      </div>
    </>
  );
}

export default Workshop;
