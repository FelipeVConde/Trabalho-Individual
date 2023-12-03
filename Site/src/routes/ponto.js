var express = require("express");
var router = express.Router();

var pontoControle = require("../controllers/pontoController");

//Recebendo os dados do html e direcionando para a função cadastrar de pontosController.js

router.put("/atualizar", function (req, res){
    pontoControle.atualizar(req, res);
})

module.exports = router;