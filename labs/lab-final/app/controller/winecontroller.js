const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')

// Configure body parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/wines', function(req, resp) {
    resp.send('Getting list of wines')
})

app.get('/wine/:wineId', async function (req, res) {
    const wineId = req.params.wineId

    res.send(`Getting wine for ID ${wineId}`)
})

module.exports = app;