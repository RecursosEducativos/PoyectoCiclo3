<template>
    <div class="Aceitesmacerados">
       
        <div class="row"><br>
           <h1>Catálogo de Productos</h1>
       <productos></productos>
        

    </div>
    </div>
</template>
<script>

import Productos from '../components/Productos.vue'

export default {
    
    name: 'App',
    components: { 
      
      Productos
  }
}
</script>