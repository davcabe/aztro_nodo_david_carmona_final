//seleciono la clase back y la guardon en la bariable contenedor__card
const contenedor__card__primario = document.querySelector(".back")
//selecciono la clase preguntas__container y se lo asigno a container__preguntas
const container_preguntas = document.querySelector(".preguntas__container")
//selecciono la clase back__imagenes--style y se lo asigno a imgs
const imgs = document.getElementsByClassName("back__imagenes--style");
//convierto las imagenes a array
const array_img = Array.from(imgs)
//variable que va a guardar el nombre de la imagen
let imagen__respuesta;
//recorro el array de imagenes
array_img.forEach(img =>{
    //añado el evento de click
    img.addEventListener("click", (e) => cambio_interfaz(e))
})
function cambio_interfaz(event) {
//borra el contenedor contenedor que se quiere borrar
container_preguntas.style.display="none"
//guarda el nombre del valor
imagen__respuesta = event.target.name
//creamos un nuevo
const divbutton = document.createElement('div')
//le damos una clase al div
divbutton.className = "parrafo__siguiente_segundapag"
//se agrega contenido que va a tener el div
divbutton.innerHTML = `
    <div class="colocacion__objetos__back_segundapag">
        <a href="#" class="parrafo__siguiente--estilo_segundapag""> CONTINUAR</a>
        <div class="parrafo__amadeus__back_position_segundapag">
        <p class="parrafo__amadeus__back_segundapag">Conoce mas en <a href="https://amadeus.com" class="parrafo__amadeus__back_segundapag"> AMADEUS</a></p>
        </div>
    </div>
`
// aparece el nuevo link
contenedor__card__primario.appendChild(divbutton)
}
