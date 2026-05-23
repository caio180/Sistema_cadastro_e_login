import express from 'express';
import cors from 'cors'
const app = express();
const porta = process.env.PORT;
app.use(cors())
app.use(express.json())

const usuarios = []

app.get('/', (req, res) => {
    res.send("Teste");
})
app.post('/cadastro', (req, res) =>{
    usuarios.push(req.body)
    res.json(usuarios)
})
app.get('/cadastro', (req, res) =>{
    res.json(usuarios)
})

app.listen(porta, () => console.log(`Servidor rodando: http://localhost:${porta}`))