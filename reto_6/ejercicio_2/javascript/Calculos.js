function calcularEcuacion(){
    let n1 = parseFloat(document.getElementById('bm1').value);
    let n2 = parseFloat(document.getElementById('bn2').value);
    let n3 = parseFloat(document.getElementById('al3').value);
    let n4 = parseFloat(document.getElementById('la4').value);
    
    let perimetro =(n1+n2+(n4*2));
    let aria=((((n1+n2)*n3)/2)*1.5);

    document.getElementById('resultado1').innerHTML =perimetro.toFixed(2);
    document.getElementById('resultado2').innerHTML =aria.toFixed(2);
    }
    
    document.getElementById('form-ecuacion').addEventListener("submit", (e) => {
        e.preventDefault();
        calcularEcuacion();
    });