import { UilAward } from "@iconscout/react-unicons";
import { UilHtml5 } from "@iconscout/react-unicons";
import { UilFire } from "@iconscout/react-unicons";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <section className="about section" id="about">
        <span className="section__subtitle">My Intro</span>
        <h2 className="section__title">About me</h2>

        <div className="about__container container grid">
          {"image here"}
          <div className="about__data">
            <div className="about__info">
              <div className="about__box">
                <UilAward className="about__icon" />
                <h3 className="about__title">Awards</h3>
                <span className="about__subtitle">Awarded Many times</span>
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
                  A very passionate web developers
                </span>
              </div>
            </div>

            <p className="about_description">I am a front developer</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
