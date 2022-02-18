import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import catto from "../assets/catto.png";
import { FiExternalLink } from "react-icons/fi";

const Works = () => {
  const works = [
    {
      name: "Web design",
      img: catto,
      demo: "https://www.youtube.com/watch?v=oy8dSsK57Ps&t=4536s",
    },
  ];
  const renderCards = () => {
    return works.map((work) => {
      return (
        <div className="work__card" key={work.name}>
          <Image
            src={work.img}
            alt={work.name}
            layout="responsive"
            width={"500px"}
            className="work__img"
          />
          <h3 className="work__title">{work.name}</h3>
          <Link href={work.demo}>
            <a className="work__button">
              Demo
              <FiExternalLink />
            </a>
          </Link>
        </div>
      );
    });
  };

  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <section className="work section" id="work">
        <span className="section__subtitle">My Portfolio</span>
        <h2 className="section__title">Recent works</h2>

        <div className="work__filters"></div>

        <div className="work__container container grid">{renderCards()}</div>
      </section>
    </>
  );
};

export default Works;
