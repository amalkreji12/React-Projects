import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import FavoritesContext from "../../store/favorites-context";
const NavBar = () => {
  const favoriteCtx = useContext(FavoritesContext)
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>React Meetup </div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>All Meetups</Link>
            </li>
            <li>
              <Link to={"/favorites"}>Favorites  <span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
            </li>
            <li>
              <Link to={"/new-meetup"}>New Meetup</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
