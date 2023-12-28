import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
const url_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";

export const CardPokemon = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPokemons();
    }, []);

    return (
        <div className="card-container">
            {store.pokemons && Array.isArray(store.pokemons) ? (
                store.pokemons.map((pokemon) => (
                    <div className="col" key={pokemon.id}>
                        <div className="pokeId" id="PokeId">
                            {pokemon.id}
                        </div>
                        <div className="pokeImg" id="pokeImg">
                            <img src={`${url_img}${pokemon.id}.png`} alt="Descripción de la imagen" />
                        </div>
                        <div className="pokeName" id="pokeName">{pokemon.name}</div>
                    </div>
                ))
            ) : (
                <p>No hay Pokémon disponibles.</p>
            )}
        </div>
    );
};
