<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
  <!-- <MyHome/>  -->
  <!-- <Home/> -->
  <MyText/>
</template>

<script>
import MyText from './components/MyText.vue'
// import MyHome from './components/MyHome.vue'
// import Home from './components/Home.vue'


export default {
  name: 'App',
  components: {
    // MyHome,
    // Home
    MyText
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
