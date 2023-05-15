const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    
    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = sec;
})
