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
                  Graduated in Polytechnic University of the Philippines with
                  Latin Honors
                </span>
              </div>
              <div className="about__box">
                <UilHtml5 className="about__icon" />
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">
                  I have developed 8 personal web projects so far using dabbling
                  in both traditional and web3 and also created 4 projects in my
                  work
                </span>
              </div>
              <div className="about__box">
                <UilFire className="about__icon" />
                <h3 className="about__title">Passion</h3>
                <span className="about__subtitle">
                  Coding is my passion and I am always in the lookout to improve
                  and sharpen my coding skills
                </span>
              </div>
            </div>

            <p className="about_description">
              Hi my name is John Kim, and I use Kim as a nickname. I am a
              fullstack web developer but mainly a front end developer. I am
              passionate about video games, especially crpg games. I am
              collecting video games in a video game digital distribution called
              steam.
              <br />
              <br />
              If you would like to connect with my steam account here is my
              profile <a href="https://steamcommunity.com/id/kerubi5">Kerubi</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
