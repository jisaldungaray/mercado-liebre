const express = require ('express');
const app = express();
const path = require ('path');
const PUERTO = 4040;

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.listen(PUERTO, () => {
    console.log('Servidor Escuchando Spotify en 4040!!!')
})