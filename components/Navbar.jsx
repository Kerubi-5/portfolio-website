import Link from "next/link";
import Image from "next/image";

import { UilEstate } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilCrosshair } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilPhone } from "@iconscout/react-unicons";
import { UilMoon } from "@iconscout/react-unicons";
import { UilBrightness } from "@iconscout/react-unicons";
import { useRouter } from "next/router";

const Navbar = ({ darkMode, setDarkMode }) => {
  const router = useRouter();
  const activeLink = (route) => {
    return router.pathname === route ? "nav__link active" : "nav__link";
  };
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo ">
          <a>KK</a>
        </Link>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link href="/">
                <a className={activeLink("/")}>
                  <UilEstate />
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/about">
                <a className={activeLink("/about")}>
                  <UilUser />
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/skills">
                <a className={activeLink("/skills")}>
                  <UilCrosshair />
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/works">
                <a className={activeLink("/works")}>
                  <UilBriefcaseAlt />
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/contact">
                <a className={activeLink("/contact")}>
                  <UilPhone />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {darkMode ? (
          <UilMoon
            className="nav__toggle"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <UilBrightness
            className="nav__toggle"
            onClick={() => setDarkMode(!darkMode)}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
