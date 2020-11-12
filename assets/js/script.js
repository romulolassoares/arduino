function button1(){
    const botao = document.getElementById('button1');
    const lamapada = document.getElementById('lampada1');
    const estado = botao.value;
    localStorage.setItem("lampadaStatus","0");
    console.log(estado)
    if(estado === 'Ligada') {
        botao.value = "Desligada";
        lamapada.src = "./assets/images/lamp2.svg";
    } else if (estado === 'Desligada') {
        botao.value = "Ligada";
        lamapada.src = "./assets/images/lamp.svg"
    }
}

function button2(){
   // window.location.href = "./?lamp";

    const botao = document.getElementById('button2');
    const lampada = document.getElementById('lampada2');
    const estado2 = botao.value;
    console.log(estado2)

    if(estado2 === 'Desligado') {
        botao.value = "Ligado";
        lampada.src = "./assets/images/lamp.svg";
        verifyStatus();
    } else if (estado2 === 'Ligado') {
        console.log(2)
        botao.value = "Desligado";
        lampada.src = "./assets/images/lamp2.svg"
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

    if(botaoVentilador.value === 'Ligado') {
        botaoStatus.value = 'Conectado';
        botaoStatus.style.background = "#008D5A";
    } else if (botaoVentilador.value === 'Desligado') {
        botaoStatus.value = 'Desconectado';
        botaoStatus.style.background = "#B50D0D";
    }
}