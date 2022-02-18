import { UilLinkedin } from "@iconscout/react-unicons";
import { UilGithub } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import coder from "../assets/codes.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__greeting">Hello, I&apos;m </span>
            <h1 className="home__name">Kerubi</h1>
            <h3 className="home__education">Web Developer</h3>

            <div className="home__buttons">
              <a
                download={"WEBDEV_CV_JKIM.pdf"}
                href="../assets/WEBDEV_CV_JKIM.pdf"
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
              src={coder}
              alt="computer with html tags"
            />
          </div>
          <div className="home__social">
            <Link href="https://www.linkedin.com/in/john-kim-querobines-4507521b8/">
              <a className="home__social-link">
                <UilLinkedin />
              </a>
            </Link>
            <Link href="https://github.com/Kerubi-5">
              <a className="home__social-link">
                <UilGithub />
              </a>
            </Link>
            <Link href="https://www.facebook.com/mr.jkimpot/">
              <a className="home__social-link">
                <UilFacebook />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
