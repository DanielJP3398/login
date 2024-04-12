/*webstorage*/
function guardarDatos() {
    localStorage.user = document.getElementById("user").value;
    localStorage.password = document.getElementById("pas").value;
    
}
function recuperarDatos() {
if ((localStorage.user != undefined) && (localStorage.password != undefined)) {
    document.getElementById("datos").innerHTML = "Su usuario: " + localStorage.user + " y Su contraseña: " + localStorage.password;    
} else {
    document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}
