import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../css/card.css";

const url_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";

export const CardPokemon = () => {
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
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
						<div className="pokeTipo">
							<p className="grass tipo">Grass</p>
							<p className="poison tipo">Poison</p>
						</div>
						<div className="pokeStats">
							<p className="stats">{pokemon.height}M</p>
							<p className="stats">{pokemon.weight}KG</p>
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