const axios = require('axios')

const url = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req, res) => {
  try {
    const { id } = req.params

    const { data } = await axios.get(`${url}${id}`)

    let character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      origin: data.origin,
      image: data.image,
      status: data.status,
      species: data.species
    }

    return character
      ? res.status(200).json(character)
      : res.status(404).send('Not Found')

  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getCharById
}