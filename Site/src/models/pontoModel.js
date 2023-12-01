var database = require("../database/config");

function atualizar(pontos) {
    instrucaoSql = `UPDATE usuario SET pontos = ${pontos} WHERE usuario.nome = 'Bianca';`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    atualizar
  }