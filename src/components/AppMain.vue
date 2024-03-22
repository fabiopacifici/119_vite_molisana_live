<script>
import ProductCard from './ProductCard.vue';
import { products } from '../data.js';
export default {
  name: 'AppMain',
  components: {
    ProductCard
  },
  data() {
    return {
      products
    }
  }

}
</script>
<template>
  <main>

    <section class="products my-4">

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-1">



          <!-- Sono vincolato alla struttura dell'oggetto che passo per recuperare i valori nel componente  ProductCard -->
          <ProductCard :product="product" :key="product.id" v-for="product in products" />

          <!-- 
            
            Piú flessibile perché non devo avere per forza un oggetto strutturato 
            con delle proprietá specifiche
            <ProductCard :image="product.src" :title="product.title"  :key="product.id" v-for="product in products" /> -->

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