const mysql = require("mysql2");

//parametros

const db = mysql.createConnection({
host: 'localhost' ,
user: 'root' ,
password: 'admin123' , // catolica
database:'userdb_felippe' , //nome do banco de dados

});

//estabelecer a conexão

db.connect(err=>{
    if(err) throw err;
    console.log('conectado ao banco de dados');
});

//exportar o modulo de conexão
module.exports = db;