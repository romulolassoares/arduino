function startLocalStorage(){

    if(localStorage.getItem("lampadaStatus") === null){
        localStorage.setItem("lampadaStatus", 0);
    }
}

function buttonLamp(){
    const botao = document.getElementById('button');
    const lamapada = document.getElementById('lampada1');
    const estado = botao.value;
    var lampadaStatus = 0;
    if(estado === 'Desligar') {
        botao.value = "Ligar";
        lamapada.src = "https://romulolassoares.github.io/arduino/assets/images/lamp2.svg";
        lampadaStatus = 0;
        localStorage.setItem("lampadaStatus", lampadaStatus);
        window.location.href = "arduino/?desliga";
    } else if (estado === 'Ligar') {
        botao.value = "Desligar";
        lamapada.src = "https://romulolassoares.github.io/arduino/assets/images/lamp.svg"
        lampadaStatus = 1;
        localStorage.setItem("lampadaStatus", lampadaStatus);
        window.location.href = "arduino/?liga";
    }
    verifyLampStatus()
}

//-----------------------------------

//Verificadores ---------------------------
function verifyLampStatus(){
    var statusVent = localStorage.getItem("lampadaStatus")
    const botao = document.getElementById('button');
    const lamapada = document.getElementById('lampada1');
    if(statusVent === "1"){  
        botao.value = "Desligar";
        lamapada.src = "https://romulolassoares.github.io/arduino/assets/images/lamp.svg";
    }
}

