function calcularEcuacion(){
    let n1 = parseFloat(document.getElementById('ldl1').value);
    let n2 = parseFloat(document.getElementById('ldl2').value);
    let n3 = parseFloat(document.getElementById('prl1').value);
    let n4 = parseFloat(document.getElementById('prl2').value);
    
    let ariLadri =(n1*n2);
    let ariPared=(n3*n4);
    let total=Math.ceil(ariPared/ariLadri);

    document.getElementById('resultado1').innerHTML =total;
    }
    
    document.getElementById('form-ecuacion').addEventListener("submit", (e) => {
        e.preventDefault();
        calcularEcuacion();
    });