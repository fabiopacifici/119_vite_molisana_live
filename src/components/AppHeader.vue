<script>
import AppLogo from './AppLogo.vue'
export default {
  name: 'AppHeader',
  components: {
    AppLogo
  }
}
</script>
<template>

  <header>

    <AppLogo />

    <nav>
      <a href="">Home</a>
      <a href="">Prodotti</a>
      <a href="">Chi siamo</a>
      <a href="">Contatti</a>
    </nav>

  </header>

</template>


<style lang="scss">

</style>