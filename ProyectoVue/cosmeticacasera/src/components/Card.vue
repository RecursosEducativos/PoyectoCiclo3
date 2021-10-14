<template>
  <div class="container">

   

      <div class="container overflow-hidden" >
          <div class="row gy-5" >
            <div class="col-lg-4 col-md-6  col-sm-12"  v-for="categoria of categorias" :key="categoria.id" > 
              <div class="p-3 border bg-light" v-if="categoria.categorias='HD'">
                  <div class="card"  style="width: 18rem;">
                    <img :src="categoria.urlfoto" class="card-img-top" alt="Imagenes categoria">
                      <div class="card-body">
                        <h5 class="card-title">{{categoria.nombre}}</h5>
                        <p class="card-text">{{categoria.contenido}}</p>
                        
                        
                        <router-link to="/articulos" class="btn btn-primary" >Comprar</router-link>
                                    
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
name: 'Card',
computed:{

  ...mapState(['categorias'])
}
}


</script>

<style>

</style>