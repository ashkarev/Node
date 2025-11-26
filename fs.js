const fs=require('fs')

//create file
// fs.writeFile('sample.txt','this created  for learning file system',(err)=>{
// if(err)throw err
// })



// renaming
// fs.rename('sample.txt','renamed.txt',(err)=>{
//     if(err) throw err
// })

//edit file
// fs.appendFile('renamed.txt', ' also add these',(err)=>{
//     if(err)  throw err
// })


//read the data to a variable

// fs.readFile('renamed.txt','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

//deleete
fs.unlink('renamed.txt',(err)=>{
    if(err) throw err
})
