function ValidarFormulario(){
 let nombre=document.getElementById("nombre").value.trim();
 let apellido=document.getElementById("apellido").value.trim();
 let correo=document.getElementById("correo").value.trim();
 let telefono=document.getElementById("telefono").value.trim();
 let mensaje="";
 
 //validar nombre

 if(nombre===""){
    mensaje+="el nombre es obligatorio.<br>";
 }

 //validar apellido

 if(apellido===""){
    mensaje+="el apellido es obligatorio.<br>";
 }

 //validar email
 let patronEmail = /(\w+)+@(gmail|hotmail|yahoo|test)(\.com|\.edu|\.ar){1,2}/g;
 if(!patronEmail.test(email)){
    mensaje+="debe ingresar un correo valido.<br>";
 }

 //validar telefono
let patron = /^[0-9]{10,15}$/;
 if(!patron.test(telefono)){
    mensaje+="ingrese un numero de telefono valido(digitos de 10 a 15 caracteres)";
 }

 //mostrar errores
if(mensaje!==""){
 document.getElementById("Error").innerHTML=mensaje;
 return false;   
}

//si pasa las validaciones
alert("formulario enviado correctamente");
return true;
}