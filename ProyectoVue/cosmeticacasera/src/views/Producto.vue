<template>
  <div class="producto">
    <div class="container">
      <div class="my-5">
        <h4>LISTADO PRODUCTOS</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">COD</th>
              <th scope="col">CAT</th>
              <th scope="col">NOMBRE</th>
              <th scope="col">DESCRIPCIÓN</th>
              <th scope="col">PRESENTACIÓN</th>
              <th scope="col">INV</th>
              <th scope="col">PRECIO</th>
              <th scope="col">DISP</th>
              <th scope="col">IMAGEN</th>
            </tr>
          
         
            <tr align="left" v-for="(item, index) in products" :key="index">
              <th scope="row">{{ index+1 }}</th>
              <td>{{ item.codigo }}</td>
              <td>{{ item.categoria }}</td>
              <td>{{ item.nombre }}</td>
              <td>{{ item.descripcion}}</td>
              <td>{{ item.presentacion}}</td>
              <td>{{ item.inv }}</td>
              <td>{{ item.precio }}</td>
              <td>{{ item.disponibilidad }}</td>
              <td>{{ item.imagen }}</td>
            </tr></thead>
            <tbbody >
         
          </tbbody>  
          <br><br>


         <tfoot>
            <tr id="footer-producto">
            <td><router-link to="/formularios/guardarproducto"> "<button aling="center" type="submit" class="btn btn-primary">Guardar</button></router-link></td>
            <td><router-link to="/formularios/eliminarproducto"><button aling="center" type="submit" class="btn btn-primary">Eliminar</button></router-link></td>
            <td><router-link to="/formularios/actualizarproducto"><button aling="center" type="submit" class="btn btn-primary">Actualizar</button></router-link></td>
            <td><router-link to="/"><button aling="center" type="submit" class="btn btn-primary">Salir</button></router-link></td>
            </tr>
            </tfoot>

      </table>
  </div>
</div></div>

</template>

<script>
import axios from "axios";

export default {
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
    listarProductos() {},
  },
};
</script>
