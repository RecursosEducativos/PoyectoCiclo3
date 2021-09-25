<template>
<div>
 
    <nav>
    <div class="container">
           
      <ul class="barra-navegacion">
        <img border="0" src="@/assets/logo.png" width="350" height="120">
                   
          <router-link to="/">Inicio</router-link> |
          <router-link to="/producto">Productos</router-link> |
          <router-link to="/recetas">Recetas</router-link> |
          <router-link to="/blog">Blog</router-link> |
          <router-link to="/nosotros">Nosotros</router-link> |
          <img border="0" src="./assets/login.png" href= "login.html" width="30" height="30">
          <img border="0" src="./assets/carrito.png" href= "carrito.html" width="30" height="30">
      </ul>        
                
    </div>
  </nav>
  
  <router-view/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, Monserran;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
