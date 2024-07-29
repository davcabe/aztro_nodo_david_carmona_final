function calcularNota(){
    let notaEstudiante = parseFloat(document.getElementById('nota').value);
    let calificacionEst = String(document.getElementById('nota').value);
    
    if(notaEstudiante<2.9){
        calificacionEst = 'INSUFICIENTE'
        alert("Usted no aprobo");
        document.getElementById("calificacion").value = calificacionEst;
    }
    else if(notaEstudiante<3.5 && notaEstudiante>3.0){
        calificacionEst = 'SUFICIENTE';
        alert("Usted aprobo raspado");
        document.getElementById("calificacion").value = calificacionEst;
    }
    else if(notaEstudiante<4.0 && notaEstudiante>3.6){
        calificacionEst = 'BIEN';
        alert("Usted aprobo");
        document.getElementById("calificacion").value = calificacionEst;
    }
    else if(notaEstudiante<4.5 && notaEstudiante>4.1){
        calificacionEst = 'NOTABLE';
        alert("Usted tuvo una buena calificacion");
        document.getElementById("calificacion").value = calificacionEst;
    }
    else if(notaEstudiante<5.0 && notaEstudiante>4.6){
        calificacionEst = 'SOBRESALIENTE';
        alert("Usted paso con honores");
        document.getElementById("calificacion").value = calificacionEst;
    }
    else if(notaEstudiante>5.0 && notaEstudiante<0.0 ){
        calificacionEst = 'ERROR';
        alert("ERROR");
        document.getElementById("calificacion").value = calificacionEst;
    }
}