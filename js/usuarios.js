var users = {"admin": 123};
localStorage.setItem("admin", "1234");

var sesionIniciada = False;
 
function nuevoUsuario(){

    var usuario = document.SignIn.usuario.value;
    var contraseña = document.SignIn.password.value;
    var confirmarContra = document.SignIn.newPassword.value;

    if (contraseña == confirmarContra){
        alert("Usuario creado exitosamente")
        localStorage.setItem(usuario, contraseña);
	    window.location = "ingreso.html";
    }
    else{
        alert("Las contraseñas no coindicen. Intente otra vez.")
    }
}

function ingresar(){

    var usuario = document.login.usuario.value;
    var contraseña = document.login.password.value;

    if (localStorage[usuario] == contraseña){
        //Inició sesión
	    window.location = "index.html";
    }
    else{
        //No inició sesión
        alert("El usuario o la contraseña no coinciden.");
    }
}

/*
function nuevoUsuario(){

    alert("La función nuevoUsuario se está ejecutando.")

    var usuario=document.login.usuario.value;
    var contraseña=document.login.password.value;
    var confirmarContra=document.login.newPassword.value;

    if (contraseña == confirmarContra){
        alert("Usuario creado exitosamente")
        users[usuario] = contraseña;
    }
    else{
        alert("Las contraseñas no coindicen. Intente otra vez.")
    }
    alert(users[usuario])
}

function ingresar(){

    alert("Prueba de función")

    var usuario=document.login.usuario.value;
    var contraseña=document.login.password.value;

    if (users[usuario] = contraseña){
        //Inició sesión
        alert("Sesión iniciada exitosamente.");
        sesionIniciada = True;

    }
    else{
        //No inició sesión
        alert("El usuario y la contraseña no coinciden.");
    }
}
*/

