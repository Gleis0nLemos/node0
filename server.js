import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

// POST http://localhost:3333/videos
// PUT http://localhost:3333/videos/ID

// Route Parameter ex: '3333/videos/:id'

server.post('/videos', () => {
  return 'Hello World'
})

server.get('/videos', () => {
  return 'Hello Rocketseat'
})

server.put('/videos/:id', () => {
  return 'Hello Node.js'
})

server.delete('/videos/:id', () => {
  return 'Hello Node.js'
})

server.listen({
  port: 3333,
})