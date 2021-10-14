<template>
    <div class="container">

   

      <div class="container overflow-hidden" >
          <div class="row gy-5">
            <div class="col-lg-4 col-md-6  col-sm-12" v-for="(item, index) in products" :key="index" > 
              <div class="p-3 border bg-light" v-if="item.categorias='HD'">
                  <div class="card"  style="width: 18rem;">
                    <img :src="item.imagen" class="card-img-top" alt= {{item.imagen}}>
                      <div class="card-body">
                        <h5 class="card-title"><b>{{item.nombre}}</b></h5>
                        <h6><p class="card-text">DESCRIPCIÓN: {{item.descripcion}}</p></h6>
                        <p class="card-text">PRESENTACION: {{item.presentacion}}</p>
                        <p class="card-text"><b>PRECIO ${{item.precio}}</b></p>
                        <p class="card-text">DISPONIBLE: {{item.disponibilidad}}</p>
                        
                        
                        <router-link to="/recetas" class="btn btn-primary" >Comprar</router-link>
                                    
                      </div>
                  </div>
              </div>
            </div>
          </div>
    </div>  
  </div>
</template>


<script>

import axios from "axios";

export default {
  name: 'Producto',
  data() {
    return {
      products: [],
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
    listaritems() {},
  },
};

</script>
<style>
.p{
  align-content:"left";
  font-size: 12pt;
}
</style>