<template>
<div>
  
  <nav>

    <div class="container">
     
      <ul class="barra-navegacion">
        <img border="0" src="@/assets/logo.png" width="350" height="120">&nbsp;&nbsp;
        
                
          <router-link class="item" to="/">Inicio</router-link> |
              
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Productos</a> |
            <ul class="dropdown-menu">
              <li> <router-link class="dropdown-item" to="/aceitesesenciales">Aceites Esenciales</router-link> </li>
              <li> <router-link class="dropdown-item" to="/aceitespuros">Aceites Puros</router-link> </li>
              <li> <router-link class="dropdown-item" to="/arcillas">Arcillas</router-link> </li>
                  
            </ul>
             
              <router-link class="item" to= "/recetas">Recetas</router-link> |
              <router-link class="item" to="/blog">Blog</router-link> |
              <router-link class="item" to="/nosotros">Nosotros</router-link> &nbsp;|
              <router-link class="item" to="/team">Equipo</router-link> &nbsp;|
              <router-link class="item" to="/politicas">Políticas</router-link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              
              <router-link class="item" to="/login"><img class="imglogin" border="0" src="./assets/login.png"  width="50" height="50"></router-link>
              
             </ul>

             


    </div>
    
     <router-view/>
     
  </nav>
 
 
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
                      <a href="https://www.facebook.com/Cosmeticasera/"  target="_blank" class="logo"><img class="imgredes" border="0" src="./assets/facebook.png" width="50" height="50"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="https://www.instagram.com/cosmeticasera/" target="_blank" class="logo"><img class="imgredes" border="0" src="./assets/instagram.png" width="48" height="48"></a>
                     
                      <p>  
                        <br>     
                        <img border="0" src="./assets/logo.png" width="234">
                      </p> 
                    </td> 
                
                        
                <td width="13%" rowspan="4">
                  <ul >
                    <p><router-link class="item" to="politicas">Políticas de despacho</router-link></p>
                    <p><router-link class="item" to="politicas">Políticas de privacidad</router-link></p>
                    <p><router-link class="item" to="politicas">Políticas de devolución</router-link></p>
                    <p><router-link class="item" to="politicas">Términos y condiciones</router-link></p>
                    <p><router-link class="item" to="preguntasfrecuentes">Preguntas frecuentes</router-link></p>
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          Preguntas Frecuentes</a>
                      
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><router-link class="dropdown-item" to="/preguntasfrecuentes">¿Cuántos días tarda la entrega?</router-link></li>
                          <li><router-link class="dropdown-item" to="/preguntasfrecuentes">¿Cómo cambiar producto?</router-link></li>
                          <li><router-link class="dropdown-item" to="/preguntasfrecuentes">¿Cómo devolver un producto?</router-link></li>
                          <li><router-link class="dropdown-item" to="/preguntasfrecuentes">¿Puedo realizar mi pedido por teléfono o vía whatsapp?</router-link></li>
                          <li><router-link class="dropdown-item" to="/preguntasfrecuentes">¿Necesito factura con IVA?</router-link></li>
                          <li><router-link class="dropdown-item" to="/preguntasfrecuentes">Acabo de recibir mi pedido, pero el producto/envase/vaso/termómetro me ha llegado roto.</router-link></li>
                          <li><router-link class="dropdown-item" to="/preguntasfrecuentes">Acabo de recibir mi pedido, pero falta uno o varios productos.</router-link></li>
                          <li><router-link class="dropdown-item" to="/preguntasfrecuentes">¿Cuánta cantidad de X producto debo echar a la crema?</router-link></li>
                          <li><router-link class="dropdown-item" to="/preguntasfrecuentes">¿Cómo debo almacenar los productos en casa? ¿El frigorífico? ¿O no hace falta?</router-link></li>
                          <li><router-link class="dropdown-item" to="/preguntasfrecuentes">¿El ácido hialurónico que se vende en cosmeticasera es de origen animal?</router-link></li>
                        </ul></div>
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
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

select {
  background-color: #d7eef3;
  border: 0px;
  color: #3488db;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
select a {
  font-weight: bold;
  color: #2c3e50;
}
#body {
    background-color: #d7eef3;
    font-family:Montserrat,sans-serif;
    
  }
 
.imgredes:hover {
    width: 10%;
} 
  


</style>