//new standard imports, define in packege.json: type:module
import { createServer } from 'node:http';

const server = createServer(() => {
  console.log('oi')
}) 

server.listen(3333)