var pontoModel = require("../models/pontoModel");

function atualizar(req, res) {
    var ponto = req.body.pontoServer;

        pontoModel.atualizar(ponto)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a atualização! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    
}

module.exports = {
    atualizar
  }