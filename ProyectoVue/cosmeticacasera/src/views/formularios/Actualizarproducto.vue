<template>
  <div class="actualizarproducto">

    
       <div class="container" >
            <h3 >Actualizar Producto</h3>
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
        <center><h3>DESCRIPCION</h3><br><form class="form row g-3" @submit.prevent= "actualizarProducto" >
            
            <div class="input-group mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Código: </label>&nbsp;
                <input type="text" class="form-control"  id="codigo" v-model = "products.codigo"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               
            

            
                <label aling="left" for="exampleInputPassword1" class="form-label">Categoría: </label>&nbsp;
                <input type="text" class="form-control" id="categoria" v-model = "products.categoria">
                
            </div>
            <div class="input-group mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Nombre: </label>&nbsp;
                <input type="text" class="form-control" id="nombre" v-model = "products.nombre" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
       
                <label aling="left" for="exampleInputPassword1" class="form-label">Descripción: </label>&nbsp;
                <textarea class="form-control" id="descripcion" rows="1" v-model = "products.descripcion"></textarea>
               
                
            </div>

            <div class="input-group mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Existencia: </label>&nbsp;
                <input type="text" class="form-control" id="existencia" v-model = "products.existencia" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
            
                <label aling="left" for="exampleInputPassword1" class="form-label">Precio $ : </label>&nbsp;
                <input type="text" class="form-control" id="precio" v-model = "products.precio">
                
            </div>
            <div class="input-group mb-3" >
                
                <label aling="left" for="exampleInputEmail1" class="form-label">Disponible: </label>&nbsp;
                <input type="text"  class="form-control" placeholder="Si o No"  id="disponibilidad" v-model = "products.disponibilidad" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
          
                <label aling="left" for="exampleInputPassword1" class="form-label">imagen : </label>&nbsp;
                <input type="text" class="form-control" id="imagen" placeholder="/asset/imagen.png" v-model = "products.imagen">
                
            </div>

            
            
          
        </form></center><br>
                
            
            <button aling="center" type="submit" class="btn btn-primary">Guardar</button>&nbsp;&nbsp;
            <router-link to="/usuarios"><button aling="center" type="submit" class="btn btn-primary" onclick= "history.go(-1);">Salir</button></router-link>
            
            
        

    </div>

    
    </div>

    


</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products:{

          codigo:"",
          categoria:"",
          nombre:"",
          descripcion:"",
          presentacion:"",
          inv:"",
          precio:"",
          disponibilidad:"",
          imagen:""
      },
    };
  },
  created() {
     console.log('hola mundo');
    axios
      .get("http://localhost:3080/products")
      .then((res) => {
       
        this.products = res.data;
        console.log(this.products);
      })
      .catch((e) => {
        console.log(e.response);
      });
  },

  methods: {
    submit() {

        let request;
        if( "id" in this.$route.params){
            let id = this.$route.params.id;
            request = axios.put(
                this.$backendHost + "/products/" + id,
                this.products
            );

        } else {
            resquest = axios.post(this.$backendHost + "/products/", this.products);
           }
            request
                .then((res) =>{
                if(res.status ==200) this.success();
        })
        .catch(()=> this.error());
    }
  },
};
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
