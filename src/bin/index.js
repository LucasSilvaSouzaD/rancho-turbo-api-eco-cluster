import { createServer } from 'http'
import { appendFile } from 'fs/promises'

async function handler(request, response) {
  await appendFile('./src/logs/index.txt', `processed by ${process.pid}\n`)

  const result = Array.from({ length: 1e3 }, _ => Math.floor(Math.random() * 40))
    .reduce((prev, next) => prev + next, 0)
  
    response.end(result.toString())
}

createServer(handler).listen(3000, () => console.log('server running 3000 and pid'))