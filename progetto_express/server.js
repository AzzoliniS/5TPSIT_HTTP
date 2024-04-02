const express = require('express')
//permette di utilizzare tutte le funzionalità di express
const app = express()

//gestisco la homepage
app.get('/', (req, res) => {
    res.send('Home')
  })

//gestisco la pagina about
app.get('/about', (req, res) => {
    res.send('About')
  })

//gestisco la pagina contatti
app.get('/contatti', (req, res) => {
    res.send('Contatti')
  })

//gestisco url di errore
app.all('*', (req, res) =>{
    res.send("<h1>Risorsa non trovata</h1>")
})

//in ascolto sulla porta 3000
app.listen(3000)