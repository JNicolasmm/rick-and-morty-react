import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Form from './components/Form.jsx';
import Favorites from './components/Favorites.jsx';

const EMAIL = 'yomismo@hotmail.com'

const PASSWORD = 'rico69'

function App() {

  const navigate = useNavigate()

  const [access, setAccess] = useState(false)

  function login(userData) {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true)
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access])

  const { pathname } = useLocation()

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
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/' element={<Form login={login} />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;