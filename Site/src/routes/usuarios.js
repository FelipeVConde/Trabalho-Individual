var express = require("express");
var router = express.Router();

var usuarioControle = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioControle.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioControle.autenticar(req, res);
});

router.get("/PegarDadosPraDashBoard", function (req, res){
    usuarioControle.PegarDadosPraDashBoard(req, res);
});

module.exports = router;