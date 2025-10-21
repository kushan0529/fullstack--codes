// const http=require("http")
// const port=3050;
// const server=http.createServer((req,res)=>{
//     const items={
//         kushan:1234,
//         kumar:4567,
//         jagga:9008,
//         bharath:93402
//     }
//     if(req.url=="/" && req.method =="GET"){
//         res.writeHead(200,{"content-type":"text/plain"})
//         res.end("page is now opened")
//     } else if(req.url=="/contact" && req.method=="GET"){
//         res.writeHead(200,{"content-type":"application/json"})
//         res.end("Email : kumarkushan032@gmal.com")
//     }else if (req.url =="/items" && req.method=="GET"){
//         res.writeHead(200,{"content-type":"application/json"})
//         res.end(JSON.stringify(items))
//     }else{
//         res.end("page not found")
//     }
// })
// server.listen(port,()=>{
//     console.log("server is running of port ",port )
// })











const http=require("http")
const port=5000;
const server=http.createServer((req,res)=>{
    if(req.url=="/3rd"){
        res.end("kushan")
    } else if(req.url=="/2nd"){
        res.end("jagga")
    } else if(req.url=="/1st"){
        res.end("bharath")
    }else{
        res.end("no name")
    }
})
server.listen(port,()=>{//tells the server to start listening for incomimg client req on the specified port 
    
})