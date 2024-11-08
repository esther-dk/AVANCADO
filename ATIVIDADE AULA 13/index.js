require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');


const app = express(); 
const PORTA = 8080;


app.get('/token', (req, res) => {

  const randomNumber = Math.random();

  const payload = { randomNumber };

  
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
