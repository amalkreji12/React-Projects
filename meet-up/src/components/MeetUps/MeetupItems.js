import { useContext } from "react";
import React from "react";
import classes from "./MeetupItems.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";
const MeetupItems = ({ title, image, address, description, id }) => {
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(id);
  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite({
        id,
        title,
        description,
        image,
        address
      });
    }
  }
  return (
    <div>
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={image} alt={title} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove from favorites' : 'To favorites'}</button>
          </div>
        </Card>
      </li>
    </div>
  );
};

export default MeetupItems;
