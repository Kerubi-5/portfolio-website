import { UilAward } from "@iconscout/react-unicons";
import { UilHtml5 } from "@iconscout/react-unicons";
import { UilFire } from "@iconscout/react-unicons";
import Meta from "../components/Meta";

const About = () => {
  return (
    <>
      <Meta
        title="John Kim A. Querobines | Website Portfolio"
        desc="I am an aspiring web developer who loves to create web designs and learn about the different web technologies and Im on the road to look for jobs that have like minded experts like me."
        keywords={[
          "John Kim A. Querobines, Website, Portfolio, Web Developer, KK",
        ]}
        image="/assets/jkim.png"
        canonical="https://kkwebdev.xyz/about"
      />
      <section className="about section" id="about">
        <span className="section__subtitle">Introduction</span>
        <h2 className="section__title">About me</h2>
        <div className="about__container container grid">
          <div className="about__data">
            <div className="about__info">
              <div className="about__box">
                <UilAward className="about__icon" />
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">
                  Bachelors in Information Technology
                </span>
              </div>
              <div className="about__box">
                <UilHtml5 className="about__icon" />
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">15+ Web Projects</span>
              </div>
              <div className="about__box">
                <UilFire className="about__icon" />
                <h3 className="about__title">Passion</h3>
                <span className="about__subtitle">
                  A very passionate web developer
                </span>
              </div>
            </div>

            <p className="about_description">
              I am looking for a position that would utilize my developer skills
              which allows me to continue learning and hone my skills to provide
              high-quality work, and encourages me to flourish as a professional
              developer in the IT Field.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
