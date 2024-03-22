<script>
import AppLogo from './AppLogo.vue'

export default {
  name: 'AppFooter',
  components: {
    AppLogo
  }
}
</script>
<template>
  <footer>


    <div class="container">
      <div class="row">
        <div class="col">
          <AppLogo />
        </div>

        <div class="col">
          <h4>Pastificio</h4>
          <ul class="list-unstyled">
            <li><a href="">Lorem.</a></li>
            <li><a href="">Lorem.</a></li>
            <li><a href="">Lorem.</a></li>
            <li><a href="">Lorem.</a></li>
            <li><a href="">Lorem.</a></li>
          </ul>
        </div>

        <div class="col">
          <h4>Prodotti</h4>
          <ul class="list-unstyled">
            <li><a href="">Lorem.</a></li>
            <li><a href="">Lorem.</a></li>
            <li><a href="">Lorem.</a></li>
            <li><a href="">Lorem.</a></li>
            <li><a href="">Lorem.</a></li>
          </ul>
        </div>


      </div>
    </div>


  </footer>

</template>
<style lang="scss">

@use '../assets/scss/partials/footer';

</style>