import HomeLogo from "../components/HomeLogo";
import LearnButton from "../components/LearnButton";
import { setPageTitle } from "../util";
import './Home.css'

function Home() {
  setPageTitle();
  return (
    <div>
      <HomeLogo></HomeLogo>
      <div className="main-container">
        <h1>SAVANTS NETWORK</h1>
        <div className="subpage-section">
          <div className="content">
            <div className="text-container">
              <p>
                <strong>SAVANTS</strong> is an exclusive space where teaching professionals with the
                highest qualifications offer private tutoring services to extremely
                engaged students. All our programs are unique, tailored specifically to
                your schedule, pace, and curiosities. We have an ever-growing number of
                face-to-face locations where our tutors and students can meet in person,
                as well as virtual/remote options for most of our custom courses. We
                offer small group classes on occasion.
              </p>
              <LearnButton path="/about" />
            </div>
            <div className="image-container">
              <img src="images/Jose.png" alt="Jose Echegaray Portrait"/>  
            </div>     
          </div>
        </div>
        <div className="subpage-section">
          <div className="content">
            <div className="image-container">
              <img src="images/Thomas.png" alt="Thomas Mann Portrait"/>  
            </div>  
            <div className="text-container">
              <p>
                <strong>SAVANT TUTORS</strong><br/>Our tutors are drawn from an exclusive group of teaching
                professionals from around the world. Our entry requirements are
                extremely strict; we source our colleagues from the most prestigious
                institutions. Our tutors must have at least one degree from one of the
                top ten universities in the world (according to Shanghai school
                rankings) and/or are part of the top ten academic programs in their
                discipline. They are highly esteemed in their fields of expertise
                everywhere. But that’s not all. In addition to notable degrees, our
                tutors are well-respected teachers with proven classroom excellence. We
                use PROT (peer-review-of-teaching) evaluations as well as student
                evaluations to vet our tutors. Most of them have won multiple teaching
                awards.
              </p>
              <LearnButton path="/tutors" />
            </div>   
          </div>
        </div>
        <div className="subpage-section">
          <div className="content">
            <div className="text-container">
              <p>
                <strong>SAVANTS CUSTOM COURSES</strong><br/>At SAVANTS we offer virtual custom courses in any
                conceivable subject virtually. Whatever your need, whatever your
                curiosity, we are here to provide a curated educational encounter.
                Across time zones and space, our tutors and students meet online to
                explore a variety of learning experiences. Our tutors create unique
                custom courses to students of all ages and all levels, from basic to
                advanced, from all four corners of the globe.
              </p>
              <LearnButton path="/virtual" />
            </div>   
            <div className="image-container">
              <img src="images/Gabriel.png" alt="Gabriel Marquez Portrait"/>  
            </div>  
          </div>
        </div>
        <div className="subpage-section">
          <div className="content">
            <div className="image-container">
              <img src="images/Marie.png" alt="Marie Curie Portrait"/>  
            </div>  
            <div className="text-container">
              <p>
                <strong>PROFESSIONAL SAVANTS SEMINARS</strong><br/>At SAVANTS, we stay true to our roots in the
                Arts and Humanities, and we pride ourselves in offering courses of
                incomparable quality in these areas. Our master classes in cinema,
                languages and literatures constitute our core, classic courses; they are
                the foundation of our offerings, and solidly establish our claim to
                excellence. We strive to make our core classic courses available in
                person- to-person format at as many locations as we can.
              </p>
              <LearnButton path="/classic" />
            </div>   
          </div>
        </div>
        <div className="subpage-section">
          <div className="content">
            <div className="text-container">
              <p>
                <strong>PROFESSIONAL SAVANTS SEMINARS</strong><br/>The professional SAVANTS seminars are
                designed to provide actual, accountable results and real value at a
                fast-paced rhythm. Our professional students have excelled in their
                careers so far, but now need to more fully master a particular subject
                (usually a foreign language, but sometimes a specific aspect of
                business). Typically sponsored by companies directly, the SAVANTS
                SEMINARS are always custom built around the particular needs students or
                small groups. These courses engage business-related issues and practices
                from the very first meeting.
              </p>
              <LearnButton path="/seminars" />
            </div>   
            <div className="image-container">
              <img src="images/Severo.png" alt="Severo Ochoa Portrait"/>  
            </div>  
          </div>
        </div>
        <div className="subpage-section">
          <div className="content">
            <div className="image-container">
              <img src="images/Martin.png" alt="Martin King Portrait"/>  
            </div>  
            <div className="text-container">
              <p>
                <strong>SAVANTS CULTURAL CONSULTING</strong><br/>Are you looking to make your next travel
                adventure more rich and pleasant, more intellectually and culturally
                informed? Or maybe you're a team leader looking to prepare your team for
                an important international or cross-cultural endeavor? Or perhaps you
                are, as many of our students are, simply curious about the world.
              </p>
              <LearnButton path="/consulting" />
            </div>   
          </div>
        </div>
        <div className="subpage-section">
          <div className="content">
            <div className="text-container">
              <p>
                <strong>SAVANTS IN CONVERSATION</strong> from intermediate to advanced, at SAVANTS, we
                offer conversation courses in almost any language to students of all
                ages almost anywhere on Earth. As much as we value online
                communications, we make every effort to offer such courses in a
                person-to-person mode.
              </p>
              <LearnButton path="/conversations" />
            </div>   
            <div className="image-container">
              <img src="images/Emily.png" alt="Emily Balch Portrait"/>  
            </div>  
          </div>
        </div>
        <div className="subpage-section">
          <div className="content">
            <div className="image-container">
              <img src="images/Alfred.png" alt="Alfred Fried Portrait"/>  
            </div>  
            <div className="text-container">
              <p>
                <strong>SAVANTS BOOK AND FILM CLUBS</strong><br/>Our SAVANTS BOOK AND FILM CLUBS are one of
                our most popular learning opportunities. Have you ever wanted an expert
                to walk you through the nuances of French New Wave cinema or German
                Expressionism? Are you looking for someone to help you curate a crash
                course in Classic Hollywood? Curious about Charles Dickens or Jane
                Austen but don’t know where to start? Or maybe you’re looking to brush
                up on classical Chinese poetry or the best of current Young Adult
                fiction? Want to debate The Book vs. The Movie Version of a story you
                love? We’ve got you. Typically offered in a six-week format, in our book
                and film clubs, tutor and student create a tailor-made program designed
                to meet your interests and prior training. We frequently offer these
                experiences for families or groups of friends looking to take their next
                gathering to the next level.
              </p>
              <LearnButton path="/clubs" />
            </div>   
          </div>
        </div>
        <div className="subpage-section">
          <div className="content">
            <div className="text-container">
              <p>
                <strong>SAVANTS WRITING WORKSHOPS</strong><br/>Young, ambitious writers as well as seasoned
                professionals seek us out to deepen and develop their skills. Our
                SAVANTS WRITING WORKSHOPS provide high-quality feedback from
                accomplished authors. Whether you want to hone your professional writing
                skills or produce a manuscript of original poetry, our writing workshops
                offer all participants a challenging and rewarding experience.
              </p>
              <LearnButton path="/workshop" />
            </div>   
            <div className="image-container">
              <img src="images/Erwin.png" alt="Erwin Schrodinger Portrait"/>  
            </div>  
          </div>
        </div>
        <LearnButton text="Are You Ready To Join Our Network?" id="join-button"/>
      </div>
    </div>
  );
}

export default Home;
