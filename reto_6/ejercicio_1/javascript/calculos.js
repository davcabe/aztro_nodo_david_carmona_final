function calcularEcuacion(){
let n1 = parseFloat(document.getElementById('p1').value);
let n2 = parseFloat(document.getElementById('p2').value);
let n3 = parseFloat(document.getElementById('p3').value);
let n4 = parseFloat(document.getElementById('p4').value);
let n5 = parseFloat(document.getElementById('p5').value);

let res1 =((n1+n2+n3+n4+n5) / 5);
document.getElementById('resultado1').innerHTML =res1.toFixed(2);
}

document.getElementById('form-ecuacion').addEventListener("submit", (e) => {
    e.preventDefault();
    calcularEcuacion();
});