function ValidarFormulario(event){
 
 let nombre=document.getElementById("nombre").value.trim();
 let apellido=document.getElementById("apellido").value.trim();
 let correo=document.getElementById("correo").value.trim();
 let telefono=document.getElementById("telefono").value.trim();
 
 event.preventDefault();
 //validar nombre

 let flag=true;

 if(nombre===""){
    document.getElementById("error-nombre").textContent="el nombre es obligatorio";
    document.getElementById("error-nombre").style.color="red";
    flag=false;
 }else{
   document.getElementById("error-nombre").textContent="";
 }

 //validar apellido

 if(apellido===""){
    document.getElementById("error-apellido").textContent="el apellido es obligatorio";
    document.getElementById("error-apellido").style.color="red";
     flag=false;
 }else{
   document.getElementById("error-apellido").textContent="";
 }

 //validar email
 let patronEmail =/(\w+)+@(gmail|hotmail|yahoo|test)(\.com|\.edu|\.ar){1,2}/;
 if(correo===""){
    document.getElementById("error-correo").textContent = "El correo es obligatorio";
    document.getElementById("error-correo").style.color = "red";
     flag=false;
 }else if(!patronEmail.test(correo)){
    document.getElementById("error-correo").textContent="el correo debe tener una estructura 'algo@gmail.com'"
    document.getElementById("error-correo").style.color="red";
     flag=false;
 }else{
   document.getElementById("error-correo").textContent="";
 }

 
 //validar telefono
let patronTel = /^[0-9]{10,15}$/;
 if (telefono === "") {
    document.getElementById("error-telefono").textContent = "El teléfono es obligatorio";
    document.getElementById("error-telefono").style.color = "red";
     flag=false;
} else if(!patronTel.test(telefono)) {
    document.getElementById("error-telefono").textContent = "Ingrese un teléfono válido (10 a 15 dígitos)";
    document.getElementById("error-telefono").style.color = "red";
     flag=false;
} else {
    document.getElementById("error-telefono").textContent = "";
}

if(flag===true){
  const div=CrearElemento();
  setTimeout(()=>{div.remove()},10000)
  return false
}

function CrearElemento(){
const contenedor = document.getElementById("resultado-form");
const enviados=document.createElement("h3");
const nuevoDiv = document.createElement("div");
const nombreNuevo=document.createElement("h3");
const apellidoNuevo=document.createElement("h3");
const telefonoNuevo=document.createElement("h3");
const correoNuevo=document.createElement("h3");

enviados.textContent="¡formulario enviado correctamente!";
nombreNuevo.innerHTML=document.getElementById("nombre").value;
apellidoNuevo.innerHTML=document.getElementById("apellido").value;
telefonoNuevo.innerHTML=document.getElementById("telefono").value;
correoNuevo.innerHTML=document.getElementById("correo").value;


nuevoDiv.className = "div-creado";
nuevoDiv.id = "div-creado";

nuevoDiv.appendChild(enviados);
nuevoDiv.appendChild(nombreNuevo);
nuevoDiv.appendChild(apellidoNuevo);
nuevoDiv.appendChild(telefonoNuevo);
nuevoDiv.appendChild(correoNuevo);

contenedor.appendChild(nuevoDiv);

return nuevoDiv;
}

}