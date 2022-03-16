import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Head from "next/head";
import Meta from "./Meta";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
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
      <Helmet>
        <body className={darkMode ? "dark-theme" : "light-theme"} />
      </Helmet>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
