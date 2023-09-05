const horasEL = document.querySelector("#horas");
const minutosEL = document.querySelector("#minutos");
const segundosEL = document.querySelector("#segundos");
const fulldate = document.querySelector("#fulldate")

let interval;

function startTimer() {
    if (!interval) {
        interval = setInterval(setTime, 1000)
    }
}

function setTime() {

    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    
    const day = now.getDate()
    const month = now.getMonth() + 1
    const year = now.getFullYear()
    
    fulldate.textContent = `${formatTime(day)}/${formatTime(month)}/${year}`
    horasEL.textContent = formatTime(hours)
    minutosEL.textContent = formatTime(minutes)
    segundosEL.textContent = formatTime(seconds)
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`
    } else {
        return time
    }
}
startTimer();