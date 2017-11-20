<template>
  <div class="video">
    <div class="h_p">
      <router-link to="/"><span class="back"> < </span></router-link><span class="title">终极预告。。。。。</span>
    </div>
    <video-player  class="vjs-custom-skin"
                   ref="videoPlayer"
                   :options="playerOptions"
                   :playsinline="true"
                   customEventName="customstatechangedeventname">

    </video-player>
    <div class="cont">
      <div class="yi">
        <p class="da">星际特工：千星之城 <span style="color:#f7ba2a;"> ❤❤❤❤❤ </span><span style="font-weight: 100;">8.3</span></p>
        <p class="role">戴恩·德哈恩·卡拉</p>
        <router-link to="/dyy"><span class="bp">购票</span></router-link>
      </div>
      <div class="er">
        <p  class="da">剧照</p>
        <img src="../assets/1.jpg" alt="">
        <img src="../assets/1.jpg" alt="">
        <img src="../assets/1.jpg" alt="">
      </div>
      <div class="san">
        <p class="da">热门影评</p>
        <div>暂无</div>
        <div>评论内容1</div>
        <div>评论内容2</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { videoPlayer } from 'vue-video-player'
  import dy from '../assets/dy1.jpg'
  window.videojs = require('video.js')
  videojs = videojs.default || videojs
  export default {
    name: 'video-player-box',

    components:videoPlayer,
     data:function(){
       return{
         playerOptions: {
           // videojs options
           muted: true,
           language: 'en',
           height:250,
           playbackRates: [0.7, 1.0, 1.5, 2.0],
           sources: [{
             type: "video/mp4",
             src: "http://cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/56253381.mp4"
           }],
           poster: dy,
         }
       }

    }
  }
</script>
<style>
  #header{
    display: none;
  }
  .nav-left{
    display: none;
  }
.h_p{
  text-align: left;
  background: white;
  line-height: 2rem;
}
.back{
  font-size: 1.5rem;
  margin-left: .5rem;
  color: #9cbcfd;
}
.title{
  text-align: center;
  margin-left: 2.5rem;
  font-weight:700;
}
  .video{
    width:100%;
    position: absolute;
  }
  .cont p{
    text-align: left;
    margin-left: 1rem;
    font-size: .5rem;
  }
  .cont .da{
    font-size: 1rem;
    font-weight: 600;
  }
  .cont p:nth-child(1){
    margin-top: 1rem;
  }
  .cont{
    /*overflow: scroll;*/
    background: #f1f1f1;
  }
  .yi{
    margin-bottom: 1rem;
    background: white;
    padding-bottom: 1rem;
    position: relative;
  }
  .yi .bp{
    position: absolute;
    top:15%;
    right:2%;
    color: #ffa6b1;
    border: 1px solid #ffa6b1;
    padding:0 .3rem;
    border-radius: 3px;
  }
  .yi .role{
    padding-top: .5rem;
    color: darkgray;
  }
  .er,.san{
    background: white;
    overflow: hidden;
    margin-bottom: 1rem;
  }
  .er .da{
    padding-bottom: .5rem;
  }
  .er img {
    float: left;
    width: 33.33%;
    padding-bottom: .5rem;
    margin-bottom: .5rem;
  }



</style>
