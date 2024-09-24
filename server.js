//new standard imports, define in packege.json: type:module
import { createServer } from 'node:http';

const server = createServer((request, response) => {
  response.write('Hello World');

  return response.end() // finish req
}) 

server.listen(3333)