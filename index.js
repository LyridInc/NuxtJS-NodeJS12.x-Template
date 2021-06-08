#!/usr/bin/env node
require('dotenv').config()
const entry = require('./src/YOUR_FUNCTION_NAME')
const port = 3000

entry.doLoadNuxt().then( () => {
    entry.app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })
});