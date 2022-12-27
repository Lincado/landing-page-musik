//menu expansível
const closeMenu = document.getElementById('close-menu')
const header = document.querySelector(".header")

function openAndClose(){
    let checkTrue = closeMenu.checked

    if(checkTrue) {
        header.classList.toggle('close-header')
    } else {
        header.classList.toggle('close-header')
    }
} 
closeMenu.addEventListener('click', openAndClose)


//contagem regressiva
const countdown = document.querySelector('.countdown')

let date = new Date("Jan 1, 2023 00:00:00").getTime()
let interval = setInterval(function (){
    let now = new Date().getTime()
    let t = date - now
    let days = Math.floor( t /(1000 * 60 * 60 * 24))
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((t % (1000 * 60) /1000))
    const countdown = document.querySelector(".countdown").innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S `
    if(t < 0) {
        clearInterval(now)
        document.querySelector(countdown).innerHTML = "EXPIRED"
    }
}, 1000)

