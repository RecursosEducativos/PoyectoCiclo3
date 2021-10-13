<template>
<div class="guardarusuario">
    
        <div class="container" >
            <h3 >Registro</h3>
        <center><form class="forml">
            
            <div class="mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Ingresar Nombre </label>
                <input type="email" class="form-control" id="nombre" aria-describedby="emailHelp">
                
            </div>
            
            <div class="mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Ingresar Correo</label>
                <input type="email" class="form-control" id="correo" aria-describedby="emailHelp">
                
            </div>

            <div class="mb-3">
                <label aling="left" for="exampleInputPassword1" class="form-label">Ingresar Contraseña</label>
                <input type="password" class="form-control" id="password">
                <label aling="left" for="exampleInputPassword1" class="form-label">Repetir Contraseña</label>
                <input type="password" class="form-control" id="password1">
            </div>

            <center>
                
            <router-link to="/usuarios"><button aling="center" type="submit" class="btn btn-primary">Registrar</button></router-link></center>
            <button aling="center" type="submit" class="btn btn-primary" onclick="ConfirmDemo()"> Salir</button>
          
        </form></center>

    </div>
    </div>


</template>


<script type="text/javascript">
function ConfirmDemo() {
//Ingresamos un mensaje a mostrar
var mensaje = confirm("¿Quieres salir ?");
//Detectamos si el usuario acepto el mensaje
if (mensaje) {
alert("¡Gracias por aceptar!");
}

}
</script>


<style>
.login{
    text-align:  center;
}


.forml {
    max-width: 300px;
    margin: 2%;
    margin-bottom: 10px;
    text-align: left;
 
  

}
</style>