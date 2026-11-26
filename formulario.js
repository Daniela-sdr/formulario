//Silvia Daniela Ruiz
//DNI: 20467216

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

nombre.addEventListener("input", function(){
    if (nombre.value.trim() === ""){
        errorNombre.textContent = "El nombre es obligatorio";
        nombre.style.borderColor = "red";
    } else {
        errorNombre.textContent = "";
        nombre.style.borderColor = "green";
    }
} );

email.addEventListener("input", function() {
    const posicionArroba = email.value.indexOf("@");
    const posicionPunto = email.value.indexOf(".");
    
    if (posicionArroba === -1 || posicionArroba === 0 || posicionPunto <= posicionArroba + 1 || posicionPunto === email.value.length - 1){
        errorEmail.textContent = "Correo inválido";
        email.style.borderColor = "red";
    }else{
        errorEmail.textContent = "";
        email.style.borderColor = "green"
    }
});

password.addEventListener("input", function() {
    if(password.value.length < 8) {
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres";
        password.style.borderColor = "red";
    }else{
        errorPassword.textContent = "";
        password.style.borderColor = "green";
    }
});

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    //Validación del nombre
    if (nombre.value.trim() === ""){
        errorNombre.textContent = "El nombre es obligatorio";
        nombre.style.borderColor = "red"
    }else {
        errorNombre.textContent = "";
        nombre.style.borderColor = "green";
    }
    //Posiciones del correo
    const posicionArroba = email.value.indexOf("@");
    const posicionPunto = email.value.indexOf(".");
    //Valicación del corrreo
    if (posicionArroba === -1 || posicionArroba === 0 || posicionPunto <= posicionArroba + 1 || posicionPunto === email.value.length - 1){
        errorEmail.textContent = "Correo inválido";
        email.style.borderColor = "red";
    }else{
        errorEmail.textContent = "";
        email.style.borderColor = "green"
    }
    //Validación de contraseña
    if(password.value.length < 8) {
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres";
        password.style.borderColor = "red";
    }else{
        errorPassword.textContent = "";
        password.style.borderColor = "green";
    }
    //Validación para enviar formulario
    if (errorNombre.textContent === "" && errorEmail.textContent === "" && errorPassword.textContent === ""){
        alert("Formulario enviado correctamente");
        formulario.reset();
    }
});