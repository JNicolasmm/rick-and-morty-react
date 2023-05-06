import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import {useState} from 'react'
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([])
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters([...characters, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 }

const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== (id)))
}

  return (
    <div className='App'>
      <Nav onSearch = {onSearch}/>
      <Cards characters = {characters} onClose = {onClose}/>
    </div>
 );
}

export default App;