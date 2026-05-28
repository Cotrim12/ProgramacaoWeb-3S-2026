const express = require('express'); //instancia do express

const router = express.Router(); //modulariza as rotas

const db = require('../db'); //conecta com o banco de dados

//criar as rotas
//cadastrar usuário
//post ---> insert
router.post('/', (req, res)=>{ //caminho> /api/users
    const {nome, email} = req.body;

    db.query('insert into users (nome, email) values (?, ?)', [nome, email]),
    (err, result) =>{
        if(err) return res.status(500).send(err);
        res.status(201).json
    }

});
//editar usuário
//listar todos os usuários
//excluir o usuário

module.exports = router;