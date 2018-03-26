<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <foot-con></foot-con>
  </div>
</template>

<script>
import footCon from 'components/footer'
export default {
  name: 'App',
  components: {
    footCon
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
