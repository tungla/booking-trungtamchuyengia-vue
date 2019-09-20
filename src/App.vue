<template>
  <div id="app">
    <Header/>
    <MenuTop/>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import MenuTop from './components/MenuTop.vue'
import BookingFirstStep from './components/BookingFirstStep.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    MenuTop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
