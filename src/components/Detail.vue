<template>
    <div class="detail">
      <div class="d_head">
        <div class="d_jt">
          <img src="../assets/jiantou.png" alt="">
        </div>
        <p class="m_name">星际特工：千星之城</p>
      </div>
      <div class="d_title">
        <div class="d_tu">
          <img src="../assets/dy1.jpg" alt="">
        </div>
        <div class="d_xx">
          <p> <p class="d_name">星际特工：千星之城</p><span class="d_3d">IMAX3D</span></p>
          <p class="en">Valerian and the City of a Thousand Planets</p>
          <ul class="d_type">
            <li>动作,冒险,科幻</li>
            <li>法国|137分钟</li>
            <li>
              <span>2017-08-25</span>
              <span>在中国大陆上映</span>
            </li>
            <li>想看人数</li>
            <li class="d_num">126301</li>
          </ul>
        </div>
      </div>
      <div style="background: #f5f5f5">
        <div class="des">
          <p class="d_des" ref="name">这块数据JSON里面没有，所以是固定的 故事改编自著名的二战军事事件“敦刻尔克大撤退”。二战初期，40万的英法盟军被敌军围困于敦刻尔克的海滩之上，面对敌军步步逼近的绝境，他们不得不为自己的命运背水一战，才有可能活着回家。 本片以二战时期代号为“发电机计划”的敦刻尔克大撤退为故事背景，是一部从不同视角聚焦人类生存的电影。影片将会分成沙滩上的步兵部分（芬恩·怀特海德与哈里·斯泰尔斯参演）、海军部分（希里安·墨菲与马克·里朗斯参演）以及空军部分（汤姆·哈迪开战斗机）分别来讲述，力求从不同的个人观点来呈现和构建这起历史事件。</p>
          <p class="open" @click="open" v-text="val">{val}</p>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: 'detail',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                val:'展开',
                op:false
            }
        },
      methods:{
          open:function (ev) {
            this.op = !this.op;
            if(this.op){
              this.val = '收起'
              var h = ev.target.parentNode;
              console.log(h);
            }else{
              this.val = '展开'
            }

          }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .detail{
    background: white;
    width: 100%;
    position: absolute;
    top:0;
  }
  .d_head{
    line-height: 2.5rem;
  }
  .d_jt{
    float: left;
    padding-left: .5rem;
    vertical-align: middle;
  }
  .m_name{
    width: 60%;
    margin: 0 auto;
    font-weight: 700;
  }
  .d_title{
    overflow: hidden;
    text-align: left;
    color: white;
    background:#333 ;
    padding-top: .8rem;
    padding-bottom: .8rem;
  }
  .d_tu{
    float: left;
    width: 30%;
    text-align: center;
  }
  .d_xx{
    float: left;
    font-size: 1rem;
    width:70%;
    display: inline;
  }
  .d_xx .d_name{
    float: left;
    width: 50%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .d_xx .d_3d{
    font-size: .7rem;
    border:1px solid darkgrey;
    color: darkgrey;
    border-radius: .2rem;
    margin-left: .5rem;
  }
  .en{
    width:100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .75rem;
  }
  .d_type{
    margin-top: .5rem;
  }
  .d_type li{
    width: 100%;
    font-size: .7rem;
  }
 .d_type  .d_num{
    font-size: 1rem;
   color: orange;
   margin-top: .5rem;
  }
  .des{
    height: 6rem;
    margin-bottom: .7rem;
    padding: .7rem .7rem 0 .7rem;
    line-height: 1.25rem;
    font-size: .7rem;
    text-indent: 1.5em;
    display: inline-block;
    background: white;
  }
  .d_des{
    height:4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:pre-wrap ;
  }
  .open{
    font-size: 1rem;
    color: #7997e1;
  }



</style>
