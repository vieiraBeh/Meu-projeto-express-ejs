const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 100, nome: "ALBUM 'SOLO JENNIE KIM", preco: "150", descricao: "Album solo com disco e photobook de Jennie Kim.", imagem: ""},
  {id: 200, nome: "ALBUM 'LALISA' LALISA MANOBAN", preco: "150", descricao: "Album solo com disco e photobook de Lalisa Manoban.", imagem: ""},
  {id: 300, nome: "ALBUM '-R-' ROSÉ", preco: "150", descricao: "Album solo com disco e photobook de Rosé", imagem: ""},
  {id: 400, nome: "ALBUM 'ME' JISOO", preco: "150", descricao: "Album solo com disco e photobook de Jisoo", imagem: ""},
  {id: 500, nome: "ALBUM 'THE ALBUM' BLACKPINK", preco: "1200", descricao: "Album grupo com disco, photobook e surpresa", imagem: ""},
  {id: 600, nome: "ALBUM 'BORN PINK' BLACKPINK", preco: "1300", descricao: "Album grupo com disco e photobook", imagem: ""},
  {id: 700, nome: "TICKET SEOUL-SOUTH KOREA-SHOW", preco: "700", descricao: "Ticket para show na cidade de Seoul na Córeia", imagem: ""},
  {id: 800, nome: "TICKET-LOS ANGELES-SHOW", preco: "800", descricao: "Ticket para show em Los Angeles", imagem: ""},
  {id: 900, nome: "LIGHTSTICK OFFICIAL", preco: "200", descricao: "Lightstick oficial do grupo para eventos", imagem: ""},
  {id: 1000, nome: "LIGHTSTICK WEAPON", preco: "300", descricao: "Lightstick weapon do grupo para eventos especiais", imagem: ""},
  {id: 1100, nome: "LIGHTSTICK VER 2", preco: "300", descricao: "Lightstick Ver 2 do grupo para shows", imagem: ""},
  {id: 1200, nome: "LIGHTSTICK WEAPON", preco: "300", descricao: "Lightstick Ver 4 do grupo para shows", imagem: ""},
]

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Olá, Mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});