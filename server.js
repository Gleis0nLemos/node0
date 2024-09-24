import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
  database.create({
    title: 'Vídeo 01',
    description: 'Esse é o vídeo 01',
    duration: 180,
  })

  return reply.status(201).send()
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