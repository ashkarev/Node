const http=require ('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/getRecipe'){
        let obj={
            name:'ash',
            age:"21"
        }
        jsondata=JSON.stringify(obj)
        res.end(jsondata)
    }
})



const port=3000

server.listen(port,()=>{
    console.log(port)
})

// . getTodos
//        3. getUsers
//        4. getCourses