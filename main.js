
let a1 = window.document.getElementById('a_um')
let a2 = window.document.getElementById('a_dois')
let a3 = window.document.getElementById('a_tres')
let a4 = window.document.getElementById('a_quatro')
let a5 = window.document.getElementById('a_cinco')
let a6 = window.document.getElementById('a_seis')
let a7 = window.document.getElementById('a_sete')
let a8 = window.document.getElementById('a_oito')
let a9 = window.document.getElementById('a_nove')
let turno = window.document.getElementById('turno')
let pontos = window.document.getElementById('placar')

let area1 = null
let area2 = null
let area3 = null
let area4 = null
let area5 = null
let area6 = null
let area7 = null
let area8 = null
let area9 = null
let vencedor
let pontos_X = 0
let pontos_O = 0
let aux = 0

function marca_a1() {
    if(aux % 2 == 0){
        area1 = "X"
        a1.innerHTML = "X"
        turno.innerHTML = "<h2>É a vez do jogador O!</h2>"
    }else{
        area1 = "O"
        a1.innerHTML = "O"
        turno.innerHTML = "<h2>É a vez do jogador X!</h2>"
    }

    aux++
}

function marca_a2() {
    if(aux % 2 == 0){
        area2 = "X"
        a2.innerHTML = "X"
        turno.innerHTML = "<h2>É a vez do jogador O!</h2>"
    }else{
        area2 = "O"
        a2.innerHTML = "O"
        turno.innerHTML = "<h2>É a vez do jogador X!</h2>"
    }

    aux++
}

function marca_a3() {
    if(aux % 2 == 0){
        area3 = "X"
        a3.innerHTML = "X"
        turno.innerHTML = "<h2>É a vez do jogador O!</h2>"
    }else{
        area3 = "O"
        a3.innerHTML = "O"
        turno.innerHTML = "<h2>É a vez do jogador X!</h2>"
    }
    
    aux++
}

function marca_a4() {
    if(aux % 2 == 0){
        area4 = "X"
        a4.innerHTML = "X"
        turno.innerHTML = "<h2>É a vez do jogador O!</h2>"
    }else{
        area4 = "O"
        a4.innerHTML = "O"
        turno.innerHTML = "<h2>É a vez do jogador X!</h2>"
    }
    
    aux++
}

function marca_a5() {
    if(aux % 2 == 0){
        area5 = "X"
        a5.innerHTML = "X"
        turno.innerHTML = "<h2>É a vez do jogador O!</h2>"
    }else{
        area5 = "O"
        a5.innerHTML = "O"
        turno.innerHTML = "<h2>É a vez do jogador X!</h2>"
    }
    
    aux++
}

function marca_a6() {
    if(aux % 2 == 0){
        area6 = "X"
        a6.innerHTML = "X"
        turno.innerHTML = "<h2>É a vez do jogador O!</h2>"
    }else{
        area6 = "O"
        a6.innerHTML = "O"
        turno.innerHTML = "<h2>É a vez do jogador X!</h2>"
    }
    
    aux++
}

function marca_a7() {
    if(aux % 2 == 0){
        area7 = "X"
        a7.innerHTML = "X"
        turno.innerHTML = "<h2>É a vez do jogador O!</h2>"
    }else{
        area7 = "O"
        a7.innerHTML = "O"
        turno.innerHTML = "<h2>É a vez do jogador X!</h2>"
    }
    
    aux++
}

function marca_a8() {
    if(aux % 2 == 0){
        area8 = "X"
        a8.innerHTML = "X"
        turno.innerHTML = "<h2>É a vez do jogador O!</h2>"
    }else{
        area8 = "O"
        a8.innerHTML = "O"
        turno.innerHTML = "<h2>É a vez do jogador X!</h2>"
    }
    
    aux++
}

function marca_a9() {
    if(aux % 2 == 0){
        area9 = "X"
        a9.innerHTML = "X"
        turno.innerHTML = "<h2>É a vez do jogador O!</h2>"
    }else{
        area9 = "O"
        a9.innerHTML = "O"
        turno.innerHTML = "<h2>É a vez do jogador X!</h2>"
    }
    
    aux++
}

function pontuacao() {
    if(vencedor == "X") {
        pontos_X++
        pontos.innerHTML = `<h3>Pontuação<br><br> 
                                Jogador X: ${pontos_X} <br>
                                jogador O: ${pontos_O}
                            </h3>`
    }else if(vencedor == "O"){
        pontos_O++
        pontos.innerHTML = `<h3>Pontuação<br><br> 
                                Jogador X: ${pontos_X} <br>
                                jogador O: ${pontos_O}
                            </h3>`
    }
}

function resetar() {
    a1.innerHTML = ""
    a2.innerHTML = ""
    a3.innerHTML = ""
    a4.innerHTML = ""
    a5.innerHTML = ""
    a6.innerHTML = ""
    a7.innerHTML = ""
    a8.innerHTML = ""
    a9.innerHTML = ""

    area1 = null
    area2 = null
    area3 = null
    area4 = null
    area5 = null
    area6 = null
    area7 = null
    area8 = null
    area9 = null
    
    aux = 0

    turno.innerHTML = "<h2>É a vez do jogador X!</h2>"
}

function jogo(){
    if(area1 == area2 && area2 == area3 && area1 != null){ //linha 1
        turno.innerHTML = `<h2>Vitória do jogador ${area1}!</h2>`
        vencedor = area1
        pontuacao()

    }else if(area4 == area5 && area5 == area6 && area4 != null){ //linha 2
        turno.innerHTML = `<h2>Vitória do jogador ${area4}!</h2>`
        vencedor = area4
        pontuacao()

    }else if(area7 == area8 && area8 == area9 && area7 != null){ //linha 3
        turno.innerHTML = `<h2>Vitória do jogador ${area7}!</h2>`
        vencedor = area7
        pontuacao()

    }else if(area1 == area4 && area4 == area7 && area1 != null){ //vertical 1
        turno.innerHTML = `<h2>Vitória do jogador ${area1}!</h2>` 
        vencedor = area1
        pontuacao()

    }else if(area2 == area5 && area5 == area8 && area2 != null){ //vertical 2 
        turno.innerHTML = `<h2>Vitória do jogador ${area2}!</h2>`
        vencedor = area2
        pontuacao()

    }else if(area3 == area6 && area6 == area9 && area3 != null){ //vertical 3
        turno.innerHTML = `<h2>Vitória do jogador ${area3}!</h2>`
        vencedor = area3
        pontuacao()

    }else if(area1 == area5 && area5 == area9 && area1 != null){ //diagonal esquerda
        turno.innerHTML = `<h2>Vitória do jogador ${area1}!</h2>`
        vencedor = area1
        pontuacao()

    }else if(area3 == area5 && area5 == area7 && area3 != null){ //diagonal direita
        turno.innerHTML = `<h2>Vitória do jogador ${area3}!</h2>`
        vencedor = area3
        pontuacao()

    }else{ //nenhuma opçãoS
        turno.innerHTML = `<h2>Deu velha!</h2>`
        vencedor = "0"
    }
}

