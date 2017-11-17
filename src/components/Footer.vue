<template>
    <div class="footer" id="fo">
        <div class="footer-nav">
          <router-link to="/">电影</router-link>
          <router-link to="/dyy">影院</router-link>
          <router-link to="/my">我的</router-link>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'footer',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer{
      position: fixed;
      bottom: 0;
      width: 100%;
      font-size: .85rem;
      z-index: 100;
      background: white;
    }
    .footer a{
      display: inline-block;
      float: left;
      width: 33.33%;
      height:100%;
      /*font-size: 0.64rem;*/
      padding-top: 28px;
      padding-bottom: 0.2rem;
      position: relative;
    }
    .footer a:nth-child(1){
      background: url("../assets/b_dy.png") no-repeat top/24px 24px;
      color: #90b4fc;
    }

    .footer a:nth-child(2){
      background: url("../assets/b_dyy.png") no-repeat top/24px 24px;

    }
    .footer a:nth-child(3){
      background: url("../assets/b_my.png") no-repeat top/24px 24px;

    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #7e8c8d;
      text-decoration: none;
    }
  img{
    width:100%;
    height:100%;
  }
</style>
