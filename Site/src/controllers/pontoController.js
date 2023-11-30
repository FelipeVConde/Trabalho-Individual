var pontosModel = require("../models/pontoModel");

function atualizar(req, res) {
    var ponto = req.body.pontoServer;

    if (ponto == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {

        pontoModel.atualizar(ponto)
            .then((resultadoo) => {
                res.status(201).json(resultado);
            }
            ).catch((erro) => {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a atualização de pontos! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    atualizar
  }