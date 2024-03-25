<script>
import ProductCard from './ProductCard.vue';
// no longer in use as we fetch data from the internal json server 
//import { products } from '../data.js';
// moved into the global state
//import axios from 'axios';

import { state } from '../state.js'

export default {
  name: 'AppMain',
  components: {
    ProductCard
  },
  data() {
    return {
      state
      // products
      //products: []
    }
  },


  mounted() {

    console.log(state);
    this.state.getProducts(this.state.base_products_api_url)
    /* 
        axios.get('http://localhost:3000/products')
        .then(response => {
          console.log(response)
          this.products = response.data
        }) */
  }

}
</script>
<template>
  <main>

    <section class="products my-4">

      <div class="container">

        {{ state.message }}
        <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-1">



          <!-- Sono vincolato alla struttura dell'oggetto che passo per recuperare i valori nel componente  ProductCard -->
          <ProductCard :product="product" :key="product.id" v-for="product in state.products" />

          <!-- 
            
            Piú flessibile perché non devo avere per forza un oggetto strutturato 
            con delle proprietá specifiche
            <ProductCard :image="product.image" :title="product.title"  :key="product.id" v-for="product in products" /> -->

          <!--  
          <div class="col" v-for="product in products">
            <div class="card border-0 rounded-0 h-100">
              <img class="card-img-top" :src="product.src" :alt="'Image of' + product.title" />
              <div class="card-body">
                <h4 class="card-title">{{product.title}}</h4>
              </div>
            </div>

          </div> 
        -->

        </div>

      </div>
    </section>
  </main>

</template>
<style></style>