<template>
  <div class="eliminarusuarios">

    
        <div class="container" >
            <h3 >Eliminar Usuario</h3>
            <br><div class="input-group mb-3">
            
            
            <select class="form-select" aria-label="Default select example">
                <option selected>Buscar Usuario por código</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select class="form-select" aria-label="Default select example">
                <option selected>Buscar Usuario por nombre</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select></div><br>
        <center><h3>DESCRIPCION</h3><br><form class="forml" @submit.prevent= "submit">
            
           
            
            <div class="mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Nombre </label>
                <input type="email" class="form-control" id="nombre" aria-describedby="emailHelp">
                
            </div>
            
            <div class="mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Correo</label>
                <input type="email" class="form-control" id="correo" aria-describedby="emailHelp">
                
            </div>

            <div class="mb-3">
                <label aling="left" for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password">
                
            </div>

            
                
            
          
        </form></center><br>
            <router-link to="/usuarios"><button aling="center" type="submit" class="btn btn-primary">Registrar</button></router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button aling="center" type="submit" class="btn btn-primary" onclick= "history.go(-1);"> Salir</button>

    </div>
    </div>


</template>


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