import Link from "next/link";
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
        <Link href="/" className="nav__logo" aria-label={"Logo"}>
          KK
        </Link>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                href="/"
                className={activeLink("/")}
                aria-label={"Landing Page"}
              >
                <UilEstate />
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/about"
                className={activeLink("/about")}
                aria-label={"About me"}
              >
                <UilUser />
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/skills"
                className={activeLink("/skills")}
                aria-label={"Skills and tech stacks"}
              >
                <UilCrosshair />
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/works"
                className={activeLink("/works")}
                aria-label={"List of John Kim's works and projects"}
              >
                <UilBriefcaseAlt />
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/contact"
                className={activeLink("/contact")}
                aria-label={"Contact form to send email to the owner"}
              >
                <UilPhone />
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
