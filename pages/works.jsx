import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const Works = () => {
  const works = [
    {
      name: "Takda Planner",
      img: "/assets/takda.png",
      demo: "https://kk-scheduler.web.app/",
    },
    {
      name: "Expense Tracker App",
      img: "/assets/expense.png",
      demo: "https://expense-tracker-d5897.firebaseapp.com/",
    },
    {
      name: "Legal App Portal",
      img: "/assets/legalapp.png",
      demo: "https://threejbgtech.herokuapp.com/",
    },
    {
      name: "KK Vision Board",
      img: "/assets/visionboard.png",
      demo: "https://vision-board-kk.web.app/",
    },
    {
      name: "Chatting App",
      img: "/assets/chatapp.png",
      demo: "https://kk-chatting.web.app/",
    },
    {
      name: "KK Movies",
      img: "/assets/kk-movies.png",
      demo: "https://kk-movies.netlify.app/",
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
            width={100}
            height={100}
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
