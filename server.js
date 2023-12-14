const express = require('express')
const app = express()
const morgan = require('morgan')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))


//defining server
const port = 5000;
app.listen(port,()=>{
    console.log('server is running on 5000')})