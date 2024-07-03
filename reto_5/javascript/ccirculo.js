function valor (){
    let n1 =document.getElementById("a").value;
    let n2 =document.getElementById("b").value;
    let n3 =Math.PI * (parseFloat(n2) ** 2);
    let n4 =Math.PI * parseFloat(n1);
    let n5 = parseFloat(n2) * 2;

    c.value = n3;
    d.value = n4;
    f.value = n5;
}
