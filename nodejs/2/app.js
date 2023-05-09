
const express = require('express')
const app = express()
const path =require('path')
const port = 3001;
const img= path.join(__dirname, 'img');
app.use(express.static(img))


app.get('/formulario', (req, res) => {
  res.sendFile(__dirname+"/pag2.html")
})
app.get('/carrusel', (req, res) => {
  res.sendFile(img, "carrusel.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})