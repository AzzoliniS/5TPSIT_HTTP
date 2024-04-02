const express = require('express')
const app = express()
const {prodotti} = require("./prodotti")


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
app.post('/api/persone', (req, res)=>{
  console.log(req.body)
})

app.listen(3000)