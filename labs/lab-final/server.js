require('dotenv').config()
const express = require('express') 
const app = express()
const path = require ('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//const port = 3000
const port = process.env.HTTP_PORT

const wineController = require ('./app/controller/winecontroller')
app.use('/', wineController)

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).send({
          error: err,
        });
        return;
      }
    
      next();    
})

app.listen(port, () => console.log(`Server listening on port ${port}`))