<template>
  <div class="guardarproducto">
    <div class="container">
      <h3>GUARDAR PRODUCTO</h3>
      <br />
     
        <h3>Descripción</h3>
        <br />
        <form class="form row g-3" >
            <div class="input-group mb-3">
                <label aling="left" for="codigo" class="form-label"> Código: </label>&nbsp;
                <input type="text" class="form-control" id="codigo" v-model="products.codigo"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label aling="left" for="categoria" class="form-label" >Categoría: </label >&nbsp;
                <input type="text" class="form-control" id="categoria" v-model="products.categoria" />
            </div>

            <div class="input-group mb-3">

                <label aling="left" for="nombre" class="form-label">Nombre: </label>&nbsp;
                <input type="text" class="form-control" id="nombre"  v-model="products.nombre"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label aling="left" for="descripcion" class="form-label">Descripción: </label>&nbsp;
                <textarea class="form-control" id="descripcion" rows="1" v-model="products.descripcion" ></textarea>
            </div>

            <div class="input-group mb-3">
         
                <label aling="left" for="presentacion" class="form-label">Presentación: </label>&nbsp;
                <input type="text" class="form-control" id="nombre" v-model="products.presentacion"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label aling="left" for="existencia" class="form-label">Existencia: </label>&nbsp;
                <input  type="text" class="form-control" id="existencia" v-model="products.inv"/>
            </div>

            <div class="input-group mb-3">

                <label aling="left" for="precio" class="form-label">Precio $ : </label>&nbsp;
                <input type="text" class="form-control" id="precio" v-model="products.precio"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label aling="left" for="disponible" class="form-label">Disponible: </label>&nbsp;
                <input type="text" class="form-control" placeholder="Si o No" id="disponibilidad" v-model="products.disponibilidad" />
            </div>

            <div class="input-group mb-3">

                <label aling="left" for="imagen" class="form-label">imagen : </label>&nbsp;
                <input type="text"  class="form-control" id="imagen" placeholder="/asset/imagen.png" v-model="products.imagen"/>
            </div>
        </form>
        
      <br>

      <button  @click.prevent="submit" class="btn btn-primary"> Guardar</button >&nbsp;&nbsp;
      <button class="btn btn-primary" onclick="history.go(-1);" >Salir</button>
    </div>
  </div> 

</template>

<script>
 import axios from "axios";
export default {
   
  data() {
    return {
      products: {
        codigo: "",
        categoria: "",
        nombre: "",
        descripcion: "",
        presentacion: "",
        inv: "",
        precio: "",
        disponibilidad: "",
        imagen: "",
      },
    };
  },

  methods: {
    submit() {
    
       axios.post("http://localhost:3080/products", this.products)

        .then((res) => {
           if (res.status == 200) alert("Guardado con éxito ");
         })
         .catch(() => alert("Ups, Ocurrió un error"));
    },
  },
};
</script>

<style>
.h {
  position: left;
}

.forml {
  max-width: 900px;
  margin: 2%;
  margin-bottom: 10px;
  text-align: left;
}
</style>
