<template>
  <div class="chooseSat">
    <div class="head">
      <h5>{{datas.cinemaName}}</h5>
      <p>今天09-06-16:26(国语2D)</p>
    </div>

    <div class="sat">
      <p class="ting">4号厅</p>
      <p>
        <span>可选</span>
        <span>已售</span>
        <span>已选</span>
      </p>
      <div id="seatList">
        <img src="../assets/canS.png" alt="">
      </div>
    </div>

    <div class="showOne" v-bind:class="{ show: isActive }">
      <p>购物成功后将发送取票码到</p>

      <div class="showFour" v-bind:class="{ show: isActive2 }">
        <p>{{phone}}</p>
        <img src="../assets/write.png" alt="" @click="write">
      </div>

      <div class="showThree" v-bind:class="{ show: !isActive2 }">
        <input type="text" :value=phone>
        <button @click="write">确定</button>
      </div>

      <p>票价<span>594元</span></p>
      <router-link to="/my">
        <div class="buttonActive">确认选座</div>
      </router-link>
    </div>

    <div class="showTwo" v-bind:class="{ show: !isActive }">
      <div class="buyBtn">请在上图中选择座位</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: '',
    data () {
      return {
        datas: '',
        isActive: false,
        isActive2: false,
        phone: '15735655335'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
//        console.log(key, keyPath)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      write: function (ev) {
        this.isActive2 = !this.isActive2
        if (!this.isActive2) {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        }
      }
    },
    components: {
    },
    mounted:function () {


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
  .chooseSat{
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:500;
    background: white;
  }
  .chooseSat .head{
    /*border:1px solid red;*/
    text-align: left;
    width:90%;
    margin:3% 0 0 5%;
    font-size:19px;
    padding-bottom: 10px;
  }
  .chooseSat .head h5{
    font-weight:normal;
    margin:4px 0;
  }
  .chooseSat .head p{
    font-size:14px;
    color:red;
  }
  .sat{
    background-color:#efeff4;
    height:420px;
  }

  .buttonActive{
    position: fixed;
    bottom:15px;
    width:90%;
    margin-left:5%;
    line-height:50px;
    color:white;
    background-color:#ff4d64;
    font-size:18px;
  }
  .buyBtn{
    position: fixed;
    bottom:15px;
    margin-left:30%;
    bottom:25px;
  }
  .show{
    display:none;
  }
  .show2{
    display:none;
  }
  .showOne{
    /*border:1px solid blue;*/
    position:relative;
    padding-top: 20px;
    /*bottom:-20px;*/
  }
  .showOne p, .showOne input{
    font-size:15px;
    /*padding-bottom: 10px;*/
    margin:6px 0 10px 20px;
    text-align: left;
  }
  .showThree{
    text-align:left;
  }

  .showThree input{
    width:30%;
    line-height:28px;
    font-size:18px;
    outline-color: dodgerblue;
  }
  .showThree button{
    /*background:none;*/
    border:1px solid dodgerblue;
    border-radius:5px;
    color:dodgerblue;
    width:50px;
    line-height:30px;
    font-size:15px;
    outline: none;
  }
  .showOne img{
    width:15px;
  }

  .showOne p:nth-child(4){
    position:absolute;
    right:10px;
    bottom:10px;
    font-size:16px;
  }
  .showOne p:nth-child(4) span{
    color:red;
    font-size:20px;
    font-weight:bolder;
  }
  .showFour{
    text-align:left;
  }
  .showFour p{
    display:inline-block;
    font-size:19px;
    line-height:32px;
  }
  .sat{

  }
  .sat p{
    font-size: .65rem;
    text-align: center;
    padding-top: .8rem;
    padding-bottom: .25rem;
    width: 65%;
    margin: 0 auto;

  }
  .sat .ting{
    border-bottom: 2px solid #ddd;
    border-radius: 7px;
  }
  .sat span{
    padding-left: 1.6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .sat span:nth-child(1){
    background: url("../assets/canS.png") no-repeat left/50% 50%;

  }
  .sat span:nth-child(2){
    background: url("../assets/saled.png") no-repeat left/50% 50%;

  }
  .sat span:nth-child(3){
    background: url("../assets/selected.png") no-repeat left/50% 50%;

  }

</style>
