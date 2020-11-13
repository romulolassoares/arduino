function button1(){
    const botao = document.getElementById('button1');
    const lamapada = document.getElementById('lampada1');
    const estado = botao.value;
    var lampadaStatus = 0;
    if(estado === 'Ligada') {
        botao.value = "Desligada";
        lamapada.src = "./assets/images/lamp2.svg";
        lampadaStatus = 0;
        localStorage.setItem("lampadaStatus", lampadaStatus);
    } else if (estado === 'Desligada') {
        botao.value = "Ligada";
        lamapada.src = "./assets/images/lamp.svg"
        lampadaStatus = 1;
        localStorage.setItem("lampadaStatus", lampadaStatus);
    }
}

function button2(){
   // window.location.href = "./?lamp";

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
        verifyStatus();
    } else if (estado2 === 'Ligado') {
        botao.value = "Desligado";
        lampada.src = "./assets/images/lamp2.svg";
        ventiladorStatus = 0;
        localStorage.setItem("ventiladorStatus", ventiladorStatus);
        verifyStatus();
    }
}

function button3(){
    const botaoVentilador = document.getElementById('button2');
    const lampada = document.getElementById('lampada2');
    const botaoStatus = document.getElementById('buttonState');

    if(botaoStatus.value === 'Conectado') {
        window.location.href = "./pages/ventiladorStatus.html"
    } else if (botaoStatus.value === 'Desconectado') {
        alert('Desconectado do ventilador! Deseja Logar');
    }
}

function verifyStatus() {
    const botaoVentilador = document.getElementById('button2');
    const lampada = document.getElementById('lampada2');
    const botaoStatus = document.getElementById('buttonState');

    var statusVent = localStorage.getItem("ventiladorStatus")

    if(botaoVentilador.value === 'Ligado') {
        botaoStatus.value = 'Conectado';
        botaoStatus.style.background = "#008D5A";
    } else if (botaoVentilador.value === 'Desligado') {
        botaoStatus.value = 'Desconectado';
        botaoStatus.style.background = "#B50D0D";
    }
}

function verifyStatus2() {
    const botaoStatus = document.getElementById('buttonState');

    var statusVent = localStorage.getItem("ventiladorStatus")

    if(Number(statusVent) === 1) {
        botaoStatus.value = 'Conectado';
        botaoStatus.style.background = "#008D5A";
    } else if (Number(statusVent) === 0) {
        botaoStatus.value = 'Desconectado';
        botaoStatus.style.background = "#B50D0D";
    }
}

function startLocalStorage(){
    localStorage.setItem("lampadaStatus", 0);
    localStorage.setItem("ventiladorStatus", 0);
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

function diminuiVel() {
    var val = document.getElementById("valor").textContent
    
    if ( Number(val) > 0) {   
        val = Number(val)-1;
        document.getElementById("valor").textContent = val;
    } else {
        alert("Velocidade Maxima");
    }

    if (Number(val) == 0) {
        localStorage.setItem("ventiladorStatus", 0)
        verifyStatus2();
    }

}