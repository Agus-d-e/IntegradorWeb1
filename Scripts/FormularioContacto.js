function ValidarFormulario(event){
 
 let nombre=document.getElementById("nombre").value.trim();
 let apellido=document.getElementById("apellido").value.trim();
 let correo=document.getElementById("correo").value.trim();
 let telefono=document.getElementById("telefono").value.trim();
 
 event.preventDefault();
 //validar nombre

 if(nombre===""){
    document.getElementById("error-nombre").textContent="el nombre es obligatorio"
    document.getElementById("error-nombre").style.color="red"
 }else{
   document.getElementById("error-nombre").textContent=""
 }

 //validar apellido

 if(apellido===""){
    document.getElementById("error-apellido").textContent="el apellido es obligatorio"
    document.getElementById("error-apellido").style.color="red"
 }else{
   document.getElementById("error-apellido").textContent=""
 }

 //validar email
 let patronEmail = /(\w+)+@(gmail|hotmail|yahoo|test)(\.com|\.edu|\.ar){1,2}/g;
 if(!patronEmail.test(email)){
    document.getElementById("error-correo").textContent="el correo debe tener una estructura algo@gmail.com"
 }

 //validar telefono
let patron = /^[0-9]{10,15}$/;
 if(!patron.test(telefono)){
   document.getElementById("error-telefono").textContent="ingrese un numero de telefono valido(digitos de 10 a 15 caracteres)"
 }

}