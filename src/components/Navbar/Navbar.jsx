import React, { useContext, useState } from "react";
import NamavaIcon from "../Icons/NamavaIcon.jsx";
import "./navbar.css";
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
  console.log(auth);
  return (
    <header className="header">
      <span className="toggle-navbar" onClick={() => setNavbarToggle(true)}>
        <MenuIcon />
      </span>
      <NamavaIcon />

      <nav className="nav">
        {navItems.map((item, index) => (
          <a href="#" className="nav-link" key={index}>
            {item.title}
          </a>
        ))}
      </nav>

      {navbarToggle && (
        <nav className="nav-sm">
          <div className="menu">
            <div
              className="row align-items-center"
              style={{ marginBottom: "20px" }}
            >
              <span
                className="toggle-navbar"
                onClick={() => setNavbarToggle(false)}
              >
                <MenuIcon />
              </span>
              <NamavaIcon />
            </div>

            {navItems.map((item, index) => (
              <a href="#" className="menu-link" key={index}>
                {item.icon}
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      )}

      <div className="navbar-action">
        <SearchIcon />
        <ShuffleIcon />
        {auth.isLoggedIn && (
          <button className="btn" onClick={auth.logout}>
            خروج
          </button>
        )}
        {!auth.isLoggedIn && (
          <button className="btn" onClick={() => navigate("/login")}>
            ورود
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
