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

var nome = sessionStorage.NOME_USUARIO;
var ponto = 0
var posicao = parseInt(Math.random() * ListaPersonagem.length)
var icon = ListaPersonagem[posicao]

div_pontuacao.innerHTML = `
    usuario: <span id="usuario_span">${nome}</span><br><br>
    Pontos: <span id="pontos_span">${ponto}</span>
    `

function PegarPontos() {
    
    fetch(`/usuario/PegarPontosDoUsuario`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: nome
        })
    })
        .then(function (resposta){
            console.log(resposta);

            if (resposta.ok) {            
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                pontos_span.innerHTML = `${json.pontosUsuario}`
                
                // plotarPontoUsuario();
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }).catch(function (erro){
        console.log(erro);
    })
}
PegarPontos()

function plotarPontoUsuario(){
    // let PontoUsuario = [];

    // for (i = 0; i < informacao.length; i += 1){
    //     var registro = informacao[i];
    //     PontoUsuario.push(registro.pontos);
    // }

    // ponto = PontoUsuario[0]

    // div_pontuacao.innerHTML = `
    //     usuario: <span id="b_usuario">${sessionStorage.NOME_USUARIO}</span><br><br>
    //     Pontos: ${ponto}
    //     `
}

function Randomizar() {
    
    posicao = parseInt(Math.random() * ListaPersonagem.length);
    icon = ListaPersonagem[posicao];
    div_caracter_icon.innerHTML = `<img src="assets/imgs/iconCaracter/${icon}.webp" alt="${ListaPersonagem[posicao]}" height="115px">
    `
    nome_personagem_input.value = ""

    pontos_span.innerHTML = ponto
    usuario_span.innerHTML = sessionStorage.NOME_USUARIO;

    // div_pontuacao.innerHTML = `
    //     usuario: <span id="b_usuario">${sessionStorage.NOME_USUARIO}</span><br><br>
    //     Pontos: ${ponto}
    //     `
}

function VerificarAcerto(event) {

    var NomePersonagem = nome_personagem_input.value
    var personagem = NomePersonagem.toLowerCase();
    var nome = sessionStorage.NOME_USUARIO

    if (event.keyCode === 13) {

        if (personagem == ListaPersonagem[posicao]) {
            ponto += 100
            // div_pontuacao.innerHTML = `
            // usuario: <span id="b_usuario"></span><br><br>
            // Pontos: ${ponto}
            // `
            img_paimon.src = 'assets/imgs/Background/acerto.webp'

            fetch("/usuario/atualizar", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/pontos.js
                    pontoServer: ponto,
                    nomeServer: nome
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

                pontos_span.innerHTML = ponto
                // div_pontuacao.innerHTML = `
                //     usuario: <span id="b_usuario"></span><br><br>
                //     Pontos: ${ponto}
                // `
                fetch("/usuario/atualizar", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        // crie um atributo que recebe o valor recuperado aqui
                        // Agora vá para o arquivo routes/pontos.js
                        pontoServer: ponto,
                        nomeServer: nome
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