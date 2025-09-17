let express = require('express')
let app = express()

let handlebars = require("express-handlebars")
app.engine("handlebars", handlebars.engine({defaultlayout:"main"})) //engine: estrutura base 
app.set("view engine", "handlebars")

let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false})) 
app.use(bodyParser.json())

const Sequelize = require("sequelize")
const sequelize = new Sequelize("escola", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})

const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

app.post("/add", function(req, res) {
    Postagem.create( {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() {
        res.send("Post criado com sucesso!")
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})

app.get("/cad", function(req, res){
    res.render("formulario")
})

app.post("/add", function(req, res){
    res.send("Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo)
})

app.listen(8081, function(){
    console.log("O servidor está rodando! Url: http://localhost:8081")
}) // a definição do servidor é na última linha do código