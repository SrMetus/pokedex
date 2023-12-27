import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const CardPokemon = () => {
    const { actions } = useContext(Context);

    useEffect(() => {
        actions.getPokemons();
    },);

    return (
        <div className="card-container">
            <div className="">
                #1
            </div>
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png" alt="Descripción de la imagen" />
            </div>
            <div>Pikachu</div>
        </div>
    )
}