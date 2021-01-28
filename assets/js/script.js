function startLocalStorage(){

    if(localStorage.getItem("lampadaStatus") === null){
        localStorage.setItem("lampadaStatus", 0);
    }
    if(localStorage.getItem("ventiladorStatus") === null){
        localStorage.setItem("ventiladorStatus", 0);
    }
}
//Lampâda ---------------------------

function buttonLamp(){
    const botao = document.getElementById('button1');
    const lamapada = document.getElementById('lampada1');
    const estado = botao.value;
    var lampadaStatus = 0;
    if(estado === 'Desligar') {
        botao.value = "Ligar";
        lamapada.src = "https://romulolassoares.github.io/arduino/assets/images/lamp2.svg";
        lampadaStatus = 0;
        localStorage.setItem("lampadaStatus", lampadaStatus);
        window.location.href = "/?desliga";
    } else if (estado === 'Ligar') {
        botao.value = "Desligar";
        lamapada.src = "https://romulolassoares.github.io/arduino/assets/images/lamp.svg"
        lampadaStatus = 1;
        localStorage.setItem("lampadaStatus", lampadaStatus);
        window.location.href = "/?liga";
    }
}

//-----------------------------------


//Ventilador ---------------------------

function buttonFan(){
    const botao = document.getElementById('button2');
    const lampada = document.getElementById('lampada2');
    const estado2 = botao.value;
    console.log(estado2)
    var ventiladorStatus = 0;
    if(estado2 === 'Desligado') {
        botao.value = "Ligado";
        lampada.src = "./assets/images/lamp.svg";
        ventiladorStatus = 1;
        localStorage.setItem("ventiladorStatus", ventiladorStatus);
        verifyFanStatus();
    } else if (estado2 === 'Ligado') {
        botao.value = "Desligado";
        lampada.src = "./assets/images/lamp2.svg";
        ventiladorStatus = 0;
        localStorage.setItem("ventiladorStatus", ventiladorStatus);
        verifyFanStatus();
    }
}

function buttonFanPlus(){
    const botaoStatus = document.getElementById('buttonState');

    if(botaoStatus.value === 'Conectado') {
        window.location.href = "./pages/ventiladorStatus.html"
    } else if (botaoStatus.value === 'Desconectado') {
        alert('Desconectado do ventilador! Deseja Logar');
    }
}

function aumentaVel(){
    var val = document.getElementById("valor").textContent

    if (Number(val) == 0) {
        localStorage.setItem("ventiladorStatus", 1)
        verifyStatus2();
    }

    if ( Number(val) < 5) {
        val = Number(val)+1;
        document.getElementById("valor").textContent = val;
    } else {
        alert("Velocidade Maxima");
    }  
}

//-----------------------------------

//Verificadores ---------------------------

function verifyFanStatus() {
    const botaoStatus = document.getElementById('buttonState');
    var statusVent = localStorage.getItem("ventiladorStatus")

    const botao = document.getElementById('button2');
    const lampada = document.getElementById('lampada2');
    const estado2 = botao.value;

    if(statusVent === '1') {
        botaoStatus.value = 'Conectado';
        botaoStatus.style.background = "#008D5A";

        botao.value = "Ligado";
        lampada.src = "./assets/images/lamp.svg";
    } else if (statusVent === '0') {
        botaoStatus.value = 'Desconectado';
        botaoStatus.style.background = "#B50D0D";

        botao.value = "Desligado";
        lampada.src = "./assets/images/lamp2.svg";
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

//-----------------------------------


function surprise(){
    alert("É uma supresa. Dica: Ideias loca de Romin Rei")
}

