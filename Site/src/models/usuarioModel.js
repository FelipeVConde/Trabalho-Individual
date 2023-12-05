var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    var instrucao = `
        SELECT idUsuario, nome, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, pontos, fkPersonagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, pontos, fkPersonagem);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, pontos, fkPersonagem) VALUES ('${nome}', '${email}', '${senha}', '${pontos}', ${fkPersonagem});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function PegarCincoPersonagens() {
    var instrucao = `
    SELECT personagem.nome, COUNT(*) as quantidade_usuarios
    FROM usuario
        join personagem on fkPersonagem = idPersonagem
    GROUP BY fkPersonagem
    ORDER BY quantidade_usuarios DESC
    LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function PegarCincoUsuarios() {
    var instrucao = `
    SELECT nome, pontos FROM usuario ORDER BY pontos DESC LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function PegarTopPersonagem() {
    var instrucao = `
    SELECT personagem.nome, COUNT(*) as quantidade_usuarios
    FROM usuario
	    join personagem on fkPersonagem = idPersonagem
    GROUP BY fkPersonagem
    ORDER BY quantidade_usuarios DESC
    LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function PegarTopUsuario() {
    var instrucao = `
    SELECT nome, pontos
    FROM usuario
    WHERE pontos = (SELECT MAX(pontos) FROM usuario);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function PegarPontosDoUsuario(nome) {
    var instrucao = `
        SELECT pontos FROM usuario WHERE nome = '${nome}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar(pontos, nome) {
    var instrucao = `UPDATE usuario SET pontos = ${pontos} WHERE usuario.nome = '${nome}';`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atributosPersonagem(personagem) {
    var instrucao = `
    SELECT arma.tipo, especialidade.alimento, especialidade.raridade FROM personagem
	JOIN arma ON fkArma = idArma
    JOIN especialidade ON fkEspecialidade = idEspecialidade
WHERE personagem.nome = '${personagem}';
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    PegarCincoPersonagens,
    PegarCincoUsuarios,
    PegarTopPersonagem,
    PegarTopUsuario,
    PegarPontosDoUsuario,
    atualizar,
    atributosPersonagem,
};