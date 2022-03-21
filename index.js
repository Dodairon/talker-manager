const express = require('express');
const bodyParser = require('body-parser');
const params = require('./src/req1');
const token = require('./src/token');
const validLogin = require('./src/req3');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionarr
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  if ((await params()).length === 0) {
    return res.status(HTTP_OK_STATUS).send([]);
  }
  return res.status(HTTP_OK_STATUS).send(await params());
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talk = (await params()).find((p) => p.id === parseInt(id, 10));
  if (!talk) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(HTTP_OK_STATUS).json(talk);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const tok = token();
  const result = validLogin(email, password);
  if (result) {
    return res.status(400).json({ message: result });
  } 
  return res.status(200).json({ token: tok });
});

app.listen(PORT, () => {
  console.log('Online');
});
