const itemsForm = []
const form = document.getElementById("itemForm")

// Links 
document.getElementById("contatoLinkedin").onclick = function () {
    window.open("https://www.linkedin.com/in/raphael-brandão-969281225/")
}

document.getElementById("contatoGitHub").onclick = function () {
    window.open("https://github.com/raphaelnb");
}

document.getElementById("githubRodape").onclick = function () {
    window.open("https://github.com/raphaelnb");
}

document.getElementById("linkedinRodape").onclick = function () {
    window.open("https://www.linkedin.com/in/raphael-brandão-969281225/")
}


// Formuário e localStorage

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const email = evento.target.elements['email']
    const msg = evento.target.elements['msg']

    novaMensagem(nome.value, email.value, msg.value)

    nome.value = ""
    email.value = ""
    msg.value = ""
})

function novaMensagem(nome, email, msg) {
    const msgAtual = {
        "nome": nome,
        "email": email,
        "msg": msg
    }

    itemsForm.push(msgAtual)

    localStorage.setItem("item", JSON.stringify(itemsForm))
}

// Botão para deletar todas mensagens do localStorage
document.getElementById('deleteButton').onclick = function () {
    localStorage.clear()
}