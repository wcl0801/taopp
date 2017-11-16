<template>
  <div class="hello">
    <div class="block">

      <el-carousel height="8.5rem">
        <el-carousel-item v-for="(pic,index) in pic">
          <img  :src="pic">
          <!--<h1>{{pic}}</h1>-->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="conent">
      <div class="dy">
        <div class="tupian">
          <img src="../assets/dy1.jpg" alt="">
        </div>
        <div class="des">
          <div>星际特工:千星之城</div>
          <p>
            <span><img src="../assets/wjx.png" alt=""></span>
            <span><img src="../assets/wjx.png" alt=""></span>
            <span><img src="../assets/wjx.png" alt=""></span>
            <span><img src="../assets/wjx.png" alt=""></span>
            <span><img src="../assets/wjx.png" alt=""></span>

          </p>
          <p>导演:吕克·贝松</p>
          <p>主演:戴恩·德哈恩,卡拉·迪瓦</p>
          <button>购票</button>
          <img src="../assets/jrzr1.png" class="td">
          <img src="../assets/yzzr1.png" class="tw">
        </div>

      </div>
      <p><span>新人专享</span>| <span>新人首张特惠,名额有限抢完为止</span>  </p>
    </div>

  </div>
</template>

<script>
  import pic1 from '../assets/lb1.jpg'
  import pic2 from '../assets/lb2.jpg'
  import pic3 from '../assets/lb3.jpg'
  import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pic:[pic1,pic2,pic3]
    }
  },
  mounted:function () {
    axios.get('http://localhost:8888/begin')
    .then(function (response) {
      console.log(response.data)
      if (response.status === 200) {

      }
    }.bind(this))
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    /*overflow: scroll;*/
    margin-bottom: 4.5rem;
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
  .el-carousel__item img {
    color: #475669;
    width:100%;
    height:100%;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    /*background-color: #99a9bf;*/
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .conent{
    padding: 15px;
    position: relative;

  }
  .dy{
    overflow: hidden;
    padding: 0 15px 15px 0;
  }
.tupian{
  float: left;
  width:3.5rem;
}
.tupian img{
  width:100%;
}
  .des{
    float: left;
    text-align: left;
    font-size: 0.7778rem;
    padding-left:10px;

  }
  .des>img{
    position: absolute;
    top:0px;
    z-index: 10;
    width: 1.5rem;
  }
  .td{
    right:5.75rem;
  }
  .tw{
    right:3.5rem;
  }
.des btn{
    position: absolute;
  }

  p{
    color: #888;
    margin-top: 0.446rem;
  }
  img {
    vertical-align: baseline;
  }
</style>
