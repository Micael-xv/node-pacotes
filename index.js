import { log } from 'console'
import Express from 'express'

const app = Express()

app.get('/hello-world', (req, res) => {
  console.log(req.query);
  const nome = req.query.nome;
  const idade = req.query.idade;
  return res.status(200).send({
    message: 'Hello world!',
    nome,
    idade
  }); 
});

app.use((req, res) => {
  return res.status(404).send({
    code: 404,
    message:'Não encontrada'
  })
});

app.listen(3333, () => {
  console.log('Servidor aberto na rota http://localhost:3333');
});

