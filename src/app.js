function animarResultado(elemento, texto) {
    elemento.classList.remove('animar');
    void elemento.offsetWidth; // força reflow
    elemento.classList.add('animar');
    elemento.innerText = texto;
}

function calcularPotconsumida() {
        var potnb = Number(document.querySelector('#potnb').value)
        var Pcargasaida = Number(document.querySelector('#Pcargasaida').value) / 100
        var FPsaida = Number(document.querySelector('#FPsaida').value)
        var inversor = Number(document.querySelector('#inversor').value) / 100

        var Potconsumida = (potnb * Pcargasaida * FPsaida) / inversor

        var el = document.querySelector('#valorRes1');

        animarResultado(el, 'Potência Consumida: ' + Potconsumida.toFixed(2) + " W")
}

function calcularTensaobat() {
        var Qbaterias = Number(document.querySelector('#Qbaterias').value)

        var Tensaobat = Qbaterias * 12

        var el = document.querySelector('#valorRes2');
        
        animarResultado(el, 'Tensão de Bateria: ' + Tensaobat + " V")
}

function calcularCdescarga() {
    var potconsumida = Number(document.querySelector('#potconsumida').value);
    var Tensaobat = Number(document.querySelector('#Tensaobat').value);

    var Cdescarga = (potconsumida * 1000) / Tensaobat;

    var el = document.querySelector('#valorRes3');
    animarResultado(el, "Corrente de Descarga: " + Cdescarga.toFixed(2) + " A");
}

function calcularAutonomia() {
        var Cdescarga = Number(document.querySelector('#Cdescarga').value)
        var correnteCAT = Number(document.querySelector('#correnteCAT').value)                      
        var tempoCAT = Number(document.querySelector('#tempoCAT').value)

        var el = document.querySelector('#valorRes4');
        
        animarResultado(el, 'Minutos @ Corrente: ' + (correnteCAT / Cdescarga) * tempoCAT + "A")
}