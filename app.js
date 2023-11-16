const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 100, nome: "ALBUM 'SOLO JENNIE KIM", preco: "150", descricao: "Album solo com disco e photobook de Jennie Kim.", imagem: "img/prod1.jpg"},
  {id: 200, nome: "ALBUM 'LALISA' LALISA MANOBAN", preco: "150", descricao: "Album solo com disco e photobook de Lalisa Manoban.", imagem: "img/prod2.jpg"},
  {id: 300, nome: "ALBUM '-R-' ROSÉ", preco: "150", descricao: "Album solo com disco e photobook de Rosé", imagem: "img/prod3.jpg"},
  {id: 400, nome: "ALBUM 'ME' JISOO", preco: "150", descricao: "Album solo com disco e photobook de Jisoo", imagem: "img/prod4.jpg"},
  {id: 500, nome: "ALBUM 'THE ALBUM' BLACKPINK", preco: "1200", descricao: "Album grupo com disco, photobook e surpresa", imagem: "img/prod5.jpg"},
  {id: 600, nome: "ALBUM 'BORN PINK' BLACKPINK", preco: "1300", descricao: "Album grupo com disco e photobook", imagem: "img/prod6.jpg"},
  {id: 700, nome: "TICKET SEOUL-SOUTH KOREA-SHOW", preco: "700", descricao: "Ticket para show na cidade de Seoul na Córeia", imagem: "img/prod7.jpg"},
  {id: 800, nome: "TICKET-LOS ANGELES-SHOW", preco: "800", descricao: "Ticket para show em Los Angeles", imagem: "img/prod8.jpg"},
  {id: 900, nome: "LIGHTSTICK OFFICIAL", preco: "200", descricao: "Lightstick oficial do grupo para eventos", imagem: "img/prod9.jpg"},
  {id: 1000, nome: "LIGHTSTICK WEAPON", preco: "300", descricao: "Lightstick weapon do grupo para eventos especiais", imagem: "img/prod10.jpg"},
  {id: 1100, nome: "LIGHTSTICK VER 2", preco: "300", descricao: "Lightstick Ver 2 do grupo para shows", imagem: "img/prod11.jpg"},
  {id: 1200, nome: "LIGHTSTICK WEAPON", preco: "300", descricao: "Lightstick Ver 4 do grupo para shows", imagem: "img/prod12.jpg"},
]

function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto  || null 
};


app.get('/', (req, res) => {
  res.render('index', {produtos});
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Olá, Mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});