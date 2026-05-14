const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Array para armazenar os feedbacks em memória
let feedbacks = [];

// Configurações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para cadastrar feedback
app.post('/feedbacks/enviar', (req, res) => {
    const { nome, comentario } = req.body;

    feedbacks.push({
        nome,
        comentario
    });

    res.redirect('/feedbacks/lista');
});

// Rota de listagem
app.get('/feedbacks/lista', (req, res) => {

    let html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Lista de Feedbacks</title>

        <style>
            body{
                font-family: Arial;
                padding: 20px;
                background: #f4f4f4;
            }

            .card{
                background: white;
                padding: 15px;
                margin-bottom: 10px;
                border-radius: 10px;
                box-shadow: 0 0 5px rgba(0,0,0,0.1);
            }

            button{
                background: red;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
            }

            a{
                text-decoration: none;
                color: blue;
            }
        </style>
    </head>
    <body>

        <h1>Lista de Feedbacks</h1>

        <a href="/">Novo Feedback</a>
        <br><br>
    `;

    feedbacks.forEach((feedback, index) => {
        html += `
            <div class="card">
                <h3>${feedback.nome}</h3>
                <p>${feedback.comentario}</p>

                <form action="/feedbacks/remover" method="POST">
                    <input type="hidden" name="index" value="${index}">
                    <button type="submit">Remover</button>
                </form>
            </div>
        `;
    });

    html += `
    </body>
    </html>
    `;

    res.send(html);
});

// Rota para remover feedback
app.post('/feedbacks/remover', (req, res) => {
    const index = req.body.index;

    feedbacks.splice(index, 1);

    res.redirect('/feedbacks/lista');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});