<template>
  <div class="actualizarusuarios">

    
        <div class="container" >
            <h3 >Bienvenido Nombre usuario al sistema de Cosmética Casera</h3>
            <br><div class="input-group mb-3">
            
            
            <select class="form-select" aria-label="Default select example">
                <option selected>Buscar Producto por código</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select class="form-select" aria-label="Default select example">
                <option selected>Buscar Producto por nombre</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select></div><br>
        <center><h3>DESCRIPCION</h3><br><form class="forml" @submit.prevent= "submit">
            
           <div class="mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Modificar Nombre </label>
                <input type="email" class="form-control" id="nombre" aria-describedby="emailHelp">
                
            </div>
            
            <div class="mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Modificar Correo</label>
                <input type="email" class="form-control" id="modificarcorreo" aria-describedby="emailHelp">
                
            </div>

            <div class="mb-3">
                <label aling="left" for="exampleInputPassword1" class="form-label">Modificar Contraseña</label>
                <input type="password" class="form-control" id="modificarpassword">
                
            </div>
            
            
          
        </form></center><br>
                
            
            <button aling="center" type="submit" class="btn btn-primary">Actualizar</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/usuarios"><button aling="center" type="submit" class="btn btn-primary" onclick= "history.go(-1);">Salir</button></router-link>
            
            
        

    </div>

    
    </div>

    


</template>
<script>

</script>

<style>

.h{
   position: left;
}

.forml {
    max-width: 900px;
    margin: 2%;
    margin-bottom: 10px;
    text-align: left;
 
  

}
</style>