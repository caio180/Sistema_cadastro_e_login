import express from 'express';
const app = express();
const porta = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("Teste");
})

app.listen(porta, () => console.log(`Servidor rodando: http://localhost:${porta}`))
