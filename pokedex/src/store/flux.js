const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			info: [],
			locations: [],
			details: {},
			favorite: []

		},
		actions: {
			getCharacters: (url) => {
				fetch(url)
					.then(resp => resp.json()
					)
					.then(data => {
						setStore({ characters: data.results });
					})
					.catch(error => {
						console.log("getCharacters", error);
					});
			},
			getInfo: (url) => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => {
						setStore({ info: data.info })
					})
					.catch(error => console.log("getInfo", error))
			},
			getLocations: (url) => {
				fetch(url)
					.then(resp => resp.json()
					)
					.then(data => {
						setStore({ locations: data.results });
					})
					.catch(error => {
						console.log("getLotacions", error);
					})
			},
			getCharactersDetails: (url) => {
				fetch(url)
					.then(resp => resp.json()
					)
					.then(data => {
						setStore({ details: data })
					})
					.catch(error => {
						console.log("getCharacterDetails", error)
					})
			},
			addFavorite: fav => {
				const store = getStore();
				const isFavoriteAdded = store.favorite.some(item => item.id === fav.id)
				
				if (!isFavoriteAdded) {
					const updateFavorite = [...store.favorite, fav];
					setStore({ favorite: updateFavorite });
				}
			},
			delFavorite: favId => {
				const store = getStore();
				const updatedFavorites = store.favorite.filter(item => item.id !== favId);
				setStore({ favorite: updatedFavorites });
			}
		}
	}
};

export default getState;