const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pokemons: [],
			pokemon: {}
		},
		actions: {
			// Cambiamos el nombre de la función y le permitimos recibir un rango de Pokémon
			getPokemonsRange: async (startId, endId) => {
				try {
					const promises = [];
					for (let id = startId; id <= endId; id++) {
						// Creamos un array de promesas para realizar las solicitudes de manera concurrente
						promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.json()));
					}

					// Esperamos a que todas las promesas se resuelvan
					const pokemonsData = await Promise.all(promises);

					setStore({ pokemons: pokemonsData });
				} catch (error) {
					console.log("Error al obtener los Pokémon", error);
				}
			}
		}
	};
};

export default getState;
