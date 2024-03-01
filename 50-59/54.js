function pokerHands(arr) {
    let result = 0

    function Royal_Flush(win, loser){
        const test = (hand) => {
            let exp = /^(?=.*T([a-zA-Z]))(?=.*Q\1)(?=.*K\1)(?=.*A\1)(?=.*J\1)/
            if(exp.test(hand)){
                return true
            } else {
                return false
            }
        }

        if(test(win) && !test(loser)){
            return true
        } else if (!test(win) && test(loser)){
            return false
        } else {
            return 'empate'
        }
    }

    function Straight_Flush(win, loser){
        const test = (hand) => {
            const ordem = { '2': 0, '3': 1, '4': 2, '5': 3, '6': 4, '7': 5, '8': 6, '9': 7, 't': 8, 'j': 9, 'q': 10, 'k': 11 }
            const pares = hand.split(' ')

            for (let i = 1; i < pares.length; i++) {
                const valorAnterior = pares[i - 1][0]
                const valorAtual = pares[i][0]
            
                if (ordem[valorAnterior] > ordem[valorAtual]) {
                    return 0
                }
            }
          
            return ordem[pares[4][0]]
        }

        if(test(win) > test(loser)){
            return true
        } else if (test(win) < test(loser)){
            return false
        } else {
            return 'empate'
        }
    }

    function Four_of_a_Kind(win, loser){

    }

    function Full_House(win, loser){

    }

    function Flush(win, loser){

    }

    function Straight(win, loser){

    }

    function Three_of_a_Kind(win, loser){

    }

    function Two_Pairs(win, loser){

    }

    function One_Pair(win, loser){

    }

    function High_Card(win, loser){

    }

    function Definir(game){
        let gamePlayer1 = game.slice(0, 14)
        let gamePlayer2 = game.slice(15)
        
        if(Royal_Flush(gamePlayer1, gamePlayer2) === true){
            return true
        } else if (Royal_Flush(gamePlayer1, gamePlayer2) === false){
            return false
        } 
        if (Straight_Flush(gamePlayer1, gamePlayer2) === true){
            return true
        } else if (Straight_Flush(gamePlayer1, gamePlayer2) === false){
            return false
        } 
        if(Four_of_a_Kind(gamePlayer1, gamePlayer2) === true){
            return true
        } else if (Four_of_a_Kind(gamePlayer1, gamePlayer2) === false){
            return false
        } 
        if(Full_House(gamePlayer1, gamePlayer2) === true){
            return true
        } else if (Full_House(gamePlayer1, gamePlayer2) === false){
            return false
        } 
        if(Flush(gamePlayer1, gamePlayer2) === true){
            return true
        } else if (Flush(gamePlayer1, gamePlayer2) === false){
            return false
        } 
        if(Straight(gamePlayer1, gamePlayer2) === true){
            return true
        } else if (Straight(gamePlayer1, gamePlayer2) === false){
            return false
        } 
        if(Three_of_a_Kind(gamePlayer1, gamePlayer2) === true){
            return true
        } else if (Three_of_a_Kind(gamePlayer1, gamePlayer2) === false){
            return false
        } 
        if(Two_Pairs(gamePlayer1, gamePlayer2) === true){
            return true
        } else if (Two_Pairs(gamePlayer1, gamePlayer2) === false){
            return false
        } 
        if(One_Pair(gamePlayer1, gamePlayer2) === true){
            return true
        } else if (One_Pair(gamePlayer1, gamePlayer2) === false){
            return false
        } 
        if(High_Card(gamePlayer1, gamePlayer2) === true){
            return true
        } else {
            return false
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(Definir(arr[i])){
            result++
        }
    }

    return result
}
  
const fs = require('fs')

const nomeArquivo = '0054_poker.txt'
let Arr = []

try {
    const conteudo = fs.readFileSync(nomeArquivo, 'utf8')
    Arr = conteudo.split('\n')
} catch (e) {
    console.error('Erro ao ler o arquivo:', e.message)
}

pokerHands(Arr)