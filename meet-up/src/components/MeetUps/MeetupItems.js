import React from "react";
import classes from './MeetupItems.module.css'
const MeetupItems = ({title , image , address , description}) => {
  return (
    <div>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button>Add to Favorites</button>
        </div>
      </li>
    </div>
  );
};

export default MeetupItems;
