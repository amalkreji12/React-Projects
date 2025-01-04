import React from "react";
import MeetupItems from "./MeetupItems";
import classes from "./MeetUpList.module.css";
const MeetUpList = (props) => {
  return (
    <div>
      <ul className={classes.list}>
        {props.meetups.map((meetups) => (
          <MeetupItems
            key={meetups.id}
            title={meetups.title}
            image={meetups.image}
            address={meetups.address}
            description={meetups.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default MeetUpList;
