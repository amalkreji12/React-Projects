import React from 'react'
import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'
import MeetUpList from '../components/MeetUps/MeetUpList'

const Favorites = () => {
  const favoriteCtx = useContext(FavoritesContext)

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetUpList meetups={favoriteCtx.favorites} />;
  }
  return (
    <div>
        <h1>Favorites  Meetups</h1>
        {content}
    </div>
  )
}

export default Favorites