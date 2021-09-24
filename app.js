const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const router = require("./router")

const port = process.env.PORT || 3000

const dbURI = "mongodb+srv://remus432:bunasearabucuresti1@nodeblog.ugtkl.mongodb.net/node-todo?retryWrites=true&w=majority"
mongoose.connect(dbURI)

app.use(cors({ origin: "https://todo-app-pi-roan.vercel.app"}))
app.use(express.json())
app.use(router)

app.listen(port)