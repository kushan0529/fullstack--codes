const http=require("http")
const port=3000
const server=http.createServer((req,res)=>{
    if(req.url=="/" && req.method=="GET"){
        res.writeHead(200,{"content-Type":"text/plain"})
        res.end("welcome to the kushan's web page ")
    } else if(req.url=="/items" && req.url=="GET"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify(items))
    } else if(req.url=="/health" && req.url=="GET"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({status:"up"  }))
    } else {
        res.writeHead(400,{"content-type":"text/plain"})
        res.end("page not found")
    }
})
server.listen(port,()=>{
    console.log("server was created"+port)
})