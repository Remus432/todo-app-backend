const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const router = require("./router")

const dbURI = "mongodb+srv://remus432:bunasearabucuresti1@nodeblog.ugtkl.mongodb.net/node-todo?retryWrites=true&w=majority"
mongoose.connect(dbURI)

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3000)