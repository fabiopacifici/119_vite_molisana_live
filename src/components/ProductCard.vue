<script>
export default {
  name: 'ProductCard',
  //props: ['title', 'image']
  props: {
   /*  title: String,
    image: String */
    product: Object
  }
}
</script>

<template>
  <div class="col">
    <div class="card border-0 rounded-0 h-100">
      <img class="card-img-top" :src="product.src" :alt="'Image of' + product.title" />
      <!-- <img class="card-img-top" :src="image" :alt="'Image of' + title" /> -->
      <div class="card-body">
        <!-- <h4 class="card-title">{{ title }}</h4> -->
        <h4 class="card-title">{{ product.title }}</h4>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


.card {
  background-color: $primary_color;
}

</style>