<template>
  <div class="my-5">
      <h4>Carrito de compras</h4>
      <table class="table">
          <thead>

              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Accion</th>
                  <th scope="col">total</th>

              </tr></thead>
          <tbbody id="item"></tbbody>
          <tfoot>
              <tr id="footer-carrito">
                  <th scope="row" colspan="5">Carrito Vacío </th>
              </tr>
          </tfoot>

      </table>
  </div>

</template>

<script>

    import { mapState } from 'vuex'
export default {
name: 'Carrito',
computed:{

  ...mapState(['categorias'])
}
}

</script>
