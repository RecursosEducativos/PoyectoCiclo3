<template>
  <div class="formacceso">
    
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
        <center><h3>DESCRIPCION</h3><br><form class="forml">
            
            <div class="input-group mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Código: </label>&nbsp;
                <input type="text" class="form-control"  id="codigo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               
            

            
                <label aling="left" for="exampleInputPassword1" class="form-label">Categoría: </label>&nbsp;
                <input type="text" class="form-control" id="categoria">
                
            </div>
            <div class="input-group mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Nombre: </label>&nbsp;
                <input type="text" class="form-control" id="nombre" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
       
                <label aling="left" for="exampleInputPassword1" class="form-label">Descripción: </label>&nbsp;
                <textarea class="form-control" id="descripcion" rows="1"></textarea>
               
                
            </div>

            <div class="input-group mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Existencia: </label>&nbsp;
                <input type="text" class="form-control" id="existencia" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
            
                <label aling="left" for="exampleInputPassword1" class="form-label">Precio $ : </label>&nbsp;
                <input type="text" class="form-control" id="precio">
                
            </div>
            <div class="input-group mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Disponible: </label>&nbsp;
                <input type="text"  class="form-control" placeholder="Si"  id="disponibilidad" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
          
                <label aling="left" for="exampleInputPassword1" class="form-label">imagen : </label>&nbsp;
                <input type="text" class="form-control" id="imagen">
                
            </div>

            
            
          
        </form></center><br>
                
            <button aling="center" type="submit" class="btn btn-primary">Guardar</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button aling="center" type="submit" class="btn btn-primary">Eliminarr</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button aling="center" type="submit" class="btn btn-primary">Actualizar</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button aling="center" type="submit" class="btn btn-primary">Salir</button>
            
            
        

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