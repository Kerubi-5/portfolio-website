import Meta from "../components/Meta";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import NaturalImage from "../components/NaturalImage";
import { fetchEntries } from "../util/contentfulPosts";

const Works = ({ posts }) => {
  const renderCards = () => {
    return posts.map((work) => {
      return (
        <div className="work__card" key={work.title}>
          <div className="work__img">
            <NaturalImage
              src={`https:${work.screenshot.fields.file.url}`}
              alt={work.screenshot.fields.description}
              width={work.screenshot.fields.file.details.image.width}
              height={work.screenshot.fields.file.details.image.height}
            />
          </div>

          <h3 className="work__title">{work.title}</h3>
          <Link
            href={work.link}
            className="work__button"
            aria-label={work.title}
          >
            Demo
            <FiExternalLink />
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

export async function getStaticProps() {
  const res = await fetchEntries("works");
  const posts = await res.map((p) => p.fields);
  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
}

export default Works;
