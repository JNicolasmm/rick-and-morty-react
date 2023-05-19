const http = require('http')
const characters = require('./utils/data')
const { log } = require('console')

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  if(req.url.includes('/rickandmorty/character/')) {
    let id = req.url.split('/').at(-1) 
    let character = characters.find(char => char.id === Number(id))
    res.writeHead(200, {'Content-type': 'application/json'})
    .end(JSON.stringify(character))
  }

}).listen(3001)