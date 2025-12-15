function calcularPot() {
        var potnb = Number(document.querySelector('#potnb').value)
        var Pcargasaida = Number(document.querySelector('#Pcargasaida').value) / 100
        var FPsaida = Number(document.querySelector('#FPsaida').value)
        var inversor = Number(document.querySelector('#inversor').value) / 100
        var Qbaterias = Number(document.querySelector('#Qbaterias').value)
        var correnteCAT = Number(document.querySelector('#correnteCAT').value)                      
        var tempoCAT = Number(document.querySelector('#tempoCAT').value)


        var Tensaobat = Qbaterias * 12
        var Potconsumida = (potnb * Pcargasaida * FPsaida) / inversor
        var Cdescarga = (Potconsumida * 1000) / Tensaobat
        var minutoscorrente = (correnteCAT / Cdescarga) * tempoCAT
        
        document.querySelector('#valorRes1').innerText = Potconsumida.toFixed(2) + " W"
        document.querySelector('#valorRes2').innerText = Tensaobat + " V"
        document.querySelector('#valorRes3').innerText = Cdescarga.toFixed(2) + " A"
        document.querySelector('#valorRes4').innerText = minutoscorrente.toFixed(2)

}