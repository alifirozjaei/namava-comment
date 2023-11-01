import React, { useContext, useState } from "react";
import NamavaIcon from "../Icons/NamavaIcon.jsx";
import styles from "./navbar.module.css";
import SearchIcon from "../Icons/SearchIcon.jsx";
import ShuffleIcon from "../Icons/ShuffleIcon.jsx";
import MenuIcon from "../Icons/MenuIcon.jsx";
import HomeIcon from "../Icons/HomeIcon.jsx";
import CameraIcon from "../Icons/CameraIcon.jsx";
import SeriesIcon from "../Icons/SeriesIcon.jsx";
import CategoryIcon from "../Icons/CategoryIcon.jsx";
import ChildrenIcon from "../Icons/ChildrenIcon.jsx";
import MovieIcon from "../Icons/MovieIcon.jsx";
import MovieLock from "../Icons/MovieLock.jsx";
import PopcornIcon from "../Icons/PopcornIcon.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const navItems = [
  { title: "خانه", icon: <HomeIcon /> },
  { title: "فیلم ها", icon: <CameraIcon /> },
  { title: "سریال ها", icon: <SeriesIcon /> },
  { title: "دسته بندی", icon: <CategoryIcon /> },
  { title: "تازه ها", icon: <PopcornIcon /> },
  { title: "کودکان", icon: <ChildrenIcon /> },
  { title: "پردیس نماوا", icon: <MovieIcon /> },
  { title: "نماوا مگ", icon: <MovieLock /> },
];

const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  return (
    <header className={styles["header"]}>
      <span
        className={styles["toggle-navbar"]}
        onClick={() => setNavbarToggle(true)}
      >
        <MenuIcon />
      </span>
      <NamavaIcon />

      {/* navabr for md, lg, xlg size */}
      <nav className={styles["nav"]}>
        {navItems.map((item, index) => (
          <a href="#" className={styles["nav-link"]} key={index}>
            {item.title}
          </a>
        ))}
      </nav>

      {/* navbar for sm size */}
      {navbarToggle && (
        <nav className={styles["nav-sm"]}>
          <div className={styles["menu"]}>
            <div
              className="row align-items-center"
              style={{ marginBottom: "20px" }}
            >
              <span
                className={styles["toggle-navbar"]}
                onClick={() => setNavbarToggle(false)}
              >
                <MenuIcon />
              </span>
              <NamavaIcon />
            </div>

            {navItems.map((item, index) => (
              <a href="#" className={styles["menu-link"]} key={index}>
                {item.icon}
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      )}

      <div className={styles["navbar-action"]}>
        <SearchIcon />
        <ShuffleIcon />

        {/* if user is logged in show logout button */}
        {auth.isLoggedIn && (
          <button className={styles["btn"]} onClick={auth.logout}>
            خروج
          </button>
        )}

        {/* if user is not logged in show login button */}
        {!auth.isLoggedIn && (
          <button className={styles["btn"]} onClick={() => navigate("/login")}>
            ورود
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
