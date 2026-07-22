const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use('/', require('./router/register'))
app.use('/' , require('./router/auth'))
app.use('/', require('./router/refresh'))


app.listen(PORT,()=>{
    console.log(`Server starded on PORT ${PORT}`);
})
