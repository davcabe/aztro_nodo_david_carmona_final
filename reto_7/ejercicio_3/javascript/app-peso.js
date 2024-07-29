function calcularNota(){
    let pesoActual = parseFloat(document.getElementById('peso').value);
    let estadoActual = String(document.getElementById('estado').value);
    
    if(pesoActual<16){
        estadoActual = 'Delgadez severa'
        alert("Usted necesita ir a un medico urgente");
        document.getElementById("estado").value = estadoActual;
    }
    else if(pesoActual<16.99 && pesoActual>16.99){
        estadoActual = 'Delgadez moderada';
        alert("Usted deberia ir a un medico");
        document.getElementById("estado").value = estadoActual;
    }
    else if(pesoActual<18.49 && pesoActual>17.00){
        estadoActual = 'Delgadez aceptable';
        alert("Usted deberia procuparse por su salud");
        document.getElementById("estado").value = estadoActual;
    }
    else if(pesoActual<24.99 && pesoActual>18.5){
        estadoActual = 'Peso normal';
        alert("Usted tiene un peso saludable");
        document.getElementById("estado").value = estadoActual;
    }
    else if(pesoActual<29.999 && pesoActual>25.00){
        estadoActual = 'sobrepeso';
        alert("Usted deberia procuparse por su salud");
        document.getElementById("estado").value = estadoActual;
    }else if(pesoActual>34.99 && pesoActual<30.00 ){
        estadoActual = 'obesidad tipo 1 ';
        alert("Usted deberia ir a un medico");
        document.getElementById("estado").value = estadoActual;
    }
    else if(pesoActual>39.99 && pesoActual<35.00 ){
        estadoActual = 'obesidad tipo 2 ';
        alert("Usted necesita ir a al medico");
        document.getElementById("estado").value = estadoActual;
    }
    else if(pesoActual>40.00 && pesoActual<49.99 ){
        estadoActual = 'obesidad tipo 3 ';
        alert("Usted le urge presentarse a un medico");
        document.getElementById("estado").value = estadoActual;
    }
    else if(pesoActual>50.00){
        estadoActual = 'obesidad tipo 4 ';
        alert("Usted necesita ir a un medico urgente");
        document.getElementById("estado").value = estadoActual;
    }

}