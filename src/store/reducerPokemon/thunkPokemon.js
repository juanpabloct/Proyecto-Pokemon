import { allPokemons, isLoading } from "./PokemonSlice"

export const thunkPokemon=(page=0)=>{
    const traerPokemons=async (dispatch, action)=>{
        dispatch(isLoading())
        const {results}=await (await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`)).json()
        dispatch(allPokemons({pokemons:results, page:page+1}))
    }
    return traerPokemons
}