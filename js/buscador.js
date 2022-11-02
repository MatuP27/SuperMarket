function tomarHora() {
    const d = new Date();
    let hour = d.getHours();

    document.documentElement.classList.remove('day');

    if (hour <= 19) {
        document.documentElement.classList.add('day');
        return;
    }
}
tomarHora();


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

//Objetos productos

//Leches
let lecheEntera = new producto(170, "Leche La Serenisima entera", "img/ttax.jpeg", "Le gustan las menores y es terrible chaja.", "leche");
let lecheDescremada = new producto(170, "Leche La Serenisima descremada", "img/leche2.png", "", "leche");
let lecheAlmendra = new producto(200, "leche de almendras", "img/leche3.png", "", "leche");
let lecheSoya = new producto(180, "Leche de soya Ades", "img/leche5.png", "", "leche");
let lecheCoco = new producto(250, "Leche Coconut", "img/leche4.png", "", "leche");

//Galletas
let oreo = new producto(350, "Oreo x3", "img/galletitas1.png", "", "galletitas");
let terrabusi = new producto(140, "Terrabusi Variedad", "img/galletitas3.png", "", "galletitas");
let pepitos = new producto(150, "Pepitos", "img/galletitas2.png", "", "galletitas");
let macucas = new producto(220, "Macucas", "img/galletitas4.png", "", "galletitas");
let donSatur = new producto(120, "Don Satur Agridulce", "img/galletitas5.png", "", "galletitas");

//Bebidas 10
let agua = new producto(120, "Agua 1.5l Ciel", "img/bebida5.png", "", "bebidas");
let pepsi = new producto(220, "Pepsi cola 2.5l", "img/bebida2.png", "", "bebidas");
let coca = new producto(260, "Coca Cola 2.5l", "img/bebida1.png", "", "bebidas");
let fanta = new producto(220, "Fanta naranja 2.5l", "img/bebida3.png", "", "bebidas");
let sprite = new producto(130, "Sprite 2.5l", "img/bebida4.png", "", "bebidas");

//Alcohol 15
let cerveza = new producto(280, "Cerveza Stella Artois", "img/alcohol1.png", "Bebida alcohólica, prohibida su venta a menores de 18 años.", "alcohol");
let casilleroDiablo = new producto(3100, "Vino Casillero del Diablo", "img/alcohol2.png", "Bebida alcohólica, prohibida su venta a menores de 18 años.", "alcohol");
let vinoBlanco = new producto(850, 'Vino Blanco Highland Mamnr"', "img/alcohol3.png", "Bebida alcohólica, prohibida su venta a menores de 18 años.", "alcohol");
let jackDaniels = new producto(3400, "Jack Daniels", "img/alcohol4.png", "Bebida alcohólica, prohibida su venta a menores de 18 años.", "alcohol");
let ron = new producto(1900, "Ron Barcelo", "img/alcohol5.png", "Bebida alcohólica, prohibida su venta a menores de 18 años.", "alcohol");

//Fideos" 20
let tallarines = new producto(200, "Tallarines Knorr", "img/fideos1.png", "", "fideos");
let rigatti = new producto(150, "Rigatti Knorr", "img/fideos2.png", "", "fideos");
let moños = new producto(180, "Moños Luchetti", "img/fideos3.png", "", "fideos");
let coditos = new producto(170, "Coditos Paca", "img/fideos4.png", "", "fideos");
let mostacholes = new producto(225, "Mostacholes Knorr", "img/fideos5.png", "", "fideos");

//Alfajores 25
let bonobon = new producto(220, "Alfajor Bon o Bon", "img/alfajor1.png", "Alfajor con todo el gusto y dulzura de Bon o Bon.", "alfajores");
let jorgito = new producto(160, "Alfajor Jorgito", "img/alfajor6.png", "Alfajor Jorgelín Blanco es una delicia argentina relleno con riquísimo dulce de leche, compuesto de dos tapas de chocolate blanco cubierto con un baño de repostería fantasía blanco sabor vainilla.", "alfajores");
let triple = new producto(160, "Alfajor Triple", "img/alfajor3.png", "Alfajor relleno con dulce de leche cubierto con baño de repostería.", "alfajores");
let vegano = new producto(160, "Alfajor Vegano", "img/alfajor4.png", "Alfajor vegano, con galletas, relleno con manjar de soya, envuelto por una exquisita cobertura de chocolate.", "alfajores");
let aguila = new producto(160, "Alfajor Aguila", "img/alfajor5.png", "Águila Alfajor Brownie mini torta clasica de dulce de leche y crema.", "alfajores");

let productos = [lecheEntera, lecheDescremada, lecheAlmendra, lecheSoya, lecheCoco, oreo, terrabusi, pepitos, macucas, donSatur, agua, pepsi, coca, fanta, sprite, cerveza, casilleroDiablo, vinoBlanco, jackDaniels, ron, tallarines, rigatti, moños, coditos, mostacholes, bonobon, jorgito, triple, vegano, aguila];


/** BUSCADOR **/
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#productoss');


const filtrar = ()=>{
    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();
    for (let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        let indice = nombre.indexOf(texto);
    
        if (indice !== -1) {
            resultado.innerHTML += `
                    <div class="productos">
                        <a href="productos.html" onclick="creacionPagina('${indice}');"><img src="${producto.imagen}" height="250" width="200" alt="">
                        ${producto.nombre}</a>
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

function creacionPagina(elem) {
    localStorage.setItem("Elem", elem);
}

function agregarAlCarrito(){
    var carroActual = localStorage.getItem("carrito");
    carroActual++;
    localStorage.setItem("carrito", carroActual);

    let contador = document.querySelector('#contadorCarrito');
    contador.innerHTML =''
    contador.innerHTML += `${carroActual}`;
}
let contador = document.querySelector('#contadorCarrito');
    contador.innerHTML =''
    contador.innerHTML += `${carroActual}`;