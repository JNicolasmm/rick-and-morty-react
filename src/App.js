import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'

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
    <div>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;