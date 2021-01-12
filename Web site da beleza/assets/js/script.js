/*
Js: Case Sensitive.

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
Por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let Name = window.document.getElementById('Name')
let email = document.querySelector('#email')
let Assunto = document.querySelector('#Assunto')
let nameOk = false
let emailOk = false
let assuntoOk = false
let map = document.querySelector('#map')

Name.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (Name.value.length < 3) {
        txt.innerHTML = 'Invalid'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Ok.'
        txt.style.color = 'green'
        nameOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Invalid Email'
        txtEmail.style.color = 'red'

    } else { 
        txtEmail.innerHTML = 'Ok.'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (Assunto.value.length >= 101) {
        txtAssunto.innerHTML = 'Caracter limit = 100'
        txtAssunto.style.backgroundColor = 'red'
        txtAssunto.style.display = 'block'

    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
function send() {
    if (nameOk == true && emailOk == true && assuntoOk == true) {
        alert ('Elogio enviado com sucesso.')
    } else {
        alert ('Preencha os dados corretamente antes de enviar.')
    }
}

function mapZoom() {
    map.style.width = '800px'
    map.style.height = '600px'
}

function mapNormal() {
    map.style.width = '400px'
    map.style.height = '300px'
}
