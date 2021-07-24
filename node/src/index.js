const express = require('express');
const app = express();
const port = 3000;

app.use('/', async (request, response)=>{
    response.send("ok")
})

app.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`)
})