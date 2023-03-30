import { getPageTitle } from "../util";
import { Helmet } from "react-helmet";

function Workshop() {
  return <>
    <Helmet>
      <title>{getPageTitle("Writing Workshops")}</title>
    </Helmet>
    <div>
      <h1>Workshop</h1>
      <p>
        SAVANTS WRITING WORKSHOPS
        <br />
        Young, ambitious writers as well as seasoned professionals seek us out
        to deepen and develop their skills. Our SAVANTS WRITING WORKSHOPS
        provide high-quality feedback from accomplished authors. Whether you
        want to hone your professional writing skills or produce a manuscript of
        original poetry, our writing workshops offer all participants a
        challenging and rewarding experience. Our advanced seminars are
        typically taken by junior professionals who want to consult with senior
        SAVANTS tutors who are experts in these fields. As part of our classic
        SAVANTS programs, we offer these courses face-to-face in as many
        communities as we can.
      </p>
    </div>
  </>;
}

export default Workshop;
