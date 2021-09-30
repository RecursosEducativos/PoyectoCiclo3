<template>
  <div class="container">

    <h3>Productos Aceites Macerados</h3>

      <div class="container overflow-hidden">
          <div class="row gy-5">
            <div class="col-4" v-for="producto of productos" :key="producto.id" > 
              <div class="p-3 border bg-light">
                  <div class="card"  style="width: 18rem;">
                    <img :src="producto.urlfoto" class="card-img-top" alt="Imagene Producto">
                      <div class="card-body">
                        <h5 class="card-title">{{producto.nombre}}</h5>
                        <p class="card-text">{{producto.descripcion}}</p>
                        <p class="card-text">$ {{producto.precio_p}}</p>
                        
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
name: 'Card',
computed:{

  ...mapState(['productos'])
}
}
</script>

<style>

</style>