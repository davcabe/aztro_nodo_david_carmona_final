function calcularEcuacion(){
    let n1 = parseFloat(document.getElementById('dt').value);
    let n2 = parseFloat(document.getElementById('hed').value);
    let n3 = parseFloat(document.getElementById('hen').value);
    let n4 = parseFloat(document.getElementById('hef').value);
    let diaTraba = n1*43000;
    let vhed =  n2*6915;
    let vhen = n3*9681;
    let vhef = n4*11064;
    
    let pagoNeto = diaTraba+vhed+vhen+vhef;
    let salud = pagoNeto*0.04;
    let deducible = pagoNeto*0.03;
    let pagoTotal = pagoNeto-(salud*2)-deducible;

    document.getElementById('resultado1').innerHTML = pagoNeto;
    document.getElementById('resultado2').innerHTML = salud;
    document.getElementById('resultado3').innerHTML = salud;
    document.getElementById('resultado4').innerHTML = deducible;
    document.getElementById('resultado5').innerHTML = pagoTotal;
    }
    
    
    document.getElementById('form-ecuacion').addEventListener("submit", (e) => {
        e.preventDefault();
        calcularEcuacion();
    })