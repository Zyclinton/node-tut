const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('This is our homepage')
    }
    else if(req.url ==='/about'){
        res.end('Here is our short history')
    }
    else {res.end(`
    <h1>oops</h1>
    <p>We can't seem to find the page your looking for</p>
    <a href="/">back home</a>`)}
})
server.listen(5000)