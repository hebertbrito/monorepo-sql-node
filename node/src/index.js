const express = require('express');
const app = express();
const port = 3000;

app.use('/', async (request, response)=>{
    response.send("conventional commit push")
})

app.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`)
})