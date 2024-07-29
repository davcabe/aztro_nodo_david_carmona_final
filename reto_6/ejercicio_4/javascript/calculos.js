function calcularEcuacion(){
    let n1 = parseFloat(document.getElementById('mt').value);
    let n2 = parseFloat(document.getElementById('kl').value);
    
    let indi =Math.round(n2/(n1**2));
    document.getElementById('resultado1').innerHTML =indi.toFixed(2);
    }
    
    document.getElementById('form-ecuacion').addEventListener("submit", (e) => {
        e.preventDefault();
        calcularEcuacion();
    });