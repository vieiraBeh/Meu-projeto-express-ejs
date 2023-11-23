const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 100, nome: "ALBUM 'SOLO JENNIE KIM", preco: "R$ 150, 00", descricao: "Album solo com disco e photobook de Jennie Kim.", imagem: "img/prod1.jpg"},
  {id: 200, nome: "ALBUM 'LALISA' LALISA MANOBAN", preco: "R$ 150, 00", descricao: "Album solo com disco e photobook de Lalisa Manoban.", imagem: "img/prod2.jpg"},
  {id: 300, nome: "ALBUM '-R-' ROSÉ", preco: "R$ 150, 00", descricao: "Album solo com disco e photobook de Rosé", imagem: "img/prod3.jpg"},
  {id: 400, nome: "ALBUM 'ME' JISOO", preco: "R$ 150, 00", descricao: "Album solo com disco e photobook de Jisoo", imagem: "img/prod4.jpg"},
  {id: 500, nome: "ALBUM 'THE ALBUM' BLACKPINK", preco: "R$ 120, 00", descricao: "Album grupo com disco, photobook e surpresa", imagem: "img/prod5.jpg"},
  {id: 600, nome: "ALBUM 'BORN PINK' BLACKPINK", preco: "R$ 130, 00", descricao: "Album grupo com disco e photobook", imagem: "img/prod6.jpg"},
  {id: 700, nome: "TICKET SEOUL-SOUTH KOREA-SHOW", preco: "R$ 700, 00", descricao: "Ticket para show na cidade de Seoul na Córeia", imagem: "img/prod7.jpg"},
  {id: 800, nome: "TICKET-LOS ANGELES-SHOW", preco: "R$ 800, 00", descricao: "Ticket para show em Los Angeles", imagem: "img/prod8.jpg"},
  {id: 900, nome: "LIGHTSTICK OFFICIAL", preco: "R$ 200,00", descricao: "Lightstick oficial do grupo para eventos", imagem: "img/prod9.jpg"},
  {id: 1000, nome: "LIGHTSTICK WEAPON", preco: "R$ 300, 00", descricao: "Lightstick weapon do grupo para eventos especiais", imagem: "img/prod10.jpg"},
  {id: 1100, nome: "LIGHTSTICK VER 2", preco: "R$ 300, 00", descricao: "Lightstick Ver 2 do grupo para shows", imagem: "img/prod11.jpg"},
  {id: 1200, nome: "LIGHTSTICK WEAPON", preco: "R$ 300, 00", descricao: "Lightstick Ver 4 do grupo para shows", imagem: "img/prod12.jpg"}
]

function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto  || null 
};

for (let produto of produtos){
  console.log(produto.titulo)
}

app.get('/', (req, res) => {
  res.render('index', {produtos});
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Olá, Mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});