const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota padrão para index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para seções específicas
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/servicos', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
