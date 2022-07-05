const http = require('http')

const port = 3003
const host = 'localhost'

const server = http.createServer((req, res) =>
{
  // console.log('Server request')
  console.log('req.url', res.url)

  res.setHeader('Content-Type', 'text/html')
  res.write('<h1>hello</h1>')
  res.end()
})

server.listen(port, host, (error) =>
{
  error ? console.log(error) : console.log(`Listening port ${port}`)
})