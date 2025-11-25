//import 
const http=require('http')


//create server
const server=http.createServer((req,res)=>{
    if(req.url=='/getUsers'){
        res.end('hello User')
    }else if(req.url=='/getBooks'){
        res.end('hello Noooks')
    }
})

const port=3000

server.listen(port,()=>{
    console.log(port)
})