import { isLoading, setPokemons } from "./SearchpokemonSlice"

export const pokemon=(page=0)=>{
    return  async (dispatch, getState)=>{
        dispatch(isLoading())
        const allPokemons=await (await fetch(`https://pokeapi.co/api/v2/pokemon?limit=11&offset=${page*11}`)).json()

        return dispatch(setPokemons({pokemons:allPokemons.results, page}))
    }
}