import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { pokemon } from './store/reducerPokemon/thunkPokemon'
function App() {
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(pokemon())
}, [])
const {pokemons}=useSelector((state)=>state.pokemon)
const {page}=useSelector((state)=>state.pokemon)
const {loading}=useSelector((state)=>state.pokemon)
console.log(loading);
if (!!loading) {
  return (
    <div className="App">
      Cargando
    </div>
  )
}
else if (!loading){
  return (
    <div className="App">
{pokemons.map((value, index)=><h1 key={index} style={{textTransform:"capitalize"}}>{value.name}</h1>)}
    <button disabled={loading} onClick={()=>dispatch(pokemon(page))}>Siguiente Pagina</button>
  </div>
  )
}
}

export default App
