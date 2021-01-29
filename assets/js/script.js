function startLocalStorage(){

    if(localStorage.getItem("lampadaStatus") === null){
        localStorage.setItem("lampadaStatus", 0);
    }
}

function buttonLamp(){
    const botao = document.getElementById('button1');
    const lamapada = document.getElementById('lampada1');
    const estado = botao.value;
    var lampadaStatus = 0;
    if(estado === 'Ligada') {
        botao.value = "Desligada";
        lamapada.src = "https://romulolassoares.github.io/arduino/assets/images/lamp2.svg";
        lampadaStatus = 0;
        localStorage.setItem("lampadaStatus", lampadaStatus);
        window.location.href = "./?desliga";
    } else if (estado === 'Desligada') {
        botao.value = "Ligada";
        lamapada.src = "https://romulolassoares.github.io/arduino/assets/images/lamp.svg"
        lampadaStatus = 1;
        localStorage.setItem("lampadaStatus", lampadaStatus);
        window.location.href = "./?liga";
    }
}

function verifyLampStatus(){
    var statusVent = localStorage.getItem("lampadaStatus")
    const botao = document.getElementById('button1');
    const lamapada = document.getElementById('lampada1');
    if(statusVent === "1"){  
        botao.value = "Ligada";
        lamapada.src = "./assets/images/lamp.svg";
    }
}
