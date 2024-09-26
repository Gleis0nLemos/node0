import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory()

// Request Body

server.post('/videos', (request, reply) => {
  const { title, description, duration } = request.body

 
  database.create({
    title,
    description,
    duration,
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