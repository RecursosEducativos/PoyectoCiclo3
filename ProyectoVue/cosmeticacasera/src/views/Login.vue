<template>
  <div class="login">
    
        <div class="container" >
            <h3 >Bienvenido</h3>
        <center><form class="forml">
            
            <div class="mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Ingresar Correo</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                
            </div>

            <div class="mb-3">
                <label aling="left" for="exampleInputPassword1" class="form-label">Ingresar Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
                 <div id="passwordHelpBlock" class="form-text">
                    Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji,
                </div>
                
            </div>
            <center>
                
            <button aling="center" type="submit" class="btn btn-primary">Ingresar</button>
            <br><br>
            <h5><router-link class="item" to="/formularios/guardarusuario">Registrese!</router-link><br><br>
          
            <router-link class="item" to="/recuperacion">Olvidó su contraseña?</router-link></h5></center>
            
          
        </form></center>

    </div>

    
    </div>

    


</template>

<script>

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