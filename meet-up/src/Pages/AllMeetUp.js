import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import MeetUpList from "../components/MeetUps/MeetUpList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const AllMeetUp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch('https://react-meetup-7c7a2-default-rtdb.firebaseio.com/meetups.json').then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  },[]);


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }


  return (
    <div>
      <div>
        <h1>All Meetups</h1>
        <MeetUpList meetups={loadedMeetups} />
      </div>
    </div>
  );
};

export default AllMeetUp;
