<template>
  <div class="product">
   <h1>This is product page</h1>
  </div>
  <Card v-for="product in products" :key="product" :card="product"/>
         <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" style="font-weight: 900;" id="exampleModalLabel">Cart</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Content -->

                    <!-- show item in cart -->
                    <div id="display-item">
                    </div>

                    <!-- show the total price -->

                    <div id="total-amount"></div>

                    <button class="btn btn-product" onclick="removeAllItems()">Purchase</button>
                    <!-- End of content -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
  computed:{
   products() {
    return this.$store.state.products
   },
   mounted() {
    this.$store.dispatch("getProducts")
   },
  }, 
    name: 'ProductsView',
  components: {Card}
}

</script>
