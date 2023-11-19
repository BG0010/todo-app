const { application } = require("express")

function completarTarefa(id) {
    //fetch - é uma maneira de se comunicar com API
    fetch("http://localhost:3000/completar", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'  //enviar uma informação em json - informação estruturada
        },
        body: JSON.stringify({ id })
    })

    window.location.reload() //atualiza a página após concluir uma tarefa
}

function descompletarTarefa(id) {
    fetch("http://localhost:3000/descompletar", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })

    window.location.reload()
}



function alterarTema() {
    const tema = localStorage.getItem("tema")
    const body = document.querySelector("body")
    const button = document.querySelector(".tema-button")


    if (tema) {
        let novoTema

        if (tema === "Light") {
            novoTema = "dark"
            button.innerHTML = `<img src="/imagens/sun-icon.png" alt="icone do sol">`
            body.classList.remove("Light")
            body.classList.add("dark")
        } else {
            novoTema = "Light"
            button.innerHTML = `<img src="/imagens/moon-icon.png" alt="icone de lua">`
            body.classList.remove("dark")
            body.classList.add("Light")
        }

        localStorage.setItem("tema", novoTema)
        return
    }

    localStorage.setItem("tema", "dark")
    body.classList.add("dark")
}

function verificarTema() {
    const tema = localStorage.getItem("tema")
    const body = document.querySelector("body")
    const button = document.querySelector(".tema-button")


    
    if (tema) {
        if (tema === "dark")
            body.classList.add("dark")
            button.innerHTML = `<img src="/imagens/sun-icon.png" alt="icone do sol">`
    } else {
        body.classList.add("Light")
        button.innerHTML = `<img src="/imagens/moon-icon.png" alt="icone de lua">`
    }
}

verificarTema()