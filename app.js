const Sequelize = require("sequelize")
const Sequelize = new Sequelize("escola", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!")
}).catch(function (erro) {
    console.log("Falha ao se conectar :(" + erro)
})

const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Seq
        
        
        
        
        
        uelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.sync({force: true})

const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.sync({force:true})

Postagem.create({
    titulo: "teste titulo",
    conteudo: "teste conteudo"
})

Usuario.create({
    nome: "Beatriz",
    sobrenome: "Pimentel",
    idade: 16,
    email: "beatriz.aquino@academico.ifpb.edu.br"
})
// tabela: escola


var opr = require("./opr"); // module.exports (1 e 2)
console.log(opr.soma(2,3));
console.log(opr.multiplica(4,5));

//

let express = require('express');
let app = express();
app.get("/ola/:cargo/:nome/:cor", function(req, res){
    res.send("<h1>"+ "Olá "+ req.params.nome +"</h1>")
})

app.get("/Sobre", function(req, res){
    res.send("E é isso")
})

app.get("/Blog", function(req, res){
    res.send("Olá gostaria ;-;")
})

//

app.get("/", function(req,res){
    res.sendFile(__dirname + "/HTML/index.html")
})

app.listen(8081, function(){
    console.log("O servidor está rodando! Url: http://localhost:8081")
}) // a definição do servidor é na última linha do código