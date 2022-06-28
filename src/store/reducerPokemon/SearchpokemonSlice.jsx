import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    loading:false,
    page:0,
    pokemons:[]
};
 export const PokemonSlice = createSlice({
name: 'name',
   initialState,
   reducers: {
    isLoading:(state)=>{state.loading=true},
    setPokemons:(state, action)=>{
        state.loading=false
        state.page=action.payload.page+1
        state.pokemons=action.payload.pokemons
    },
   }
});
export const {isLoading, setPokemons, nextPage} = PokemonSlice.actions;
export default PokemonSlice;