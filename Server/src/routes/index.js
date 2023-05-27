const { login } = require('../controllers/login')
const { getCharById } = require('../controllers/getCharByID')
const { postFav, deleteFav } = require('../controllers/handleFavorites')
const express = require('express')

const router = express.Router()

router.get('/character/:id', getCharById)

router.get('/login', login)

router.post('/fav', postFav)

router.delete('/fav/:id', deleteFav)

module.exports = {
  router
}