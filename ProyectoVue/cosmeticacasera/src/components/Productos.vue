<template>
    <div class="container">

   

      <div class="container overflow-hidden" >
          <div class="row gy-5">
            <div class="col-lg-4 col-md-6  col-sm-12"  v-for="producto of productos" :key="producto.id" > 
              <div class="p-3 border bg-light" v-if="producto.categorias='HD'">
                  <div class="card"  style="width: 18rem;">
                    <img :src="producto.url" class="card-img-top" alt="Imagene categoria">
                      <div class="card-body">
                        <h5 class="card-title"><b>{{producto.nombre}}</b></h5>
                        <h6><p class="card-text">DESCRIPCIÓN: {{producto.descripcion}}</p></h6>
                        <p class="card-text">PRESENTACION: {{producto.presentacion}}</p>
                        <p class="card-text"><b>PRECIO ${{producto.precio}}</b></p>
                        <p class="card-text">ESTADO: {{producto.estado}}</p>
                        
                        
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

    import { mapState } from 'vuex'
export default {
name: 'Productos',
computed:{

  ...mapState(['productos'])
}
}

</script>
<style>
.p{
  align-content:"left";
  font-size: 12pt;
}
</style>