import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../css/card.css";

const url_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";

export const CardPokemon = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// Llamamos a getPokemonsRange para obtener información sobre los Pokémon en el rango 1-10 (puedes ajustar según tus necesidades)
		actions.getPokemonsRange(1, 21);
	}, [actions]);

	return (
		<div className="container">
			{store.pokemons && Array.isArray(store.pokemons) ? (
				store.pokemons.map((pokemon) => (
					<div className="card" key={pokemon.id}>
						<div className="pokeName" id="pokeName">
							<p>{pokemon.name}</p>
						</div>
						<div className="pokeImg" id="pokeImg">
							<img className="imgPoke" src={`${url_img}${pokemon.id}.png`} alt={`${pokemon.name}`} />
						</div>
						<div className="poke-tipo">
							<p className=""></p>
							<p className=""></p>
						</div>
						<div className="poke-stats">
							<p className="stats"></p>
							<p className="stats"></p>
						</div>
						<div className="pokeId" id="PokeId">
							<p>#{pokemon.id}</p>
						</div>
					</div>
				))
			) : (
				<p>No hay Pokémon disponibles.</p>
			)}
		</div>
	);
};
