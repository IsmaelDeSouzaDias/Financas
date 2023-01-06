const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

// Criar a conexão com o banco de dados
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "financas",
});

// Iniciar o servidor express
const app = express();

app.use(cors("http://localhost:3000/"));

// Configurar o body-parser para processar o corpo das requisições com o tipo application/json
app.use(bodyParser.json());

// Criar uma rota POST para /cadastro
app.post("/cadastro", (req, res) => {
  const json = JSON.stringify(req.body);
 
  const obj = JSON.parse(json);
  // Receber os dados enviados pelo front-end
  const { tipoDado, nome, valor, data } = obj;

  // Montar a consulta SQL para inserir os dados no banco de dados
  const sql = `INSERT INTO financeiro (tipoDado, nome, valor, data) VALUES (?, ?, ?, ?)`;
  const params = [tipoDado, nome, valor, data];

  // Executar a consulta
  connection.query(sql, params, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.send({ success: false, error });
      return;
    }
    console.log(`Adicionado: ${tipoDado}, ${nome}, ${valor}, ${data}`);
    res.send({ success: true });
  });
});

// Iniciar o servidor na porta 5000
app.listen(5000, () => {
  console.log("Servidor iniciado na porta 5000");
});
