<template>
  <div class="hello" >
    <div class="block">

      <el-carousel height="8.5rem">
        <el-carousel-item v-for="(pic,index) in pic">
          <img  :src="pic">
          <!--<h1>{{pic}}</h1>-->
        </el-carousel-item>
      </el-carousel>
    </div>

      <div class="conent" @click="click" v-for="(movie,index) in movies" :key="index">
        <div class="dy">
          <div class="tupian">
            <img :src="'https://gw.alicdn.com/'+movie.backgroundPicture" class="poster">
            <img src="../assets/play.png" class="play">
          </div>
          <div class="des">
            <div>{{movie.showName}}</div>
            <p>
              <span><img src="../assets/wjx.png" alt=""></span>
              <span><img src="../assets/wjx.png" alt=""></span>
              <span><img src="../assets/wjx.png" alt=""></span>
              <span><img src="../assets/wjx.png" alt=""></span>
              <span><img src="../assets/wjx.png" alt=""></span>
              <span>{{movie.remark}}</span>

            </p>
            <p>导演:{{movie.director}}</p>
            <p>主演:{{movie.leadingRole}}</p>
            <router-link to="/"><div class="btn">购票</div></router-link>
            <img src="../assets/jrzr1.png" class="td" v-bind:class="{active:isActive}">
            <img src="../assets/yzzr1.png" class="tw" v-bind:class="{active:isActive}">
          </div>

        </div>
        <p class="b_des" v-for="des in movie.activities">
          <span><span>{{des.activityTag}}</span><span class="cer">|</span><span>{{des.activityTitle}}</span></span>
        </p>
      </div>


  </div>
</template>

<script>
  import pic1 from '../assets/lb1.jpg'
  import pic2 from '../assets/lb2.jpg'
  import pic3 from '../assets/lb3.jpg'
  import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pic:[pic1,pic2,pic3],
      movie:[],
      movies:[],
      isActive:true
    }
  },
  mounted:function () {
    axios.get('http://localhost:8888/data')
    .then(function (response) {
      console.log(response.data)
      this.movies = response.data;
      if (response.status === 200) {
        this.movies = response.data;
        this.movies = this.movies.data.returnValue;

        if(isArray(this.movies[0])){
          isActive = false;
        }

      }
    }.bind(this))
    .catch(function (error) {
      console.log(error)
    })
  },
  methods:{
    click:function () {
      this.$router.url="https://h5.m.taopiaopiao.com/app/moviemain/pages/show-detail/index.html?showid=164895&hasbuybtn=false";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .active{
    display: none;
  }
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
    padding-top: 15px;
    margin-left: 15px;
    position: relative;
    border-bottom: 1px solid gainsboro;
  }

  .dy{
    overflow: hidden;
    padding: 0 15px 15px 0;
  }
.tupian{
  float: left;
  /*width:3.5rem;*/
  width:20%;
  position: relative;
}

.tupian img{
  max-width: 100%;

}
.poster{
  height:5.5rem;
}
 .tupian .play{
    width:1.5rem;
    position: absolute;
    margin-top: -0.75rem;
    margin-left: -0.75rem;
    left: 50%;
    top: 50%;
  }
  .des{
    float: left;
    text-align: left;
    font-size: 0.7778rem;
    padding-left:0.5556rem;
    width: 60%;
  }
  .des p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .des img{
    width: 0.778rem;
  }

  .des>img{
    position: absolute;
    top:0px;
    width: 1.5rem;
  }
  #td{
    right:5.75rem;
  }
  .tw{
    right:3.5rem;
  }
.btn{
    position: absolute;
    top:3rem;
    right:1.5rem;
    padding: 5px 8px;
    border:1px solid palevioletred;
    border-radius: .2rem;
    color: palevioletred;
  }

  p{
    color: #888;
  }
  .b_des{
    text-align: left;
    font-size: 0.7778rem;
    margin-left: 4.1rem;

    border-top:1px solid gainsboro;
    line-height: 36px;
  }
  .cer{
    padding: 0 0.4rem;
  }
  .b_des>span{

  }

</style>
