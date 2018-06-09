const mongo = require('mongodb').MongoClient
const express = require('express')
const app = express()
const port = process.env.port || 8888
const server = app.listen(port)

const mongoUrl = "mongodb://localhost:27017"

const dbName = "caldb"

mongo.connect(mongoUrl, (err, client) => {
    if (err) throw err

    console.log("Connected to mongo!")
    getCurrentConfig(client.db(dbName), () => {})

    app.get('/', (req, res) => {
        console.log(getCurrentConfig(client.db(dbName)))        
        res.send(getCurrentConfig(client.db(dbName)))
        res.end()
    })
    
})

function getCurrentConfig(db) {
    const collection = db.collection('settings')
    collection.find({}).toArray((err, docs) => {
        if (err) throw err
        return docs      
    })
}

