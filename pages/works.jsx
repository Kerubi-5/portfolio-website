import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import takda from "../assets/takda.png";
import expense from "../assets/expense.png";
import legalapp from "../assets/legalapp.png";
import visionboard from "../assets/visionboard.png";
import chatapp from "../assets/chatapp.png";
import { FiExternalLink } from "react-icons/fi";

const Works = () => {
  const works = [
    {
      name: "Takda Planner",
      img: takda,
      demo: "https://kk-scheduler.web.app/",
    },
    {
      name: "Expense Tracker App",
      img: expense,
      demo: "https://expense-tracker-d5897.firebaseapp.com/",
    },
    {
      name: "Legal App Portal",
      img: legalapp,
      demo: "https://threejbgtech.herokuapp.com/",
    },
    {
      name: "KK Vision Board",
      img: visionboard,
      demo: "https://vision-board-kk.web.app/",
    },
    {
      name: "Chatting App",
      img: chatapp,
      demo: "https://kk-chatting.web.app/",
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
