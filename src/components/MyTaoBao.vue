<template>

  <div id="myTaobao">
      <el-collapse accordion>

        <el-collapse-item>

          <template slot="title">

            <img src="../assets/m_dy.png" alt="">
            我的电影票<i class="header-icon el-icon-information"></i>

          </template>
          <div class="tics">
            <div class="tic">
              <div class="l">
                <span>座</span>
              </div>
              <div class="c">
                <p>合约男女 2张</p>
                <p>2017-02-18 18:00</p>
                <p>北京古城电影院</p>
              </div>
              <div class="r">
                <span>查看</span>
              </div>
            </div>
            <div class="tic">
              <div class="l">
                <span>座</span>
              </div>
              <div class="c">
                <p>功夫瑜伽 2张</p>
                <p>2017-02-14 20:00</p>
                <p>北京古城电影院</p>
              </div>
              <div class="r">
                <span>查看</span>
              </div>
            </div>
            <div class="tic">
              <div class="l">
                <span>座</span>
              </div>
              <div class="c">
                <p>战狼2 2张</p>
                <p>2017-07-29 11:40</p>
                <p>北京古城电影院</p>
              </div>
              <div class="r">
                <span>查看</span>
              </div>
            </div>
          </div>
        </el-collapse-item>

        <el-collapse-item>

          <template slot="title">
            <img src="../assets/m_coupon.png" alt="">
            我的优惠券<i class="header-icon el-icon-information"></i>
          </template>
          <div class="yhq">
            <div class="top"></div>
            <div class="yh">
              <div class="yh_l">
                <p class="l_1">淘票票用户回馈代金券</p>
                <p>发放后30天内有效|不可和活动票叠加使用</p>
                <p>有效期至：2017-03-15</p>
              </div>
              <div class="yh_r">10元</div>
            </div>
            <div class="yh">
              <div class="yh_l">
                <p class="l_1">淘票票用户回馈代金券</p>
                <p>发放后30天内有效|不可和活动票叠加使用</p>
                <p>有效期至：2017-03-15</p>
              </div>
              <div class="yh_r">10元</div>
            </div>
            <div class="yh">
              <div class="yh_l">
                <p class="l_1">淘票票用户回馈代金券</p>
                <p>发放后30天内有效|不可和活动票叠加使用</p>
                <p>有效期至：2017-03-15</p>
              </div>
              <div class="yh_r">10元</div>
            </div>
            <div class="top"></div>
          </div>
        </el-collapse-item>
        <el-collapse-item>

          <template slot="title">
            <img src="../assets/m_help.png" alt="">
            帮助中心<i class="header-icon el-icon-information"></i>
          </template>
          <div class="center">暂无信息</div>
        </el-collapse-item>
        <el-collapse-item>

          <template slot="title">
            <img src="../assets/m_msg.png" alt="">
            消息中心<i class="header-icon el-icon-information"></i>
          </template>
          <div class="center">暂无信息</div>
        </el-collapse-item>
      </el-collapse>
    <div class="mtb">
    </div>
    </div>

</template>

<script>
    export default {
        name: 'myTaoBao',
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
.tics{
  background: #f1f1f1;
}
.tic{
  display: flex;
  margin-top: 10px;
  background: white;
}
  .l{

    text-align: center;
    margin-top: 10%;
    flex: 1;
  }
  .l span{
    border:1px solid #bbb;
    border-radius: 50%;
    font-size: .8rem;
    color: #fff;
    padding:.7rem;
    background: #bbb;
  }
  .c{
    flex: 3;
    font-size: .8rem;
    color: #ccc;
    padding:.5rem 0;
    background: url("../assets/showed.png") no-repeat right center/15% 50%;
  }
  .r{
    flex: 1;
    margin-top: 10%;
    text-align: center;
  }
  .r span{
    border:1px solid #ffc600;
    color: #ffc600;
    padding:.2rem .4rem;
    -webkit-border-radius: .1rem;
    -moz-border-radius: .1rem;
    border-radius: .1rem;
  }
  .yhq{
    background: #f1f1f1;
  }
  .top{
    height:10px;
  }
  .yh{
    background: white;
    display: flex;
    margin:0 10px 10px 10px;
    border-radius: .2rem;
  }
  .yh_l{
    padding:.5rem;
    flex: 3;
    color: #bbb;
  }
  .l_1{
    font-size: .9rem;
    margin-bottom: 1rem;
  }
  .yh_r{
    flex: 1;
    text-align: center;
    font-size: 1.4rem;
    padding-top: 2%;
    background: url("../assets/showed.png") no-repeat center/100%;
    background-size: 3.5rem auto;
    opacity: 0.5;
  }
.center{
  text-align: center;
}

</style>
