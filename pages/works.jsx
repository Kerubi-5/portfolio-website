import Image from "next/image";
import catto from "../assets/catto.png";
const Works = () => {
  return (
    <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent works</h2>

      <div className="work__filters"></div>

      <div className="work__container container grid">
        <div className="work__card">
          <Image src={catto} alt="catto" layout="responsive" width={"500px"} />
          <h3 className="work__title">{"title"}</h3>
          <a href="">Demo</a>
        </div>
      </div>
    </section>
  );
};

export default Works;
