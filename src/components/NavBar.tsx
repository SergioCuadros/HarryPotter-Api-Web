import { Link } from "react-router-dom";
import LogoItemHp from "../assets/img/harry-potter-svgrepo-com.svg";
import SombreroItem from "../assets/img/sombrero.svg";
import VaritaItem from "../assets/img/wand-svgrepo-com.svg";
import { ThemeSelector } from "./ThemeSelector.tsx";

const navigation = [
  { name: "Hey", href: "/hp", current: true, img: SombreroItem },
  { name: "Characters", href: "/characters", current: false, img: LogoItemHp },
  { name: "Spells", href: "/spells", current: false, img: VaritaItem },
];

const LogoItem = {
  name: "Logo",
  href: "https://upload.wikimedia.org/wikipedia/commons/9/9b/HP_-_Harry_Potter_wordmark.svg",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={classNames(
                    item.current ? "text-hogwarts-gold" : "text-base-content",
                    "btn btn-ghost text-xl"
                  )}
                >
                  <img
                    src={item.img}
                    className={classNames(
                      "w-10 h-10 mr-2",
                      item.current ? "filter brightness-0 invert" : ""
                    )}
                    alt={`${item.name} icon`}
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <img src={LogoItem.href} className="btn btn-ghost text-xl" alt="Logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={classNames(
                  item.current ? "text-hogwarts-gold" : "text-base-content",
                  "btn btn-ghost text-xl"
                )}
              >
                <img
                  src={item.img}
                  className={classNames(
                    "w-10 h-10 mr-2",
                    item.current ? "filter brightness-0 invert" : ""
                  )}
                  alt={`${item.name} icon`}
                />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeSelector />
      </div>
    </div>
  );
};