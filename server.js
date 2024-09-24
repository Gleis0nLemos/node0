//new standard imports, define in packege.json: type:module
import { createServer } from 'node:http';

const server = createServer((request, response) => {
  console.log('oi')

  return response.end() // finish req
}) 

server.listen(3333)