import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Form from './components/Form.jsx';
import Favorites from './components/Favorites.jsx';

function App() {

  const navigate = useNavigate()

  const [access, setAccess] = useState(false)

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(access);
      access && navigate('/home')
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access])

  const { pathname } = useLocation()

  const [characters, setCharacters] = useState([])

  async function onSearch(id) {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
        setCharacters([...characters, data]);
      } else {
        alert('No hay personajes con ese id')
      }
    } catch (error) {
      console.log(error.message)
    }
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