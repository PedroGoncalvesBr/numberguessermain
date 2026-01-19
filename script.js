let bet = 0
let erros = 0

function refresh() {
    erros = 0
    bet = parseInt(Math.random() * 100)
}

function verifyNumber() {
    let number = document.getElementById("inputValue")
    let valorDigitado = number.value

    if (valorDigitado < 1 || valorDigitado > 100) {
        alert("O NÚMERO PRECISA SER DE 1 A 100")
        return
    }

    if (valorDigitado < bet) {
        alert("❌ O NÚMERO É MAIOR")
        erros++
    } else if (valorDigitado > bet) {
        alert("❌ O NÚMERO É MENOR")
        erros++
    } else {
        alert("✅ VOCÊ ACERTOU, O NÚMERO ERA " + bet)
        alert("VOCÊ TEVE " + erros + " ERROS")
        refresh()
    }
}

refresh()