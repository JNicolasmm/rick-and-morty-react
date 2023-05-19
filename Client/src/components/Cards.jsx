import Card from './Card';

const Cards = (props) => {
  const {characters} = props
  return (
    <div>
      {characters.map(char => {
        return (
          <Card
            key = {char.id}
            id = {char.id}
            name = {char.name}
            status = {char.status}
            species = {char.species}
            gender = {char.gender}
            origin = {char.origin.name}
            image = {char.image}
            onClose = {props.onClose}
         />
        )
      })}
    </div>
   )
}

export default Cards