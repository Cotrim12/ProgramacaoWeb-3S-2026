const express = require('express')
const app = express()
const port = 3000

//rotas(metodos): GET, POST, PUT e DELETE
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send('Pagina Sobre')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
