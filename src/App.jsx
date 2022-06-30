import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { useSelector } from 'react-redux'
import { thunkPokemon } from './store/reducerPokemon/thunkPokemon'
function App() {
  const dispatch=useDispatch()
  const {pokemons}=useSelector((state)=>state)
  const {page}=useSelector((state)=>state)
  const {isLoading}=useSelector((state)=>state)
  useEffect(()=>{
    dispatch(thunkPokemon())
    console.log(pokemons);
    
  }, [])
  return <div>
    <h3>Cargando: { isLoading } </h3>
    <div>{pokemons.map((pokemon, index)=><li>{pokemon.name}</li>)}</div>
    <button disabled={isLoading} onClick={()=>dispatch(thunkPokemon(page))}>Siguiente</button>
  </div>
}

export default App
