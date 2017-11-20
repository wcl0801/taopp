<template>
  <div class="cinemaInfo">
    <router-link to="/cinema"><span class="jt"><</span></router-link>
    <span class="sHead">{{datas.cinemaName}}</span>
    <div class="pOne">
      <p >地址：{{datas.address}}</p>

      <button v-for="a in datas.displaySupports">
        {{a.name}}
      </button>
      <!--:to="{path:'tcard/'+index}"-->
      <router-link :to="{path:'/tcard/'+this.index}">
        <ul>
          <li>联名卡送影票</li>
          <li>申请浦发信用卡专享</li>
          <li class="jt2">></li>
        </ul>
      </router-link>

    </div>
    <div class="picLunbo"></div>
    <div class="pThree">
      <h5>银魂<span>8.3分</span></h5>
      <p>130分钟|喜剧|小栗旬观天将桥本环奈</p>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="今天09-03" name="first">
        <div>
          <div class="th">
            <span class="xin">新</span><span>新人首张特惠，名额有限抢完为止</span>
            <span class="tobuy"> ></span>
          </div>
          <div class="buy">
            <ul>
              <li class="ti">18:00</li>
              <li>日语 2D</li>
              <li class="tag">新人专享<span>34.8</span>元</li>
            </ul>
            <ul class="xiao">
              <li class="cen">20:10散场</li>
              <li>1号厅</li>
              <li><span>50元</span></li>
            </ul>
            <router-link to="/seat"><a href="" class="mai">购买</a></router-link>
          </div>
          <div class="buy">
            <ul>
              <li class="ti">18:00</li>
              <li>日语 2D</li>
              <li class="tag">新人专享<span>34.8</span>元</li>
            </ul>
            <ul class="xiao">
              <li class="cen">20:10散场</li>
              <li>1号厅</li>
              <li><span>50元</span></li>
            </ul>
            <a href="" class="mai">购买</a>
          </div>
          <div class="buy">
            <ul>
              <li class="ti">18:00</li>
              <li>日语 2D</li>
              <li class="tag">新人专享<span>34.8</span>元</li>
            </ul>
            <ul class="xiao">
              <li class="cen">20:10散场</li>
              <li>1号厅</li>
              <li><span>50元</span></li>
            </ul>
            <a href="" class="mai">购买</a>
          </div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="明天09-03" name="second"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: '',
    data () {
      return {
        datas: [],
        index: '',
        msg: 'Welcome to Your Vue.js App',
        activeIndex: '1',
        activeIndex2: '1',
        activeName: 'first'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
//        console.log(key, keyPath)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
    },
    created () {
      this.index = this.$route.params.index
      axios.get('http://localhost:8888/cinema')
        .then(function(res) {
//          console.log(res.data.data.returnValue.mtopCinemas[this.index])
          this.datas = res.data;
          this.datas = this.datas.cinema.returnValue;
          this.datas = this.datas.mtopCinemas[0]
          console.log(this.datas)
          window.sessionStorage.index = this.index
        }.bind(this))
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .th{
    line-height: 1rem;
    font-size: .5rem;
    padding-bottom: .5rem;
    margin-left: 1rem;
    border-bottom: 1px solid gainsboro;
  }
  .xin{
    border:1px solid #ff8625;
    background: #ff8625;
    border-radius: 4px;
    margin-right: .5rem;
  }
  .tobuy{
    font-weight:900;
    margin-left: 8rem;
  }
  .buy{
    padding-bottom: .8rem;
    position: relative;
    border-bottom: 1px solid gainsboro;
  }
  .buy ul{
    display: flex;
    font-size: .5rem;
    color: gray;
    padding-top: .5rem;
  }
  .buy ul li {
    flex: 1;
    text-align: center;
  }
  .buy ul .ti{
    font-size: 1rem;
  }
  .buy ul .tag{
    flex:1.5;
    text-align: left;
    color: #ff7a8b;
    font-size: .7rem;
  }
  .buy ul .tag span{
    font-size: 1rem;

  }
  .buy .xiao li{
    text-align: left;
  }
  .buy .xiao .cen{
    text-align: center;
  }
  .buy .xiao li span{
    text-decoration: line-through;
  }
  .mai{
    font-size: .8rem;
    position: absolute;
    right: 5%;
    top:50%;
    border:1px solid #ff9ba8;
    padding: 0 .2rem;
    border-radius: 4px;
    color: #ff9ba8;
  }


  .cinemaInfo{
    text-align:left;
    position: absolute;
    top:0;
    width: 100%;
    background: white;
    margin-bottom:3rem;
  }
  .jt{
    color: #afc9fd;
    font-size: 1.5rem;
    margin-left: .5rem;
  }
  .sHead{
    font-weight:700;
    margin-left: .5rem;
    /*margin-top: 1rem;*/

  }
  .cinemaInfo button{
    width:50px;
    outline:none;
    line-height:20px;
    background:none;
    border:1px solid #90b4fc;
    border-radius: 10px;
    color:#90b4fc;
    margin-top:4px;
  }
  .cinemaInfo .pOne{
    /*margin-bottom:100px;*/
    line-height:30px;
    font-size:14px;
    color:grey;
    margin-left:3%;
    margin-top: .2rem;
    border-top:1px solid gainsboro;
  }
  .cinemaInfo .picLunbo{
    border:1px solid blue;
    overflow: hidden;
    height: 8rem;
    width: 100%;
    padding: 0 15px;
    margin-left: -15px;
    margin-top: .8rem;
    background: rgba(0,0,0,.7);
  }
  .cinemaInfo .pOne ul{
    border:1px solid #90b4fc;
    border-radius:5px;
    background:#f3f9fd ;
    margin:10px 0;
    color:#90b4fc;
    font-size:14px;
    line-height:20px;
    padding-left:1%;
    position:relative;
    width:94%;
  }
  .cinemaInfo .jt2{
    color:gray;
    font-weight:bolder;
    position:absolute;
    right:10px;
    font-size:20px;
    line-height:40px;
    font-family: '黑体';
    top:0;
  }
  .cinemaInfo .el-menu--horizontal .el-menu-item {
    height: 52px;
  }
  .cinemaInfo .el-menu-item, .el-submenu__title {
    padding: 0px 10px;
    font-size: 16px;
  }
  .cinemaInfo .el-menu{
    margin-left:3%;
    width:94%;
  }
  .cinemaInfo .el-menu--horizontal>.el-menu-item.is-active, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border-bottom: 2px solid #ff4d64;
    color: #ff4d64;
  }
  .cinemaInfo .pTwo>div{
    position:relative;
    line-height:40px;
    border-bottom:1px solid gainsboro;
    margin:0 3%;
  }
  .cinemaInfo .pThree{
    font-size:22px;
    border-bottom:1px solid gainsboro;
    text-align: center;
    line-height:30px;
  }
  .cinemaInfo .pThree span{
    color:#fea54c;
    font-weight:bolder;
  }
  .cinemaInfo .pThree p:nth-child(2){
    color:grey;
    font-size:15px;
  }
  .cinemaInfo .picLunbo{
    background:#4c4c4c ;
    height:100px;
  }
</style>
