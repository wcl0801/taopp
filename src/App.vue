<template>
  <div id="app">
    <HeaderMy></HeaderMy>
    <selectCity></selectCity>
    <router-view/>
    <FooterMy></FooterMy>
  </div>
</template>

<script>
  import HeaderMy from '@/components/HeaderMy'
  import selectCity from '@/components/selectCity/selectCity'
  import FooterMy from '@/components/Footer'
export default {
  name: 'app',
  components:{
    HeaderMy,
    FooterMy,
    selectCity
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
  /*margin-top: 60px;*/
}
</style>
