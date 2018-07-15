<template>
  <div>
  <cart-table></cart-table>
  </div>
</template>

<script>
import CartTable from './components/Table.vue'


export default {
  name: 'Cart',
  components: {
    CartTable: CartTable
  }
}
</script>

<style>

</style>
