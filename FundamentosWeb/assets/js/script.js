let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapaShopping')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    
    if(nome.value.length <= 2){
        txtNome.innerHTML = 'O nome inserido é inválido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Quem escolheu seu nome tem bom gosto'
        txtNome.style.color = 'green'
        nomeOk = true
        }    
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'O email inserido é inválido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'Seu e-mail é válido, isso aí'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Esse texto muito grande pra ler, no máximo 100 caracteres por favor'
        txtAssunto.style.color = 'red'
    }
    else{
        txtAssunto.innerHTML = 'Obrigada por falar comigo, em breve eu retorno'
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('O formúlario foi enviado com sucesso, parabéns!!')
    }
    else{
        alert ('Algum campo foi preenchido incorretamente, verifique e tente denovo por favor')
    }
}

function mapaZoom(){
    mapa.style.width = '600px'
    mapa.style.height = '375px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}