const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const StudentRoute = require('./routes/studentee')

mongoose.connect('mongodb://localhost:27017/studentData',{useNewUrlParser: true,useUnifiedTopology:true})

const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err);
})

db.once('open',()=>{
    console.log('DB Connection established');
})

const app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.use('/uploads',express.static('uploads'))

app.use(cors())
// whenever we pass data from FE to our server side so that will be transferred to JSON Format
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is runnng on port ${PORT}`)
})


app.use('/api/student', StudentRoute)

