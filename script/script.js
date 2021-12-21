const API_URL = "https://rickandmortyapi.com/api/character"

   /* "locations": "https://rickandmortyapi.com/api/location",
    "episodes": "https://rickandmortyapi.com/api/episode"*/

const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")

const getPersonajes = (url) => {
    const peticion = fetch(url)
    peticion.then(resp => resp.json())
        .then(data => MostrarPersonaje(data.results))
        .catch(error =>
            swal.fire({
                title: 'Hubo un error con el servidor',
                text: 'Intente de nuevo mas tarde',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            }))
}

getPersonajes(API_URL);

function MostrarPersonaje(showBody){
    main.innerHTML = ""

    showBody.forEach((body) => {
        const { name, gender, origin, location,image } = body

        const divPersonaje=document.createElement("div")
        divPersonaje.classList.add("card")
        divPersonaje.innerHTML  = `
        <img src="${image }"alt="">
        <div class="card-info">
            <h3>${name}</h3>
            <span>${gender}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${origin + location}
        </div>
        `
        main.appendChild(divPersonaje)
    })
}

