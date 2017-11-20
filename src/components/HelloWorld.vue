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
    <router-link to="/detail">
      <div class="m_conent">
        <div class="conent" v-for="(movie,index) in movies" :key="index" @click="click(index)">
          <div class="dy_dt">
            <div class="tupian">
              <img :src="'https://gw.alicdn.com/'+movie.poster" class="poster">
              <router-link to="/play">
                <img src="../assets/play.png" class="play">
              </router-link>
            </div>
            <div class="des">
              <div style="color:#000;">{{movie.showName}}</div>

              <el-rate
                v-model="movie.remark"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
              <!--<span>{{movie.remark}}</span>-->




              <p>导演:{{movie.director}}</p>
              <p>主演:{{movie.leadingRole}}</p>
              <router-link to="/dyy"><div class="btn">购票</div></router-link>
              <img src="../assets/jrzr1.png" class="td"  v-if="index==0">
              <img src="../assets/yzzr1.png" class="tw" v-if="index==0">
              <p class="D3">{{movie.showMark}}</p>
            </div>

          </div>
          <p class="b_des" v-for="des in movie.activities">
            <span><span style="color: #fea54c">{{des.activityTag}}</span><span class="cer">|</span><span>{{des.activityTitle}}</span></span>
          </p>
        </div>
      </div>
    </router-link>


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
      pics:pic3,
      movies:[],
      isActive:true
    }
  },
  mounted:function () {
    this.index = this.$route.params.index
    axios.get('http://localhost:8888/data')
    .then(function (response) {
      console.log(response.data)
      this.movies = response.data;
      if (response.status === 200) {
        this.movies = response.data;
        this.movies = this.movies.data.returnValue;


      }
    }.bind(this))
    .catch(function (error) {
      console.log(error)
    })
    axios.get('http://localhost:8888/begin')
      .then(function (response) {
        console.log(response.data)
        if (response.status === 200) {
          if(this.index == 0){
            this.isActive = false;
          }

          console.log(this.isActive)
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      })

  },
  methods:{
    detail:function () {
      this.$router.push({name:'go'})
    },
    click:function (i) {
      console.log(i)
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
  .m_conent{
    padding-bottom: 4rem;
    width: 100%;
    overflow: hidden;
  }
  .conent{
  overflow: hidden;

    padding-top: 15px;
    margin-left: 15px;
    position: relative;
    border-bottom: 1px solid gainsboro;
  }

  .dy_dt{
    overflow: hidden;
    display: inline-block;
    padding: 0 15px 15px 0;
  }
.tupian{
  float: left;
  /*width:3.5rem;*/
  width:20%;
  position: relative;
}

.tupian img{
  width: 100%;

}
.poster{
  width:3.5rem;
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
    width: 7rem;
    overflow: hidden;
  }
  .des p{
    margin-top: .5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .el-rate{
    margin-top: .5rem;
  }
  .des img{
    width: 0.778rem;
  }

  .des>img{
    position: absolute;
    top:0px;
    width: 1.5rem;
  }
  .td{
    right:4.75rem;
  }
  .tw{
    right:2.5rem;
  }
  .D3{
    position: absolute;top:0;right: 0;background: #90b4fc;transform: rotate(45deg);width: 80px;right: -20px;text-align: center;overflow: hidden;color: white;
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
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

</style>
