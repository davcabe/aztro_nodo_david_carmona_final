function calcularCompra(){
    let tipoUsuario= document.getElementById("afiliacion").value;
    let valorCompra= parseFloat(document.getElementById("compra").value);

    if (tipoUsuario == "2"){
        if(valorCompra>100000.0 && valorCompra<299000.0){
            let descuento = valorCompra * 0.03;
            let totalPagar = valorCompra - descuento;
            alert("felicitaciones por su descuento");
            document.getElementById("descuento").value = descuento;
            document.getElementById('total').value = totalPagar;
        }

        else if(valorCompra>300000.0 && valorCompra<499000.0){
            let descuento = valorCompra * 0.05;
            let totalPagar = valorCompra - descuento;
            alert("felicitaciones por su descuento");
            document.getElementById("descuento").value = descuento;
            document.getElementById('total').value = totalPagar;
        }
    else if(valorCompra>500000.0){
            const descuento = 80000.0;
            let totalPagar = valorCompra - descuento;
            alert("felicitaciones por su descuento");
            document.getElementById("descuento").value = descuento;
            document.getElementById('total').value = totalPagar;
        }else{
            alert("su compra no alcanza los 100.000 pesos");
        document.getElementById("descuento").value = 0;
        document.getElementById('total').value = valorCompra;
        }
    
    }else{
        alert("No aplica ningun descuento");
        document.getElementById("descuento").value = 0;
        document.getElementById('total').value = valorCompra;
    }
}