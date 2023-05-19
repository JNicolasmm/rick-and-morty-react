import { useState } from "react";

const SearchBar = (props) => {
  const [id, setId] = useState('')
  const handleChange = (event) => {
    setId(event.target.value)
  }
  return (
      <div>
         <input type = 'search' onChange = {handleChange} value = {id}/>
         <button onClick = {() => {props.onSearch(id)}}>Agregar</button>
      </div>
   );
}

export default SearchBar