ListaPersonagem = [
    'albedo',
    'alhaitham',
    'aloy',
    'amber',
    'andarilho',
    'ayaka',
    'ayato',
    'baizhu',
    'barbara',
    'beidou',
    'bennett',
    'candace',
    'charlotte',
    'chevreuse',
    'chongyun',
    'collei',
    'cyno',
    'dehya',
    'diluc',
    'diona',
    'dori',
    'eula',
    'faruzan',
    'fischl',
    'freminet',
    'furina',
    'ganyu',
    'gorou',
    'heizou',
    'hutao',
    'itto',
    'jean',
    'kaeya',
    'kaveh',
    'kazuha',
    'keqing',
    'kirara',
    'klee',
    'kokomi',
    'kuki',
    'layla',
    'lisa',
    'lumine',
    'lynette',
    'lyney',
    'mika',
    'mona',
    'nahida',
    'navia',
    'neuvillette',
    'nilou',
    'ningguang',
    'noelle',
    'qiqi',
    'raiden',
    'razor',
    'rosaria',
    'sara',
    'sayu',
    'shenhe',
    'sucrose',
    'tartaglia',
    'thoma',
    'tighnari',
    'traveler',
    'venti',
    'wriothesley',
    'xiangling',
    'xiao',
    'xingqiu',
    'xinyan',
    'yae',
    'yanfei',
    'yaoyao',
    'yelan',
    'yoimiya',
    'yunjin',
    'zhongli'
]

var ponto = 0
var posicao = parseInt(Math.random() * ListaPersonagem.length)
var icon = ListaPersonagem[posicao]

function PegarPontosDoUsuario() {
    fetch("/ponto/PegarPontosDoUsuario", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nome
        }),
    }).then(function (resposta){
        if (resposta.ok) {
            resposta.json().then(function (informacao) {
                console.log(`Dados recebidos: ${JSON.stringify(informacao)}`);
                informacao.reverse();

                ponto = informacao;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }).catch(function (erro){
        console.log(erro);
    })
}

function Randomizar() {
    validarSessao()
    div_pontuacao.innerHTML = `
        usuario: <span id="b_usuario"></span><br><br>
        Pontos: ${ponto}
        `
    posicao = parseInt(Math.random() * ListaPersonagem.length);
    icon = ListaPersonagem[posicao];
    div_caracter_icon.innerHTML = `<img src="assets/imgs/iconCaracter/${icon}.webp" alt="${ListaPersonagem[posicao]}" height="115px">
    `
    nome_personagem_input.value = ""
}

function VerificarAcerto(event) {

    var NomePersonagem = nome_personagem_input.value
    var personagem = NomePersonagem.toLowerCase();

    if (event.keyCode === 13) {

        if (personagem == ListaPersonagem[posicao]) {
            ponto += 100
            div_pontuacao.innerHTML = `
            usuario: <span id="b_usuario"></span><br><br>
            Pontos: ${ponto}
            `
            img_paimon.src = 'assets/imgs/Background/acerto.webp'

            fetch("/ponto/atualizar", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/pontos.js
                    pontoServer: ponto
                }),
            }).then(function (resposta) {
                console.log("ESTOU NO THEN DO entrar()!")
            }).catch(function (erro) {
                console.log(erro);
            })

            Randomizar()

            setTimeout(function () {
                img_paimon.src = 'assets/imgs/Background/esperando.webp';
            }, 2000);
        } else {
            img_paimon.src = 'assets/imgs/Background/erro.webp'
            setTimeout(function () {
                img_paimon.src = 'assets/imgs/Background/esperando.webp';
            }, 3000);
            if (ponto >= 50) {
                ponto -= 50
                div_pontuacao.innerHTML = `
                    usuario: <span id="b_usuario"></span><br><br>
                    Pontos: ${ponto}
                `
                fetch("/ponto/atualizar", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        // crie um atributo que recebe o valor recuperado aqui
                        // Agora vá para o arquivo routes/pontos.js
                        pontoServer: ponto
                    }),
                }).then(function (resposta) {
                    console.log("ESTOU NO THEN DO entrar()!")
                }).catch(function (erro) {
                    console.log(erro);
                })
            }
        }
    }

}