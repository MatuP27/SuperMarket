function tomarHora() {
    const d = new Date();
    let hour = d.getHours();

    document.documentElement.classList.remove('transitional');
    document.documentElement.classList.remove('day');


    if (hour <= 19) {
        document.documentElement.classList.add('day');
        return;
    }
}
tomarHora();

function seleccionTodasCategorias() {
    document.documentElement.classList.remove('actLeche');
    document.documentElement.classList.remove('actAlcohol');
    document.documentElement.classList.remove('actAlfajores');
    document.documentElement.classList.remove('actBebidas');
    document.documentElement.classList.remove('actGalletitas');
    document.documentElement.classList.remove('actFideos');

    document.documentElement.classList.remove('desactivarMenosMas');
    document.documentElement.classList.add('mas');
    document.documentElement.classList.remove('menos');
}
function seleccionLeche() {
    document.documentElement.classList.remove('actLeche');
    document.documentElement.classList.add('actAlcohol');
    document.documentElement.classList.add('actAlfajores');
    document.documentElement.classList.add('actBebidas');
    document.documentElement.classList.add('actGalletitas');
    document.documentElement.classList.add('actFideos');

    document.documentElement.classList.add('desactivarMenosMas');
    document.documentElement.classList.remove('menos');
}
function seleccionAlcohol() {
    document.documentElement.classList.add('actLeche');
    document.documentElement.classList.remove('actAlcohol');
    document.documentElement.classList.add('actAlfajores');
    document.documentElement.classList.add('actBebidas');
    document.documentElement.classList.add('actGalletitas');
    document.documentElement.classList.add('actFideos');
    
    document.documentElement.classList.add('desactivarMenosMas');
    document.documentElement.classList.remove('menos');
    document.documentElement.classList.add('a');
}
function seleccionAlfajores() {
    document.documentElement.classList.add('actLeche');
    document.documentElement.classList.add('actAlcohol');
    document.documentElement.classList.remove('actAlfajores');
    document.documentElement.classList.add('actBebidas');
    document.documentElement.classList.add('actGalletitas');
    document.documentElement.classList.add('actFideos');
    
    document.documentElement.classList.add('desactivarMenosMas');
    document.documentElement.classList.remove('menos');
}
function seleccionBebidas() {
    document.documentElement.classList.add('actLeche');
    document.documentElement.classList.add('actAlcohol');
    document.documentElement.classList.add('actAlfajores');
    document.documentElement.classList.remove('actBebidas');
    document.documentElement.classList.add('actGalletitas');
    document.documentElement.classList.add('actFideos');
    
    document.documentElement.classList.add('desactivarMenosMas');
    document.documentElement.classList.remove('menos');
}
function seleccionGalletitas() {
    document.documentElement.classList.add('actLeche');
    document.documentElement.classList.add('actAlcohol');
    document.documentElement.classList.add('actAlfajores');
    document.documentElement.classList.add('actBebidas');
    document.documentElement.classList.remove('actGalletitas');
    document.documentElement.classList.add('actFideos');
    
    document.documentElement.classList.add('desactivarMenosMas');
    document.documentElement.classList.remove('menos');
}
function seleccionFideos() {
    document.documentElement.classList.add('actLeche');
    document.documentElement.classList.add('actAlcohol');
    document.documentElement.classList.add('actAlfajores');
    document.documentElement.classList.add('actBebidas');
    document.documentElement.classList.add('actGalletitas');
    document.documentElement.classList.remove('actFideos');
    
    document.documentElement.classList.add('desactivarMenosMas');
    document.documentElement.classList.remove('menos');
}


document.documentElement.classList.add('menos');
function mostrarMas() {
    document.documentElement.classList.add('mas');
    document.documentElement.classList.remove('menos');
}
function mostrarMenos() {
    document.documentElement.classList.add('menos');
    document.documentElement.classList.remove('mas');
}


class producto{
    constructor(precio, nombre, imagen, descripcion, categoria){
        this.precio = precio;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.comentarios = {};
        this.categoria = categoria
    }
}
function creacionPagina(elem) {
    localStorage.setItem("Elem", elem);
}

//Objetos productos

//Leches
let lecheEntera = new producto(170, "Leche La Serenisima entera", "img/ttax.jpeg", "Le gustan las menores y es terrible chaja.", "leche",1);
let lecheDescremada = new producto(170, "Leche La Serenisima descremada", "img/leche2.png", "", "leche",2);
let lecheAlmendra = new producto(200, "Leche de almendras", "img/leche3.png", "", "leche",3);
let lecheSoya = new producto(180, "Leche de soya Ades", "img/leche5.png", "", "leche",4);
let lecheCoco = new producto(250, "Leche Coconut", "img/leche4.png", "", "leche",5);

//Galletas
let oreo = new producto(350, "Oreo x3", "img/galletitas1.png", "", "galletitas",6);
let terrabusi = new producto(140, "Terrabusi Variedad", "img/galletitas3.png", "", "galletitas",7);
let pepitos = new producto(150, "Pepitos", "img/galletitas2.png", "", "galletitas",8);
let macucas = new producto(220, "Macucas", "img/galletitas4.png", "", "galletitas",9);
let donSatur = new producto(120, "Don Satur Agridulce", "img/galletitas5.png", "", "galletitas",10);

//Bebidas 10
let agua = new producto(120, "Agua 1.5l Ciel", "img/bebida5.png", "", "bebidas",11);
let pepsi = new producto(220, "Pepsi cola 2.5l", "img/bebida2.png", "", "bebidas",12);
let coca = new producto(260, "Coca Cola 2.5l", "img/bebida1.png", "", "bebidas",13);
let fanta = new producto(220, "Fanta naranja 2.5l", "img/bebida3.png", "", "bebidas",14);
let sprite = new producto(130, "Sprite 2.5l", "img/bebida4.png", "", "bebidas",15);

//Alcohol 15
let cerveza = new producto(280, "Cerveza Stella Artois", "img/alcohol1.png", "Bebida alcohólica, prohibida su venta a menores de 18 años.", "alcohol",16);
let casilleroDiablo = new producto(3100, "Vino Casillero del Diablo", "img/alcohol2.png", "Bebida alcohólica, prohibida su venta a menores de 18 años.", "alcohol",17);
let vinoBlanco = new producto(850, 'Vino Blanco Highland Mamnr"', "img/alcohol3.png", "Bebida alcohólica, prohibida su venta a menores de 18 años.", "alcohol",18);
let jackDaniels = new producto(3400, "Jack Daniels", "img/alcohol4.png", "Bebida alcohólica, prohibida su venta a menores de 18 años.", "alcohol",19);
let ron = new producto(1900, "Ron Barcelo", "img/alcohol5.png", "Bebida alcohólica, prohibida su venta a menores de 18 años.", "alcohol",20);

//Fideos" 20
let tallarines = new producto(200, "Tallarines Knorr", "img/fideos1.png", "", "fideos",21);
let rigatti = new producto(150, "Rigatti Knorr", "img/fideos2.png", "", "fideos",22);
let moños = new producto(180, "Moños Luchetti", "img/fideos3.png", "", "fideos",23);
let coditos = new producto(170, "Coditos Paca", "img/fideos4.png", "", "fideos",24);
let mostacholes = new producto(225, "Mostacholes Knorr", "img/fideos5.png", "", "fideos",25);

//Alfajores 25
let bonobon = new producto(220, "Alfajor Bon o Bon", "img/alfajor1.png", "Alfajor con todo el gusto y dulzura de Bon o Bon.", "alfajores",26);
let jorgito = new producto(160, "Alfajor Jorgito", "img/alfajor6.png", "Alfajor Jorgelín Blanco es una delicia argentina relleno con riquísimo dulce de leche, compuesto de dos tapas de chocolate blanco cubierto con un baño de repostería fantasía blanco sabor vainilla.", "alfajores",27);
let triple = new producto(160, "Alfajor Triple", "img/alfajor3.png", "Alfajor relleno con dulce de leche cubierto con baño de repostería.", "alfajores",28);
let vegano = new producto(160, "Alfajor Vegano", "img/alfajor4.png", "Alfajor vegano, con galletas, relleno con manjar de soya, envuelto por una exquisita cobertura de chocolate.", "alfajores",29);
let aguila = new producto(160, "Alfajor Aguila", "img/alfajor5.png", "Águila Alfajor Brownie mini torta clasica de dulce de leche y crema.", "alfajores",30);

let productos = [lecheEntera, lecheDescremada, lecheAlmendra, lecheSoya, lecheCoco, oreo, terrabusi, pepitos, macucas, donSatur, agua, pepsi, coca, fanta, sprite, cerveza, casilleroDiablo, vinoBlanco, jackDaniels, ron, tallarines, rigatti, moños, coditos, mostacholes, bonobon, jorgito, triple, vegano, aguila];



const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#productoss');


const cambioPagina = ()=>{
    localStorage.setItem("buscado", formulario.value.toLowerCase());
    
    window.location = "buscador.html";
}

boton.addEventListener('click', cambioPagina);
formulario.addEventListener('click', cambioPagina);


function agregarAlCarrito(){
    var carroActual = localStorage.getItem("carrito");
    carroActual++;
    localStorage.setItem("carrito", carroActual);

    let contador = document.querySelector('#contadorCarrito');
    contador.innerHTML =''
    contador.innerHTML += `${carroActual}`;
}
var carroActual = localStorage.getItem("carrito");
let contador = document.querySelector('#contadorCarrito');
    contador.innerHTML =''
    contador.innerHTML += `${carroActual}`;

/*
formulario.addEventListener('keypress', function (e) {

    if (e.key === 'Enter') {
        localStorage.setItem("buscado", formulario.value.toLowerCase());
        window.location = "buscador.html";

    }
});

/*
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#productoss');


const filtrar = ()=>{
    let locacion = window.location;
    let divison = locacion.split("/");
    alert(divison);
    if (locacion.indexOf("buscador.html") !== -1) {
        window.location = "buscador.html";
    }

    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();
    for (let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        let indice = productos.indexOf(producto);
    
        if (nombre.indexOf(texto) !== -1) {
            seleccionAlfajores();
            document.documentElement.classList.add('actAlfajores');
            
            resultado.innerHTML += `
                    <div class="busquedas">
                        <a href="productos.html" onclick="creacionPagina('${indice}');"><img src="${producto.imagen}" height="250" width="200" alt="">${producto.nombre}</a>
                    </div>
                `
        }
    }

    if (resultado.innerHTML === ''){
        resultado.innerHTML += `
                Producto no encontrado...
            `
    }
}
boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);






/** window.location.href = "p.html";
    document.getElementById('img-fluid').src="img/alcohol3.png";
 */
