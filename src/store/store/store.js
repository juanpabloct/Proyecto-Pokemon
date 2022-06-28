import { configureStore } from "@reduxjs/toolkit";
import PokemonSlice from "../reducerPokemon/SearchpokemonSlice";

export const store=configureStore({
    reducer:{
        pokemon:PokemonSlice.reducer
    }
    
})