
const math = require('mathjs')
function valor (){
    let n1 =document.getElementById("a").value;
    let n2 =document.getElementById("b").value;
    let n3 = parseFloat(n1) * parseFloat(n2);
    let n4 = (parseFloat(n1) * 2) + (parseFloat(n2) * 2)
    let n5 = (parseFloat(n1) ** 2) + (parseFloat(n2) ** 2)
    let n6 =Math.sqrt(n5);

    c.value = n3;
    d.value = n4;
    f.value =n6;
}
/*let num1 = parseFloat(document.getElementById('n1').value);
let num2 = parseFloat(document.getElementById('altura').value);
let suma = num1 + num2;
alert("la suma es: "+suma);
document.getElementById('resultado1').innerHTML = suma;
document.getElementById('area').value = suma;*/