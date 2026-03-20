const player1 = '❌'
const player2 = '⭕'
let jogadorAtual = player1
let fimDoJogo = false
let pontosX = 0
let pontosO = 0

const btn = document.querySelector("#btnRestart")
const jogo = document.getElementsByClassName('espaco')
const mensagem = document.getElementsByClassName('winner')[0]
const ptsX = document.getElementById('pontosX')
const ptsO = document.getElementById('pontosO')
const linha = document.getElementById('linha')

function jogar() {
    for (let i = 0; i < jogo.length; i++) {
        const espaco = jogo[i];

        espaco.addEventListener('click', function () {

            if (fimDoJogo) {
                return
            }

            if (espaco.innerHTML === '') {
                espaco.innerHTML = jogadorAtual
                if (!checarVitoria()) {
                    checarEmpate()
                }
                mudarJogador()
            }

            pontos()

        })
    }
}

jogar()

function checarVitoria() {
    let vitoria = false

    if (jogo[0].innerHTML !== '' && jogo[0].innerHTML === jogo[1].innerHTML && jogo[1].innerHTML === jogo[2].innerHTML) {
        mensagem.innerHTML = `${jogadorAtual} venceu!`
        fimDoJogo = true
        vitoria = true
        linha.style.display = 'flex'
        linha.style.position = 'relative'
        linha.style.transform = 'rotate(0deg)'
        linha.style.top = '-548px'
    }
    if (jogo[3].innerHTML !== '' && jogo[3].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[5].innerHTML) {
        mensagem.innerHTML = `${jogadorAtual} venceu!`
        fimDoJogo = true
        vitoria = true
        linha.style.display = 'flex'
        linha.style.position = 'relative'
        linha.style.transform = 'rotate(0deg)'
        linha.style.top = '-447px'
    }
    if (jogo[6].innerHTML !== '' && jogo[6].innerHTML === jogo[7].innerHTML && jogo[7].innerHTML === jogo[8].innerHTML) {
        mensagem.innerHTML = `${jogadorAtual} venceu!`
        fimDoJogo = true
        vitoria = true
        linha.style.display = 'flex'
        linha.style.position = 'relative'
        linha.style.transform = 'rotate(0deg)'
        linha.style.top = '-346px'
    }
    if (jogo[0].innerHTML !== '' && jogo[0].innerHTML === jogo[3].innerHTML && jogo[3].innerHTML === jogo[6].innerHTML) {
        mensagem.innerHTML = `${jogadorAtual} venceu!`
        fimDoJogo = true
        vitoria = true
        linha.style.display = 'flex'
        linha.style.position = 'relative'
        linha.style.transform = 'rotate(90deg)'
        linha.style.top = '-440px'
        linha.style.left = '-104px'
    }
    if (jogo[1].innerHTML !== '' && jogo[1].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[7].innerHTML) {
        mensagem.innerHTML = `${jogadorAtual} venceu!`
        fimDoJogo = true
        vitoria = true
        linha.style.display = 'flex'
        linha.style.position = 'relative'
        linha.style.transform = 'rotate(90deg)'
        linha.style.top = '-440px'
        linha.style.left = '0px'
    }
    if (jogo[2].innerHTML !== '' && jogo[2].innerHTML === jogo[5].innerHTML && jogo[5].innerHTML === jogo[8].innerHTML) {
        mensagem.innerHTML = `${jogadorAtual} venceu!`
        fimDoJogo = true
        vitoria = true
        linha.style.display = 'flex'
        linha.style.position = 'relative'
        linha.style.transform = 'rotate(90deg)'
        linha.style.top = '-440px'
        linha.style.left = '104px'
    }
    if (jogo[0].innerHTML !== '' && jogo[0].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[8].innerHTML) {
        mensagem.innerHTML = `${jogadorAtual} venceu!`
        fimDoJogo = true
        vitoria = true
        linha.style.display = 'flex'
        linha.style.position = 'relative'
        linha.style.transform = 'rotate(45deg)'
        linha.style.width = '460px'
        linha.style.top = '-445px'
        linha.style.left = '-53px'
    }
    if (jogo[2].innerHTML !== '' && jogo[2].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[6].innerHTML) {
        mensagem.innerHTML = `${jogadorAtual} venceu!`
        fimDoJogo = true
        vitoria = true
        linha.style.display = 'flex'
        linha.style.position = 'relative'
        linha.style.transform = 'rotate(-45deg)'
        linha.style.width = '460px'
        linha.style.top = '-445px'
        linha.style.left = '-53px'
    }

    return vitoria
}

function checarEmpate() {
    let deuEmpate = true
    for (let i = 0; i < jogo.length; i++) {
        const espaco = jogo[i];
        if (espaco.innerHTML === '') {
            deuEmpate = false
        }
    }

    if (deuEmpate) {
        mensagem.innerHTML = 'Empate'
    }
}

function mudarJogador() {
    if (jogadorAtual === player1) {
        jogadorAtual = player2
    } else {
        jogadorAtual = player1
    }
}

ptsX.innerHTML = `${player1} - ${pontosX}`
ptsO.innerHTML = `${player2} - ${pontosO}`

function pontos() {
    if (mensagem.innerHTML === '❌ venceu!') {
        pontosX += 1
        ptsX.innerHTML = `${player1} - ${pontosX}`
    }

    if (mensagem.innerHTML === '⭕ venceu!') {
        pontosO += 1
        ptsO.innerHTML = `${player2} - ${pontosO}`
    }
}

btn.addEventListener("click", function () {
    for (let i = 0; i < jogo.length; i++) {
        const espaco = jogo[i];
        espaco.innerHTML = ''
    }

    mensagem.innerHTML = ''
    fimDoJogo = false
    linha.style.display = 'none'
    linha.style.position = 'absolute'
    linha.style.top = '0px'
    linha.style.left = '0px'
    linha.style.width = '350px'
})
