function calcularPotconsumida() {
        var potnb = Number(document.querySelector('#potnb').value)
        var Pcargasaida = Number(document.querySelector('#Pcargasaida').value) / 100
        var FPsaida = Number(document.querySelector('#FPsaida').value)
        var inversor = Number(document.querySelector('#inversor').value) / 100

        var Potconsumida = (potnb * Pcargasaida * FPsaida) / inversor

        document.querySelector('#valorRes1').innerText = "Potência Consumida: " + Potconsumida.toFixed(2) + " W"
}

function calcularTensaobat() {
        var Qbaterias = Number(document.querySelector('#Qbaterias').value)

        var Tensaobat = Qbaterias * 12
        
        document.querySelector('#valorRes2').innerText =  "Tensão de Bateria: " + Tensaobat + " V"
}

function calcularCdescarga() {
        var potconsumida = Number(document.querySelector('#potconsumida').value)
        var Tensaobat = Number(document.querySelector('#Tensaobat').value)

        var Cdescarga = (potconsumida * 1000) / Tensaobat

        document.querySelector('#valorRes3').innerText = "Corrente de Descarga: " + Cdescarga.toFixed(2) + " A"
}

function calcularAutonomia() {
        var Cdescarga = Number(document.querySelector('#Cdescarga').value)
        var correnteCAT = Number(document.querySelector('#correnteCAT').value)                      
        var tempoCAT = Number(document.querySelector('#tempoCAT').value)

        var minutoscorrente = "Minutos @ Corrente: " + (correnteCAT / Cdescarga) * tempoCAT
        
        document.querySelector('#valorRes4').innerText = minutoscorrente
}