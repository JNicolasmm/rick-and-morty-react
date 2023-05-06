const Card = (props) => {
  const {name, status, species, gender, origin, image, onClose, id} = props
  return (
    <div>
      <img src = {image} alt='' />
      <h2>Personaje: {name}</h2>
      <h2>Status: {status}</h2>
      <h2>Especie: {species}</h2>
      <h2>Genero: {gender}</h2>
      <h2>Origen: {origin}</h2>
      <button onClick = {() => {onClose(id)}}>X</button>
    </div>
  );
}

export default Card