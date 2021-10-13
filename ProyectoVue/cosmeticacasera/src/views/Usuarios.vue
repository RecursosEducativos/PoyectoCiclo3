<template>
  <div class="usuarios">
  <div class= "container">
  <div class="my-3">
      <h4>USUARIOS</h4><br>
      <table class="table">
          <thead>

              <tr >
                  
                  <th scope="col">NOMBRE</th>
                  <th scope="col">CORRE0</th>
                  <th scope="col">CONTRASEÑA</th>
                  
                

              </tr>
              <tr align="left" v-for="usuario of usuarios" :key="usuario.id">
                  <td>{{usuario.nombre}}</td>
                  <td>{{usuario.correo}}</td>
                  <td>{{usuario.password}}</td>
                  
                

              </tr></thead>
          <tbbody >
         
          </tbbody>      
                  
          <tfoot>
              <tr id="footer-usuario">
            <td><router-link to="/formularios/guardarusuario"> "<button aling="center" type="submit" class="btn btn-primary">Guardar</button></router-link></td>
            <td><button aling="center" type="submit" class="btn btn-primary">Eliminar</button></td>
            <td><button aling="center" type="submit" class="btn btn-primary">Actualizar</button></td>
            <td><button aling="center" type="submit" class="btn btn-primary">Salir</button></td>
              </tr>
          </tfoot>

      </table>
  </div>
</div></div>



    
</template>


<script>
import { mapState } from 'vuex'
export default {
name: 'usuarios',
computed:{

  ...mapState(['usuarios'])
}
}
</script>


