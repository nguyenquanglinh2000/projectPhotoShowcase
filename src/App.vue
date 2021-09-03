<template>
  <div id="app">
    <headerNavbar/>
    <home/>
  </div>
</template>

<script>
import home from "./components/layouts/home.vue"
import headerNavbar from "./components/layouts/headerNavbar.vue"
export default {
  name: 'App',
  components: {
    home:home,
    headerNavbar:headerNavbar,

  }
}
</script>

<style>
#app {
  margin: auto;
}
</style>
