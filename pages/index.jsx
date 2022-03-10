import { UilLinkedin } from "@iconscout/react-unicons";
import { UilGithub } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
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
      <Head>
        <title>John Kim A. Querobines</title>
      </Head>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__greeting">Hello, I&apos;m </span>
            <h1 className="home__name">John Kim A. Querobines</h1>
            <h3 className="home__education">
              <ReactTypingEffect
                text={keywords}
                typingDelay={500}
                eraseDelay={1500}
              />
            </h3>

            <div className="home__buttons">
              <a
                download="WEBDEV_CV.pdf"
                href="/assets/cv.pdf"
                className="button button--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              <Link href="/about">
                <a className="button button--ghost">About me</a>
              </Link>
            </div>
          </div>
          <div className="home__handle">
            <Image
              className="home__img"
              src="/assets/codes.png"
              alt="computer with html tags"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="home__social">
            <Link href="https://www.linkedin.com/in/john-kim-querobines-4507521b8/">
              <a className="home__social-link" target="_blank">
                <UilLinkedin />
              </a>
            </Link>
            <Link href="https://github.com/Kerubi-5">
              <a className="home__social-link" target="_blank">
                <UilGithub />
              </a>
            </Link>
            <Link href="https://www.facebook.com/mr.jkimpot/">
              <a className="home__social-link" target="_blank">
                <UilFacebook />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
