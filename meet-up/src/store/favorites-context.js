import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritesMeetUp) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(favoritesMeetUp) {
        setUserFavorites((previousFavorites) => {
            return previousFavorites.concat(favoritesMeetUp);
        });
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavorites(previousFavorites => {
            return previousFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoritesHandler(meetupId) { 
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite : addFavoritesHandler,
        removeFavorite : removeFavoritesHandler,
        itemIsFavorite : itemIsFavoritesHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;