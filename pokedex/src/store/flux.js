const getState = ({ getStore, getActions, setStore }) => {
	const url = "https://pokeapi.co/api/v2/pokemon/1";
	return {
		store: {
			pokemons: [],
			pokemon: {}
		},
		actions: {
			getPokemons: async () => {
				try {
					const resp = await fetch(url);
					const data = await resp.json();
					console.log("data", data)

					setStore({ pokemons: data.resp });
				} catch (error) {
					console.log("Error al obtener los Pokémon", error);
				}
			}
		}
	}
};

export default getState;