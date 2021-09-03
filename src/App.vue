<template>
  <div id="app">
    <headerNavbar/>
    <menu-bar/>
    <body-home/>
  </div>
</template>

<script>
import bodyHome from "./components/layouts/bodyHome.vue"
import headerNavbar from "./components/layouts/headerNavbar.vue"
import menuBar from "./components/layouts/menuBar.vue"
export default {
  name: 'App',
  components: {
    bodyHome:bodyHome,
    headerNavbar:headerNavbar,
    menuBar:menuBar
  }
}
</script>

<style>
#app {
  margin: auto;
}
</style>
