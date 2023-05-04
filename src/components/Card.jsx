export default function Card(props) {
  const {name, status, species, gender, origin, image, onClose} = props
  return (
    <div>
      <img src = {image} alt='' />
      <h2>Personaje: {name}</h2>
      <h2>Status: {status}</h2>
      <h2>Especie: {species}</h2>
      <h2>Genero: {gender}</h2>
      <h2>Origen: {origin}</h2>
      <button onClick = {onClose}>X</button>
    </div>
  );
}