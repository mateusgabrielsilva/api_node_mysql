const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'risesoft.com.br',
    port:'3306',
    user: 'risesoft_mateus_node',
    password: '9puFfM2KW}L,',
    database: 'risesoft_teste_node'
});

module.exports = con
