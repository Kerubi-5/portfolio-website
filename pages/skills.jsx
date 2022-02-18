import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import {
  SiJavascript,
  SiPhp,
  SiBootstrap,
  SiMaterialui,
  SiSass,
  SiTypescript,
  SiJquery,
  SiMysql,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import Head from "next/head";

const Skills = () => {
  const levels = {
    one: "Beginner",
    two: "Intermediate",
    three: "Proficient",
    four: "Expert",
  };

  const frontSkills = [
    {
      name: "HTML",
      level: levels.four,
      icon: <AiFillHtml5 />,
    },
    {
      name: "CSS",
      level: levels.three,
      icon: <DiCss3 />,
    },
    {
      name: "SASS",
      level: levels.three,
      icon: <SiSass />,
    },

    {
      name: "React",
      level: levels.three,
      icon: <DiReact />,
    },
    {
      name: "Bootstrap",
      level: levels.four,
      icon: <SiBootstrap />,
    },
    {
      name: "Material UI",
      level: levels.two,
      icon: <SiMaterialui />,
    },
  ];

  const backSkills = [
    {
      name: "Javascript",
      level: levels.four,
      icon: <SiJavascript />,
    },
    {
      name: "PHP",
      level: levels.three,
      icon: <SiPhp />,
    },
    {
      name: "Node.js",
      level: levels.three,
      icon: <FaNode />,
    },
    {
      name: "Firebase",
      level: levels.two,
      icon: <SiFirebase />,
    },
    {
      name: "Typescript",
      level: levels.one,
      icon: <SiTypescript />,
    },
    {
      name: "jQuery",
      level: levels.four,
      icon: <SiJquery />,
    },
    {
      name: "MySQL",
      level: levels.three,
      icon: <SiMysql />,
    },
    {
      name: "MongoDB",
      level: levels.three,
      icon: <SiMongodb />,
    },
  ];

  const skillsList = (skills) => {
    return skills.map((skill) => {
      return (
        <div className="skills__group" key={skill.name}>
          <div className="skills__data">
            {skill.icon}
            <div>
              <h3 className="skills__name">{skill.name}</h3>
              <span className="skills__level">{skill.level}</span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <section className="skills section" id="skills">
        <span className="section__subtitle">My abilities</span>
        <h2 className="section__title">My Experience</h2>

        <div className="skills__container container grid">
          <div className="skills__content">
            <h3 className="skills__title">Front End Technologies</h3>
            <div className="skills__box">{skillsList(frontSkills)}</div>
          </div>
          <div className="skills__content">
            <h3 className="skills__title">Back End Technologies</h3>
            <div className="skills__box">{skillsList(backSkills)}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
