<template>
  <div class="producto">
  <div class= "container">
  <div class="my-5">
      <h4>Carrito de compras</h4>
      <table class="table">
          <thead>

              <tr >
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
                

              </tr></thead>
          <tbbody id = "items">
          <tr v-for="(item,index) in productos" :key="index">
                  <th scope="row">{{item._id}}</th>
                  <td>{{item.codigo}}</td>
                  <td>{{item.categoria}}</td>
                  <td>{{item.nombre}}</td>
                  <td>{{item.descrpcion}}</td>
                  <td>{{item.presentacion}}</td>
                  <td>{{item.inv}}</td>
                  <td>{{item.precio}}</td>
                  <td>{{item.disponibilidad}}</td>
                  <td>{{item.imagen}}</td></tr></tbbody>
          <tfoot>
              <tr id="footer-carrito">
                  <th scope="row" colspan="5">Carrito Vacío </th>
              </tr>
          </tfoot>

      </table>
  </div>
</div></div>
    
</template>

<script>

export default {
  data() {
    return{

      productos:[]
    }
  },
  create(){
   this.listarProductos();
  },

  methods:{
  listarProductos(){


    this.axios.get('/producto')
    .then(res=>{
      this.productos=res.data;
    })
      .catch(e=>{

        console.log(e.response)
      })
  }

}
}
</script>