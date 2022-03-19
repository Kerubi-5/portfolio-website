import Meta from "../components/Meta";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import NaturalImage from "./../components/NaturalImage";

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
          <div className="work__img">
            <NaturalImage src={work.img} alt={work.name} />
          </div>

          <h3 className="work__title">{work.name}</h3>
          <Link href={work.demo}>
            <a className="work__button" aria-label={work.name}>
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
      <Meta
        title="John Kim A. Querobines | Website Portfolio"
        desc="I am an aspiring web developer who loves to create web designs and learn about the different web technologies and Im on the road to look for jobs that have like minded experts like me."
        keywords={[
          "John Kim A. Querobines, Website, Portfolio, Web Developer, KK",
        ]}
        image="/assets/jkim.png"
        canonical="https://kkwebdev.xyz/works"
      />
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
