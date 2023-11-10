const express = require ("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', express.engine())
app.set('view engine', 'handlebars')

app.get('/', (requisicao, resposta) => {
    resposta.send("Olá, Negro!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})