<template>

  <div id="myTaobao">
      <el-collapse accordion>

        <el-collapse-item>

          <template slot="title">

            <img src="../assets/m_dy.png" alt="">
            我的电影票<i class="header-icon el-icon-information"></i>

          </template>
        </el-collapse-item>

        <el-collapse-item>

          <template slot="title">
            <img src="../assets/m_coupon.png" alt="">
            我的优惠券<i class="header-icon el-icon-information"></i>
          </template>
        </el-collapse-item>
        <el-collapse-item>

          <template slot="title">
            <img src="../assets/m_help.png" alt="">
            帮助中心<i class="header-icon el-icon-information"></i>
          </template>
        </el-collapse-item>
        <el-collapse-item>

          <template slot="title">
            <img src="../assets/m_msg.png" alt="">
            消息中心<i class="header-icon el-icon-information"></i>
          </template>
        </el-collapse-item>
      </el-collapse>
    <div class="mtb">
    </div>
    </div>

</template>

<script>
    export default {
        name: 'MyTaoBao',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mtb{
  width:100%;
  height: 100%;
  background-color: #f1f1f1;
}

  #myTaobao{
    text-align: left;
  position: absolute;
    z-index: 90;
    width: 100%;
    height:100%;
    top:0;
    bottom:2.4rem;
    overflow: hidden;

  }
  img{
    vertical-align: middle;
    width: 1.3rem;
    margin:0 0.9rem ;
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
        color: #42b983;
    }
</style>
