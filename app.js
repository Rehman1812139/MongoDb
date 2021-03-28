const express=require('express')
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const product=require('./routes/product.routes')

const app=express()
mongoose.connect("mongodb://localhost/productsDb",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
console.log('connected to the database')

}).
catch(err=>{
    console.log('Cannot connect to the databse',err)
    process.exit()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/products',product)
app.listen(3000,()=>{
    console.log('Server is running')
})
