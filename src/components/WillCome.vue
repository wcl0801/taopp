<template>
    <div class="will">
        <p class="w_time">
          <span>2017-08-30</span>
          <span>星期三</span>
        </p>
      <div class="w_con">
        <div class="w_tu">
          <img src="../assets/w_pic.jpg" alt="">
          <img src="../assets/play.png" class="play">
        </div>
        <div class="w_des">
          <span class="w_name">草原英雄小姐妹</span>
          <p class="w_num">3532人想看</p>
          <p>导演:那英太</p>
          <p>主演:娜木罕,忽兰</p>
        </div>
        <router-link to="">
          <div class="w_btn">预售</div>
        </router-link>
      </div>

      <p class="w_time">
        <span>2017-08-30</span>
        <span>星期三</span>
      </p>
    </div>

</template>

<script>
    export default {
        name: 'will',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .will{
    text-align: left;
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
</style>
