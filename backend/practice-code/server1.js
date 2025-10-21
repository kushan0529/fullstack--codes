const http=require("http")
const port =3000
const server =http.createServer((req,res)=>{
    const items={kushan:1234}
    if(req.url=="/" && req.method=="GET"){
        res.writeHead(200,{"Content-Type":'text/plain'})
        res.end("welcome to the node.js https server")
    } else if(req.url ==="/items" && req.method ==="GET"){
        res.writeHead(200,{"Content-Type": "application/json"})
        res.end(JSON.stringify(items))
    } else if (req.url=="/health" && req.method=="GET"){
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify({status:"up"}))
    } else {
        res.writeHead(404,{"Content-Type" : "text/plain"})
        res.end("pagenotfound")
    }
})
server.listen(port,()=>{
    console.log("server is running on port "+port)
})