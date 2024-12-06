// Método GET -> Obtém as informações da API

// Método POST -> Enviar informações para a API

// Método PUT -> Atualiza informações da API

// Método DELETE -> Apaga as informações da API


function buscaPersonagem() {
    var numero = document.getElementById("input-numero").value
    var personagem = document.getElementById("personagem")
    var textPersonagem = document.getElementById("text-personagem")
    const url = "https://swapi.dev/api/people/" + numero

    fetch(url)
        .then(e => e.json())
        .then(data => {

            personagem.innerHTML = data["name"]
            textPersonagem.style.display = "block"

        })


}

function buscaTodosPersonagens() {

    const url = "https://swapi.dev/api/people/"
    var nome, genero, peso, altura
    var todosPersonagens = document.querySelector(".todos-personagens")
    var cardPersonagem = ""
    fetch(url)
        .then(e => e.json())
        .then(data => {


            data.results.map(personagem => {
                console.log(personagem.name)
                nome = personagem.name
                genero = personagem.gender
                peso = personagem.mass
                altura = personagem.height

                cardPersonagem += `
                <div class="cardPersonagem">
                    <p>Nome: <span id="nome"> ${nome} </span> </p>
                    <p>Genero: <span id="genero"> ${genero} </span> </p>
                    <p>Peso: <span id="peso"> </span> ${peso} </p>
                    <p>Altura: <span id="altura"> </span>${altura}</p>
                </div>`

            })
            todosPersonagens.innerHTML = cardPersonagem
        })




}