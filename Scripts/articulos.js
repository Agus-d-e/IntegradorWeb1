let imagenes=[
    "../Imagenes/guitarraElectrica.jpg",
    "../Imagenes/guitarraAcustica.jpg",
    "../Imagenes/guitarraBlues.jpg"
    
];

let atras=document.getElementById("atras");
let adelante=document.getElementById("adelante");
let imagen=document.getElementById("img");
let actual=0

function mostrarImagen() {
  imagen.src = imagenes[actual];
}

atras.addEventListener("click",function(){
    actual-=1
    if(actual<0){
        actual=imagenes.length-1
    }
    mostrarImagen();
    
});


adelante.addEventListener("click",function(){
    actual+=1
    if(actual>=imagenes.length){
        actual=0
    }
    mostrarImagen();
});