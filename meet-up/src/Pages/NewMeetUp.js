import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import NewMeetUpForm from '../components/MeetUps/NewMeetUpForm'

const NewMeetUp = () => {
  function addMeetUpHandler(meetupData) {
    fetch('https://react-meetup-7c7a2-default-rtdb.firebaseio.com/meetups.json');
  }
  return (
    <div>
      <section>
        <h1>New Meetup</h1>
        <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
      </section>
    </div>
  )
}

export default NewMeetUp