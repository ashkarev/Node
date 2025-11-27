
const express=require('express')
const dummyController=require('./controller')

const router=new express.Router()


router.get('/getInfo',dummyController.getDetails)

router.get('/getBooks',dummyController.getBookName)

router.get('/getData',dummyController.getData)

module.exports =router