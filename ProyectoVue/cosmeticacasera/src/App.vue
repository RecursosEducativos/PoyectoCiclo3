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
  
      <footer class= "footer" >
        <div class="container">
          <br>
          <table border="0" width="100%" id="table1" bgcolor="#000000" cellpadding="15" cellspacing="11">
                <tr>
                  <td width="36%">NUESTRA EMPRESA</td>
                  <td width="25%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INFORMACIÓN</td>
                  <td width="35%">CONTÁCTENOS</td>
            
                </tr>
                <tr>
                    <td rowspan="4" width="36%">
                      <p align="justify">Somos una empresa de materias 
                        primas para cosmética casera, elaboración cremas, jabones, productos 
                        capilares, aromaterapia y mucho más.
                      </p>
                      <img border="0" src="./assets/facebook.png" width="50" height="50">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <img border="0" src="./assets/instagram.png" width="48" height="48">
                    
                      <p>  
                        <br>     
                        <img border="0" src="./assets/logo.png" width="234">
                      </p> 
                    </td> 
                
                        
                <td width="13%" rowspan="4">
                  <ul >
                    <p>Políticas de despacho</p>
                    <p>Políticas de privacidad</p>
                    <p>Políticas de devolución</p>
                    <p>Términos y condiciones</p>
                    <p>Preguntas frecuentes</p>
                  </ul>
                </td>

                <td width="50%" height="20">SERVICIO AL CLIENTE

                  <td width="50%" height="59" font-size= 20px>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h4><img border="0" src="./assets/whatsapp.png" width="48" height="48">&nbsp;&nbsp;&nbsp; 
                        +573183224301
                    </h4>
                  </td>
                    <h5>métodos de pago</h5>
                    <img border="0" src="./assets/qr4.png" width="65" height="65">&nbsp;&nbsp;&nbsp;
                    <img border="0" src="./assets/qr3.png" width="65" height="65">&nbsp;&nbsp;
                    <img border="0" src="./assets/qr2.png" width="65" height="65">&nbsp;&nbsp;
                    <img border="0" src="./assets/qr1.png" width="65" height="65">
                      
                </td></tr>

              <tr>
                            
                <td >
                    <hr>
                    <p align="right">Grupo PAREZ Derechos Reservados - 2021.</p>
                </td>
              </tr>
          </table>   
        </div>  
      </footer>
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
