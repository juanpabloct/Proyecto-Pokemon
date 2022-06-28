import { createSlice } from "@reduxjs/toolkit";

const initialState={
    page:0, 
    isLoading:false,
    pokemons:[]
}

const PokemonSlice=createSlice({
    name:"Pokemons", 
    initialState,
    reducers:{
        isLoading:(state)=>{state.isLoading=true},
        allPokemons:(state, action)=>{
            state.page=action.payload.page
            state.pokemons=action.payload.pokemons
            state.isLoading=false
        }
    }
})
export const {allPokemons, isLoading}=PokemonSlice.actions
export default PokemonSlice