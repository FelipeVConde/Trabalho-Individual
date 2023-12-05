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

router.get("/PegarCincoPersonagens", function (req, res){
    usuarioControle.PegarCincoPersonagens(req, res);
});

router.get("/PegarCincoUsuarios", function (req, res){
    usuarioControle.PegarCincoUsuarios(req, res);
});

router.get("/PegarTopPersonagem", function (req, res){
    usuarioControle.PegarTopPersonagem(req, res);
});

router.get("/PegarTopUsuario", function (req, res){
    usuarioControle.PegarTopUsuario(req, res);
});

router.post("/PegarPontosDoUsuario", function (req, res){
    usuarioControle.PegarPontosDoUsuario(req, res);
});

router.put("/atualizar", function (req, res){
    usuarioControle.atualizar(req, res);
})

router.post("/atributosPersonagem", function (req, res){
    usuarioControle.atributosPersonagem(req, res);
});


module.exports = router;