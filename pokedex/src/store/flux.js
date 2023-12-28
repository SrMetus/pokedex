const getState = ({ getStore, getActions, setStore }) => {
	//const url = "https://pokeapi.co/api/v2/pokemon/";
	return {
		store: {
			pokemons: [],
			pokemon: {}
		},
		actions: {
			getPokemons: async (id) => {
				try {
					const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
					const data = await resp.json();
					console.log("data", data)

					setStore({ pokemons: data });
				} catch (error) {
					console.log("Error al obtener los Pokémon", error);
				}
			}
		}
	}
};

export default getState;