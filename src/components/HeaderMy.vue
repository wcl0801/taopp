<template>
  <div id="header">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color=""
      text-color="#7e8c8d"
      active-text-color="#90b4fc">
      <el-menu-item index="1">
        <img src="../assets/tpp.png" style="height: 1.3rem;background-color: #90b4fc;border-radius: 0.3rem">
        <router-link to="/">太原</router-link>
        <img src="../assets/jt.png" id="jt">
      </el-menu-item>

      <el-menu-item index="2">

        <router-link to="/will">即将上映</router-link>
      </el-menu-item>
      <el-menu-item index="3">

        <router-link to="/">正在热映</router-link>
      </el-menu-item>
    </el-menu>
    <!--<div id="lb">-->
      <!--<div class="lb show"><img src="../assets/lb1.jpg" alt=""></div>-->
      <!--<div class="lb"><img src="../assets/lb2.jpg" alt=""></div>-->
      <!--<div class="lb"><img src="../assets/lb3.jpg" alt=""></div>-->
    <!--</div>-->


  </div>
</template>

<script>

    export default {
        name: 'header',
        data() {
          return {
            msg: '网页标题',
            activeIndex2: '1'
          }
        },
      mounted: function () {
        console.log('Header组件挂载成功')
      },
      methods: {
        handleSelect: function (key, keyPath) {
          console.log(key, keyPath)
          if (key === 1) {
            console.log('点击第一个')
            this.$router.push({name: 'home'})
          }
          if (key === '2-1') {
            //
          }
          if (key === 3) {
            //
            this.$router.push({name: 'product'})
          }
        }
      },
      watch: {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    img{
      width:1.3rem;
      vertical-align: middle;
    }
    #jt{
      width:0.5rem;
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
        text-decoration: none;

    }
    .el-menu{

      border:none;
    }
    .el-menu-item{
      font-size: .875rem;
      line-height: 2rem;
      height:2rem;
    }
    .el-menu-item:last-child {
      float: right;
    }
    .el-menu-item:nth-child(2){
      float: right;
    }

/*.lb{*/
  /*width:100%;*/
  /*float: left;*/
  /*display: none;*/
  /*!*position: absolute;*!*/
  /*!*top:2rem;*!*/
  /*!*left:0;*!*/
/*}*/
  /*.show{*/
    /*display: block;*/
  /*}*/
    /*.lb img{*/
      /*width:100%;*/
      /*height:100%;*/
    /*}*/

</style>
