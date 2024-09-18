const http=require('http')
const server=http.createServer((req,res)=>{
  if(req.url=='/'){
    res.end('welcome to our page')
  }
  if(req.url=='/about'){
    res.end("here is a short story")
  }
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>OOPs!</h1>
    <p>cant find page u r looking for</p>
    <a href="/">Home</a>
  `)
})
server.listen(5000)
