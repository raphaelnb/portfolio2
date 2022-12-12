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

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

})