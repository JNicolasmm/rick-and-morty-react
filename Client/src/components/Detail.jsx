import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Detail = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState({})
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);
  return (
    <div>
      <img src={character.image && character.image} alt='' />
      <h2>Personaje: '{character.name && character.name}'</h2>
      <h2>Status: {character.status && character.status}</h2>
      <h2>Especie: {character.species && character.species}</h2>
      <h2>Genero: {character.gender && character.gender}</h2>
      <h2>Origen: {character.origin?.name && character.origin?.name}</h2>
      <Link to='/home'>
        <button>Home</button>
      </Link>
    </div>
  )
}

export default Detail