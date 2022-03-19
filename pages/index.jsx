import { UilLinkedin } from "@iconscout/react-unicons";
import { UilGithub } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import Link from "next/link";
import Meta from "../components/Meta";
import NaturalImage from "../components/NaturalImage";
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  const keywords = [
    "A web developer",
    "Creates web designs",
    "Passionate Learner",
    "Up to date with web technologies",
  ];

  return (
    <>
      <Meta
        title="John Kim A. Querobines | Website Portfolio"
        desc="I am an aspiring web developer who loves to create web designs and learn about the different web technologies and Im on the road to look for jobs that have like minded experts like me."
        keywords={[
          "John Kim A. Querobines, Website, Portfolio, Web Developer, KK",
        ]}
        image="/assets/jkim.png"
        canonical="https://kkwebdev.xyz/"
      />
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__greeting">Hello, I&apos;m </span>
            <h1 className="home__name">John Kim A. Querobines</h1>
            <h2 className="home__education">
              <ReactTypingEffect
                text={keywords}
                typingDelay={500}
                eraseDelay={1500}
              />
            </h2>

            <div className="home__buttons">
              <a
                download="WEBDEV_CV.pdf"
                href="/assets/QUEROBINES_CV.pdf"
                className="button button--ghost"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Downloads web developer curriculum vitae of John Kim"
              >
                Download CV
              </a>
              <Link href="/about">
                <a
                  className="button button--ghost"
                  aria-label={"Read more about me"}
                >
                  About me
                </a>
              </Link>
            </div>
          </div>
          <div className="home__handle">
            <NaturalImage
              src="/assets/codes.png"
              alt="computer with html tags"
            />
          </div>
          <div className="home__social">
            <Link href="https://www.linkedin.com/in/john-kim-querobines-4507521b8/">
              <a
                className="home__social-link"
                target="_blank"
                aria-label={"Go to John Kim's linked in account"}
              >
                <UilLinkedin />
              </a>
            </Link>
            <Link href="https://github.com/Kerubi-5">
              <a
                className="home__social-link"
                target="_blank"
                aria-label={"Go to John Kim's github account"}
              >
                <UilGithub />
              </a>
            </Link>
            <Link href="https://www.facebook.com/mr.jkimpot/">
              <a
                className="home__social-link"
                target="_blank"
                aria-label={"Go to John Kim's facebook account"}
              >
                <UilFacebook />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
