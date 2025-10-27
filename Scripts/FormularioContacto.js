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
 let patronEmail =/(\w+)+@(gmail|hotmail|yahoo|test)(\.com|\.edu|\.ar){1,2}/;
 if(correo===""){
    document.getElementById("error-correo").textContent = "El correo es obligatorio";
    document.getElementById("error-correo").style.color = "red";
 }else if(!patronEmail.test(correo)){
    document.getElementById("error-correo").textContent="el correo debe tener una estructura 'algo@gmail.com'"
    document.getElementById("error-correo").style.color="red"
 }else{
   document.getElementById("error-correo").textContent=""
 }

 
 //validar telefono
let patron = /^[0-9]{10,15}$/;
 if (telefono === "") {
    document.getElementById("error-telefono").textContent = "El teléfono es obligatorio";
    document.getElementById("error-telefono").style.color = "red";
} else if(!patronTel.test(telefono)) {
    document.getElementById("error-telefono").textContent = "Ingrese un teléfono válido (10 a 15 dígitos)";
    document.getElementById("error-telefono").style.color = "red";
} else {
    document.getElementById("error-telefono").textContent = "";
}
}