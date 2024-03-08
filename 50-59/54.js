function pokerHands(arr) {
    let result = 0, count = 0
    const ordem = { '2': 0, '3': 1, '4': 2, '5': 3, '6': 4, '7': 5, '8': 6, '9': 7, 'T': 8, 'J': 9, 'Q': 10, 'K': 11, 'A': 12}

    function type(conjunt){
        const pares = conjunt.split(' ')
        let value = pares[0][1]

        for(let i = 1; i < pares.length; i++){
            if(value != pares[i][1]){
                return false
            }
        }

        return true
    }

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
            if(!type(hand)){
                return -1
            }

            const pares = hand.split(' ')
            let see = []

            for(let i = 0; i < pares.length; i++) {
                see.push(ordem[pares[i][0]])
            }

            see.sort((a, b) => a - b)
            for (let i = 1; i < pares.length; i++) {
                const valorAnterior = see[i - 1][0]
                const valorAtual = see[i][0]
            
                if (valorAnterior + 1 != valorAtual) {
                    return -1
                }
            }

            return ordem[see[4][0]]
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
        const test = (hand) => {
            const pares = hand.split(' ')
            let values = [], quantity = []

            for (let i = 0; i < pares.length; i++) {    
                if (values.indexOf(ordem[pares[i][0]]) == -1) {
                    values.push(ordem[pares[i][0]])
                    quantity.push(1)
                } else {
                    quantity[values.indexOf(ordem[pares[i][0]])]++
                }
            }

            if(Math.max(...quantity) == 4){
                return values[quantity.indexOf(4)]
            }

            return -1
        }

        if(test(win) > test(loser)){     
            return true
        } else if (test(win) < test(loser)){
            return false
        } else {
            return 'empate'
        }
    }

    function Full_House(win, loser){
        const test = (hand) => {
            const pares = hand.split(' ')
            let values = [], quantity = []

            for (let i = 0; i < pares.length; i++) {    
                if (values.indexOf(ordem[pares[i][0]]) == -1) {
                    values.push(ordem[pares[i][0]])
                    quantity.push(1)
                } else {
                    quantity[values.indexOf(ordem[pares[i][0]])]++
                }
            }
          
            if(values.length == 2){
                return values[quantity.indexOf(3)]
            }

            return -1
        }

        if(test(win) > test(loser)){
            return true
        } else if (test(win) < test(loser)){
            return false
        } else {
            return 'empate'
        }
    }

    function Flush(win, loser){
        const test = (hand) => {
           if(type(hand)){
                const pares = hand.split(' ')
                let nums = []

                for(let par of pares){
                    nums.push(ordem[par[0]])
                }

                return Math.max(...nums) 
           } else {
                return -1
           }
        }

        if(test(win) > test(loser)){
            return true
        } else if (test(win) < test(loser)){
            return false
        } else {
            return 'empate'
        }
    }

    function Straight(win, loser){
        const test = (hand) => {
            const pares = hand.split(' ')
            let see = []

            for(let i = 0; i < pares.length; i++) {
                see.push(ordem[pares[i][0]])
            }

            see.sort((a, b) => a - b)

            for(let i = 1; i < see.length; i++){
                const valorAnterior = see[i - 1]
                const valorAtual = see[i]

                if (valorAnterior + 1 != valorAtual) {
                    return -1
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

    function Three_of_a_Kind(win, loser){
        const test = (hand) => {
            const pares = hand.split(' ')
            let values = [], quantity = []

            for (let i = 0; i < pares.length; i++) {    
                if (values.indexOf(ordem[pares[i][0]]) == -1) {
                    values.push(ordem[pares[i][0]])
                    quantity.push(1)
                } else {
                    quantity[values.indexOf(ordem[pares[i][0]])]++
                }
            }
          
            if(Math.max(...quantity) == 3){
                return values[quantity.indexOf(3)]
            }

            return -1
        }

        if(test(win) > test(loser)){
            return true
        } else if (test(win) < test(loser)){
            return false
        } else {
            return 'empate'
        }
    }

    function Two_Pairs(win, loser){
        const test = (hand) => {
            const pares = hand.split(' ')
            let values = [], quantity = []

            for (let i = 0; i < pares.length; i++) {    
                if (values.indexOf(ordem[pares[i][0]]) == -1) {
                    values.push(ordem[pares[i][0]])
                    quantity.push(1)
                } else {
                    quantity[values.indexOf(ordem[pares[i][0]])]++
                }
            }
          
            if(quantity.length == 3){
                values[quantity.indexOf(1)] = 0
                return Math.max(...values)
            }

            return -1
        }

        if(test(win) > test(loser)){
            return true
        } else if (test(win) < test(loser)){
            return false
        } else {
            return 'empate'
        }
    }

    function One_Pair(win, loser){
        const test = (hand) => {
            const pares = hand.split(' ')
            let values = [], quantity = []

            for (let i = 0; i < pares.length; i++) {    
                if (values.indexOf(ordem[pares[i][0]]) == -1) {
                    values.push(ordem[pares[i][0]])
                    quantity.push(1)
                } else {
                    quantity[values.indexOf(ordem[pares[i][0]])]++
                }
            }
          
            if(quantity.length == 4){
                return values[quantity.indexOf(2)]
            }

            return -1
        }

        if(test(win) > test(loser)){
            return true
        } else if (test(win) < test(loser)){
            return false
        } else {
            return 'empate'
        }
    }

    function High_Card(win, loser){
        const test = (hand) => {
            const pares = hand.split(' ')
            let values = []

            for (let i = 0; i < pares.length; i++) {    
                values.push(ordem[pares[i][0]])
            }
            return Math.max(...values)
        }

        if(test(win) > test(loser)){
            return true
        } else {
            return false
        }
    }

    function Definir(game){
        let gamePlayer1 = game.slice(0, 14)
        let gamePlayer2 = game.slice(15)
        
        const rRoyar = Royal_Flush(gamePlayer1, gamePlayer2)

        if(rRoyar === true || rRoyar === false){
            return rRoyar
        }

        const rStraightFlush = Straight_Flush(gamePlayer1, gamePlayer2)

        if (rStraightFlush === true || rStraightFlush == false){
            return rStraightFlush
        }

        const rFour_kind = Four_of_a_Kind(gamePlayer1, gamePlayer2)

        if(rFour_kind === true || rFour_kind === false){
            return rFour_kind
        }

        const rFullHouse = Full_House(gamePlayer1, gamePlayer2)

        if(rFullHouse === true || rFullHouse === false){
            return rFullHouse
        }

        const rFlush = Flush(gamePlayer1, gamePlayer2)

        if(rFlush === true || rFlush === false){
            return rFlush
        }

        const rStraight = Straight(gamePlayer1, gamePlayer2)

        if(rStraight === true || rStraight === false){
            return rStraight
        }

        const rThreeKind = Three_of_a_Kind(gamePlayer1, gamePlayer2)

        if(rThreeKind === true || rThreeKind === false){
            return rThreeKind
        }

        const r2P = Two_Pairs(gamePlayer1, gamePlayer2)

        if(r2P === true || r2P === false){
            return r2P
        }

        const r1P = One_Pair(gamePlayer1, gamePlayer2)

        if(r1P === true || r1P === false){
            return r1P
        }

        return High_Card(gamePlayer1, gamePlayer2)
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

console.log(pokerHands(Arr))