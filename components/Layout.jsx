import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { useState } from "react";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <Helmet>
        <body className={darkMode ? "dark-theme" : "light-theme"} />
        <meta
          name="google-site-verification"
          content="-9qqJpKGshRJPseMtQESR_Sy1WYEQ_w2ZZSk6_f-Efg"
        />
        <meta name="description" content="A web portfolio website of kerubi" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Helmet>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
