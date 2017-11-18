<template>
    <div>
      <div class="will" v-for="(willmovie,index) in willmovies" :key="willmovie.openTime">
        <p class="w_time">
          <span>{{willmovie.openTime}}</span>
          <span>星期三</span>
        </p>
        <div class="w_con">
          <div class="w_tu">
            <img :src="'https://gw.alicdn.com/'+willmovie.poster" alt="">
            <img src="../assets/play.png" class="play">
          </div>
          <div class="w_des">
            <span class="w_name">{{willmovie.showName}}</span>
            <p class="w_num">{{willmovie.wantCount}}人想看</p>
            <p>导演:{{willmovie.director}}</p>
            <p class="role">主演:{{willmovie.leadingRole}}</p>
          </div>
          <router-link to="">
            <div class="w_btn">预售</div>
          </router-link>
        </div>

      </div>
    </div>

</template>

<script>
  import axios from 'axios'
    export default {
        name: 'will',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
              willmovies:[]
            }
        },
      mounted:function(){
        axios.get('http://localhost:8888/begin')
          .then(function (response) {
            console.log(response)
            if (response.status === 200) {
              this.willmovies = response.data;
              this.willmovies = this.willmovies.begin.returnValue;
              this.willmovies = this.willmovies.soonShows;
              console.log(this.willmovies)
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
  .will{
    text-align: left;
    margin-bottom: 3rem;
  }
  .w_time{

    padding: 0 15px;
    font-size: 0.9rem;
    background: #f5f5f5;
    line-height: 1.94rem;
  }
  .w_con{
    margin-left: 15px;
    padding: 15px 15px 15px 0;
    position: relative;
    overflow: hidden;
  }
  .w_tu {
    float: left;
    width: 3.5rem;
    position: relative;
  }
  .w_tu img{
    width: 100%;
  }
  .w_tu .play{
    width: 1.5rem;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-0.75rem;
    margin-left: -0.75rem;
  }
  .w_des{
    float: left;
    width: 10rem;
    padding:0 15px 0 10px ;
  }
  .w_des .w_name{
    font-size: .88rem;
  }
  .w_des p{
    font-size: .85rem;
    color: #888;
    margin-top: 5px;
  }
  .w_des .w_num{
    color: #ffa84c;
    font-size: .8rem;
  }
  .w_btn{
    position: absolute;
    top:40%;
    right:10%;
    margin-top: -.8rem;
    font-size: .8rem;
    padding: 4px 8px;
    border: 1px solid #80d1ff;
    color: #80d1ff;
    border-radius: .2rem;
  }
  .role{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

</style>
