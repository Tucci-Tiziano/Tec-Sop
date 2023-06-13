const express = require('express');
const app = express();
const path = require('path');
const port = 4000;
const bodyParser = require('body-parser'); // Importar body-parser

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/formulario', (req, res) => {
  res.sendFile(__dirname + "/dj.html");
});

app.get('/carrusel', (req, res) => {
  res.sendFile(__dirname + "/pag3.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'alumno',
  password: 'alumnoipm',
  database: 'mydb'
});
app.post('/guardar', (req, res) => {
  const campo1 = req.body.campo1;
  const campo2 = req.body.campo2;
  const campo3 = req.body.campo3;
  const campo4 = req.body.campo4;
  console.log("Hola");
  console.log(campo1);
  console.log(campo2);
  console.log(campo3);
  console.log(campo4);
  const sql = 'INSERT INTO table1 (dni, nombreApellido, email, mensaje) VALUES ("'+campo1+'", "'+campo2+'", "'+campo3+'", "'+campo4+'")';
  connection.query(sql, function (error, results) {
    if (error) {
      console.log("Error al insertar los datos: " + error);
      res.sendStatus(500);
    } else {
      console.log("Datos insertados correctamente");
      res.sendStatus(200);
    }
  });
  connection.end();
});
connection.connect(function (error) {
  if (error) {
    console.log("Mal");
  } else {
    console.log("Bien");
  }
});







