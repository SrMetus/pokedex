import React, { useContext, useEffect } from "react";

export const CardPokemon = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPokemon();
    },);

    return (
        <div className="card-container">
            <div className="">
                
            </div>
        </div>
    )
}