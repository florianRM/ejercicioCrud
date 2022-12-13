const { connect } = require('diskdb');
const express = require('express');
const { dbConnection } = require('./database/config');
const config = require('./config');
require('dotenv').config();

const app = express()
// require('./db')
const cervezas = require('./routes/cervezas')
const users = require('./routes/users')
const auth = require('./routes/auth')
const coches = require('./routes/coches')
// DATABASE CONNECTION
async function connectAtlas(){
    await dbConnection()
}
connectAtlas()
//MIDDLEWARE
app.use(express.json())

//ROUTES
app.use('/cervezas', cervezas)
app.use('/users', users)
app.use('/auth', auth)
app.use('/coches', coches)

app.listen(config.PORT, config.HOST, function () {
    console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});