var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json(resultadoAutenticar[0])

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var pontos = req.body.pontosServer;
    var fkPersonagem = req.body.fkPersonagemServer

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkPersonagem == undefined) {
        res.status(400).send("Seu personagm esta undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, pontos, fkPersonagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function PegarCincoPersonagens(req, res) {
    usuarioModel.PegarCincoPersonagens().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Não há resultados");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log(
            "Houve um erro ao buscar as ultimos dados.",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function PegarCincoUsuarios(req, res) {
    usuarioModel.PegarCincoUsuarios().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Não há resultados");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log(
            "Houve um erro ao buscar as ultimos dados.",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function PegarTopPersonagem(req, res) {
    usuarioModel.PegarTopPersonagem().then(function (resultado) {
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("não há resultados");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log(
            "Houve um erro ao buscar as ultimos dados.",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function PegarTopUsuario(req, res) {
    usuarioModel.PegarTopUsuario().then(function (resultado) {
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("não há resultados");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log(
            "Houve um erro ao buscar as ultimos dados.",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function PegarPontosDoUsuario(req, res) {
    var nome = req.body.nomeServer

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        usuarioModel.PegarPontosDoUsuario().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Não há resultados");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log(
                "Houve um erro ao buscar pontos do usuario",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
    }

}

module.exports = {
    autenticar,
    cadastrar,
    PegarCincoPersonagens,
    PegarCincoUsuarios,
    PegarTopPersonagem,
    PegarTopUsuario,
    PegarPontosDoUsuario,
};