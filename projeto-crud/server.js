const express = require('express')
const app = express()
const port = 3000

//disponibilizar os arquivos estáticos
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//cd projeto-crud/public

//realizar a conexão com o banco de dados
const db = require('./db');

//rota principal
app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  //cd projeto-crud/public/index.html
})

app.listen(port, () => {
  console.log(`Servidor funcionando ${port}`)
})