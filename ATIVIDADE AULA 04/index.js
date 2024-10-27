const produtos = {};

const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Olá sou a esther, Seja Bem-vindo(a)!');
});

app.get('/produtos/:id', (req, res) => {
  res.json({produtos: produtos[req.params.id]})
})



app.post('/produtos', (req, res) => {
  const { nome, descricao, preco } = req.body;
  if (!nome || !descricao || !preco) {
    return res.status(400).json({ msg: "Os campos (preço, nome, descrição) são obrigatórios." });
  }
  const idProduto = uuidv4();
  produtos[idProduto] = { id: idProduto, nome, descricao, preco };


  res.json({ msg: "Produto adicionado com sucesso!", produto: produtos[idProduto] });
});

app.get('/produtos', (req, res) => {
  res.json({ produtos: Object.values(produtos) });  
});

app.put('/produtos/:id', (req, res) => {
  const id = req.params.id;
  if (!produtos[id]) {
  return res.status(404).json({ msg: "Produto não encontrado!" });
  }
  const { nome, descricao, preco } = req.body;
  produtos[id] = { id, nome, descricao, preco };
  res.json({ msg: "Produto atualizado com sucesso! Amém (-_-)" });
  });


app.delete('/produtos/:id', (req, res) => {
  const id = req.params.id;
  if (!produtos[id]) {
    return res.status(404).json({ msg: "Produto não encontrado... vishhh" });
  }
  delete produtos[id];
  res.json({ msg: "Produto removido com sucesso! Ebaaa kkkk..." });
});

const server = app.listen(8080, () => {
  console.log("Servidor pronto na porta 8080!!");
});

module.exports = server;