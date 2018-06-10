const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.port || 8888
const server = app.listen(port)

const mongoUrl = "mongodb://localhost:27017/"

const dbName = "caldb"

mongoose.Promise = global.Promise

mongoose.connect(mongoUrl + dbName)
    .then(() => {
        console.log("Successfully connected to the database!")        
    })
    .catch((err) => {
        throw(err)
    })


require('./routes/settingsRoutes')(app)

function getCurrentConfig(db) {
    const collection = db.collection('settings')
    collection.find({}).toArray((err, docs) => {
        if (err) throw err
        return docs      
    })
}

