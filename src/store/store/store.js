import { configureStore } from "@reduxjs/toolkit"
import PokemonSlice from "../reducerPokemon/PokemonSlice"


export const store = configureStore({
    reducer:PokemonSlice.reducer
})