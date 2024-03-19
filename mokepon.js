let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){
    let sectionSeleccionaAtaque = document.getElementById("Seleccion-ataque")
    sectionSeleccionaAtaque.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", SeleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click",ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click",reinciarJuego)

}

function SeleccionarMascotaJugador(){
    let sectionSeleccionaMascota = document.getElementById("Seleccion-de-mascota")
    sectionSeleccionaMascota.style.display = "none"

    let sectionSeleccionaAtaque = document.getElementById("Seleccion-ataque")
    sectionSeleccionaAtaque.style.display = "block"

    let sectionReiniciar = document.getElementById("Reiniciar")
    sectionReiniciar.style.display = "none"


    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }
    else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }
    else{
        alert("Selecciona una mascota")
    }

    SeleccionarMascotaEnemigo()
        
}

function SeleccionarMascotaEnemigo(){

        let mascotaAleatoria = aleatorio(1,3)
        let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

        if(mascotaAleatoria == 1){
            spanMascotaEnemigo.innerHTML = "Hipodoge"
        }
        else if(mascotaAleatoria == 2){
            spanMascotaEnemigo.innerHTML = "Capipepo"
        }
        else if(mascotaAleatoria == 3){
            spanMascotaEnemigo.innerHTML = "Ratigueya"
        }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()

}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }
    else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }
    else if(ataqueAleatorio == 3){
        ataqueEnemigo = "TIERRA" 
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")
    }
    else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("Ganaste")
        vidasEnemigo -- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("Ganaste")
        vidasEnemigo -- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("Ganaste")
        vidasEnemigo -- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else{
        crearMensaje("Perdiste")
        vidasJugador -- 
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("Felicidades Ganaste!!!😊")

    }
    else if(vidasJugador == 0){
        crearMensajeFinal("Lo siento perdiste😢")
    }
    
}

function crearMensaje(resultado){
        let sectionMensajes = document.getElementById("Mensajes")
        let parrafo = document.createElement("p")
        parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + " las mascota del enemigo ataco con " + ataqueEnemigo + " " + resultado
        
        sectionMensajes.appendChild(parrafo)
}


function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("Mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("Reiniciar")
    sectionReiniciar.style.display = "block"
}

function reinciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
{

}