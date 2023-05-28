const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de Rutas', () => {
  describe('GET /rickandmorty/character/:id', () => {
    it('Responde con status: 200', async () => {
      await agent.get('/rickandmorty/character/1').expect(200)
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = (await agent.get('/rickandmorty/character/1')).body
      expect(response).toHaveProperty('id')
      expect(response).toHaveProperty('name')
      expect(response).toHaveProperty('species')
      expect(response).toHaveProperty('gender')
      expect(response).toHaveProperty('status')
      expect(response).toHaveProperty('origin')
      expect(response).toHaveProperty('image')
    })
    it('Sihay un error responde con un status: 500', async () => {
      await agent.get('/rickandmorty/character/elBichoSiuuuu').expect(500)
    })
  })
  describe('GET /rickandmorty/login', () => {
    it('La informacion del login es correcta', async () => {
      const response = (await agent.get('/rickandmorty/login?email=yomismo@hotmail.com&password=rico69')).body
      expect(response.access).toEqual(true)
    })
    it('La informacion del login es correcta', async () => {
      const response = (await agent.get('/rickandmorty/login?email=yOmismo@hotmail.com&password=rico69')).body
      expect(response.access).toEqual(false)
    })
  })
  describe('POST /rickandmorty/fav', () => {
    const chracter = {
      id: 1,
      name: 'elBicho',
      species: 'Inhumano',
      gender: 'Machote',
      status: 'Jugando en Arabia',
      origin: 'Humilde',
      image: 'Inserte imagen del Bicho gritando Siuuuuu'
    }
    const chracter2 = {
      id: 2,
      name: 'elBicho',
      species: 'Inhumano',
      gender: 'Machote',
      status: 'Jugando en Arabia',
      origin: 'Humilde',
      image: 'Inserte imagen del Bicho gritando Siuuuuu'
    }
    it('Devuelve en un areglo el elemento enviado por body', async () => {
      const response = (await agent.post('/rickandmorty/fav').send(chracter)).body
      expect(response).toContainEqual(chracter)
    })
    it('Devuelv el previo elemento enviado y el actual', async () => {
      const response = (await agent.post('/rickandmorty/fav').send(chracter2)).body
      expect(response).toContainEqual(chracter)
      expect(response).toContainEqual(chracter2)
    })
  })
  describe('DELETE /rickandmorty/fav/:id', () => {
    const chracter = {
      id: 1,
      name: 'elBicho',
      species: 'Inhumano',
      gender: 'Machote',
      status: 'Jugando en Arabia',
      origin: 'Humilde',
      image: 'Inserte imagen del Bicho gritando Siuuuuu'
    }
    const chracter2 = {
      id: 2,
      name: 'elBicho',
      species: 'Inhumano',
      gender: 'Machote',
      status: 'Jugando en Arabia',
      origin: 'Humilde',
      image: 'Inserte imagen del Bicho gritando Siuuuuu'
    }
    it('Devuelve el arreglo correspondiente si no se elimina ningun personaje', async () => {
      const response = (await agent.delete('/rickandmorty/fav/elBichoSiuuu')).body
      expect(response).toContainEqual(chracter)
      expect(response).toContainEqual(chracter2)
    })
    it('Elimina correctamente el personaje especificado por ID', async() => {
      const response = (await agent.delete('/rickandmorty/fav/2')).body
      expect(response).toContainEqual(chracter)
    })
  })
})