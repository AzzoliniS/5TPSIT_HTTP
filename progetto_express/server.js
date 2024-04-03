const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const {prodotti} = require("./prodotti")

// Aggiungo alla catena di elaborazioneil middlware body-parser
// .json() configura body-parser per elaborare i dati contenuti nel body della richiesta HTTP in formato json
app.use(bodyParser.json());
// .urlencoded({extended: false}) configura body-parser per elaborare i dati contenuti nel body della richiesta HTTP in formato HTML Form
app.use(bodyParser.urlencoded({ extended: false }));


//per qualsiasi richiesta mi fornisce i file contenuti nella cartella public
app.use("/", express.static(__dirname + "/public"))

app.get('/api/prodotti', (req, res) => {
  res.status(200).json({data: prodotti})
})

app.get('/api/prodotti/:id', (req, res)=>{
  const {id} = req.params

  const prodotto = prodotti.find(
    (prodotto)=> prodotto.id === id
  ) 
  res.json(prodotto)
})

//aggiungo in coda una nuova persona
app.post('/api/prodotti', (req, res)=>{
  console.log(req.body)
  if(req.body){
    prodotti.push(req.body);
    res.json({data: prodotti})
  }else{
    res.status(400).send(" Errore nei dati")
  }
})

app.listen(3000)