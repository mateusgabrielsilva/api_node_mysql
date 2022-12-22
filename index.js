const express = require('express');
const server = express();
const con = require('./src/connection/connectionDb.js');


// Buscando dados no db 
server.get('/', async (req, res) => {
    // Executamos a query para o banco de dados 
    con.query('SELECT * FROM user', (err, result) => {
        if(err) {
            console.log(err)
        }
        res.send(result);
    });
});

// Inserindo dados no db
server.post('/addUser', async (req, res) => {
    let queryInsert = `INSERT INTO user (name, email, password, active) VALUES (?, ?, ?, ?);`;

    // Valores a serem inseridos
    let userName  = "Isadora Fontoura"
    let userEmail = "isadorafontoura@gmail.com"
    let userPassword = "Isadora"
    let userActive = 1

    // Criando a query 
    con.query(queryInsert, [userName, userEmail, userPassword, userActive], async (err, rows) => {
       if (err) throw err;
        console.log("Linha inserida com sucesso!")
        
        res.send(rows)
    })
})

// Startando o servidor
server.listen(3000, () => {
    console.log('Servidor rodando...')
});