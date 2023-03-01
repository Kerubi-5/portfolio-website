import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { useState } from "react";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <Helmet>
        <body className={darkMode ? "dark-theme" : "light-theme"} />
      </Helmet>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
