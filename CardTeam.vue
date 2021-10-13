<template>
  <div class="container">

   

      <div class="container overflow-hidden">
          <div class="row gy-5">
            <div class="col-lg-4 col-md-6  col-sm-12"  v-for="integrante of integrantes" :key="integrante.id" > 
              <div class="p-3 border bg-light">
                  <div class="card"  style="width: 18rem;">
                    <img :src="integrante.urlfoto" class="card-img-top" alt="Imagen integrante">
                      <div class="card-body">
                        <h5 class="card-title">{{integrante.nombre}}</h5>
                        <p class="card-text">{{integrante.descripcion}}</p>
                                    
                          <div>   
                            
                          </div>
                          <a :href="integrante.urlgithub" target="_blank" class="logo">
                            <img src="../assets/logo1.png" alt="GitHub" width="30" height="30"> 
                          </a> 
                          <a :href="integrante.ulinkedin" target="_blank" class="logo">
                            <img src="../assets/logo2.png" alt="GitHub" width="30" height="30"> 
                          </a>                                 
                                    
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
name: 'CardTeam',
computed:{

  ...mapState(['integrantes'])
}
}
</script>

<style>
.card-text{
text-align: left;
}
</style>