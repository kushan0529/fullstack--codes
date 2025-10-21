const http= require('http');
const port=3000
const server = http.createServer((request,response) => {
    if (request.url=='/'){
        response.end("welcome to the website")
    } else if(request.url=="/about"){
        response.end("srikalhasti based company ")
        
    } else if(request.url=="/contact"){
        response.end("email: company@gmail.com")

    } else if(request.url=="/users"){
        const users=[
            {id:1,name:"rajeswari"},
            {id:2,name:"kushan"}
        ]
        response.end(JSON.stringify(users))
    } 
    else{
        response.end("page notfound")
    }

}) 
server.listen(port,() =>{
    console.log("server running on port" + port)
})