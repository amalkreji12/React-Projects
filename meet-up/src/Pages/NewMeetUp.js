import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import NewMeetUpForm from '../components/MeetUps/NewMeetUpForm'
import { useNavigate } from 'react-router-dom'

const NewMeetUp = () => {
  const navigate = useNavigate();

  function addMeetUpHandler(meetupData) {
    fetch('https://react-meetup-7c7a2-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate('/');
    });
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