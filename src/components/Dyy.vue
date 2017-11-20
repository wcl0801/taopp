<template>
    <div class="dyy">
      <input type="text" class="input" placeholder="搜索" ref="b"><div class="cancel" @click="dis" ref="a">取消</div>
      <div class="d_hd">
        <div class="d_l">筛选</div>
        <div class="d_r" @click="sw">搜索</div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="今天8-31" name="first">
          <router-link to="/go">
            <div class="cinema" v-for="(cinemas,index) in cinema" :key="index">
              <p style="color: black">{{cinemas.cinemaName}} <span class="money"> <span class="mon">58</span>元起</span></p>
              <div class="money">{{cinemas.address}}</div>
              <div>
                <div class="money"><span class="mar">退票</span><span class="mar">改签</span><span class="mar">IMAX厅</span></div>

                <div class="money"><span class="mar red">特</span>特惠</div>
                <div class="money">场次：{{cinemas.shows[0].dateShowTimeMap["1504108800"]}}</div>
              </div>
            </div>
          </router-link>
        </el-tab-pane>
        <el-tab-pane label="明天9-1" name="second">
          <div class="cinema" v-for="(cinemas,index) in cinema" :key="index">
            <p>{{cinemas.cinemaName}} <span class="money"> <span class="mon">58</span>元起</span></p>
            <div class="money">{{cinemas.address}}</div>
            <div>
              <div class="money"><span class="mar">退票</span><span class="mar">改签</span><span class="mar">IMAX厅</span></div>

              <div class="money"><span class="mar red">特</span>特惠</div>
              <div class="money">场次：{{cinemas.shows[0].dateShowTimeMap["1504108800"]}}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="后天9-2" name="third">
          <div class="cinema" v-for="(cinemas,index) in cinema" :key="index">
            <p>{{cinemas.cinemaName}} <span class="money"> <span class="mon">58</span>元起</span></p>
            <div class="money">{{cinemas.address}}</div>
            <div>
              <div class="money"><span class="mar">退票</span><span class="mar">改签</span><span class="mar">IMAX厅</span></div>

              <div class="money"><span class="mar red">特</span>特惠</div>
              <div class="money">场次：{{cinemas.shows[0].dateShowTimeMap["1504108800"]}}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="周日9-3" name="fourth">
          <div class="cinema" v-for="(cinemas,index) in cinema" :key="index">
            <p>{{cinemas.cinemaName}} <span class="money"> <span class="mon">58</span>元起</span></p>
            <div class="money">{{cinemas.address}}</div>
            <div>
              <div class="money"><span class="mar">退票</span><span class="mar">改签</span><span class="mar">IMAX厅</span></div>

              <div class="money"><span class="mar red">特</span>特惠</div>
              <div class="money">场次：{{cinemas.shows[0].dateShowTimeMap["1504108800"]}}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="周一9-4" name="fifth">
          <div class="cinema" v-for="(cinemas,index) in cinema" :key="index">
            <p>{{cinemas.cinemaName}} <span class="money"> <span class="mon">58</span>元起</span></p>
            <div class="money">{{cinemas.address}}</div>
            <div>
              <div class="money"><span class="mar">退票</span><span class="mar">改签</span><span class="mar">IMAX厅</span></div>

              <div class="money"><span class="mar red">特</span>特惠</div>
              <div class="money">场次：{{cinemas.shows[0].dateShowTimeMap["1504108800"]}}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="周二9-5" name="sixth">
          <div class="cinema" v-for="(cinemas,index) in cinema" :key="index">
            <p>{{cinemas.cinemaName}} <span class="money"> <span class="mon">58</span>元起</span></p>
            <div class="money">{{cinemas.address}}</div>
            <div>
              <div class="money"><span class="mar">退票</span><span class="mar">改签</span><span class="mar">IMAX厅</span></div>

              <div class="money"><span class="mar red">特</span>特惠</div>
              <div class="money">场次：{{cinemas.shows[0].dateShowTimeMap["1504108800"]}}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="周三9-6" name="seventh">
          <div class="cinema" v-for="(cinemas,index) in cinema" :key="index">
            <p>{{cinemas.cinemaName}} <span class="money"> <span class="mon">58</span>元起</span></p>
            <div class="money">{{cinemas.address}}</div>
            <div>
              <div class="money"><span class="mar">退票</span><span class="mar">改签</span><span class="mar">IMAX厅</span></div>

              <div class="money"><span class="mar red">特</span>特惠</div>
              <div class="money">场次：{{cinemas.shows[0].dateShowTimeMap["1504108800"]}}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="周四9-7" name="eighth">
          <div class="cinema" v-for="(cinemas,index) in cinema" :key="index">
            <p>{{cinemas.cinemaName}} <span class="money"> <span class="mon">58</span>元起</span></p>
            <div class="money">{{cinemas.address}}</div>
            <div>
              <div class="money"><span class="mar">退票</span><span class="mar">改签</span><span class="mar">IMAX厅</span></div>

              <div class="money"><span class="mar red">特</span>特惠</div>
              <div class="money">场次：{{cinemas.shows[0].dateShowTimeMap["1504108800"]}}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="周五9-8" name="nineth">
          <div class="cinema" v-for="(cinemas,index) in cinema" :key="index">
            <p>{{cinemas.cinemaName}} <span class="money"> <span class="mon">58</span>元起</span></p>
            <div class="money">{{cinemas.address}}</div>
            <div>
              <div class="money"><span class="mar">退票</span><span class="mar">改签</span><span class="mar">IMAX厅</span></div>

              <div class="money"><span class="mar red">特</span>特惠</div>
              <div class="money">场次：{{cinemas.shows[0].dateShowTimeMap["1504108800"]}}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="周六9-9" name="tenth">
          <div class="cinema" v-for="(cinemas,index) in cinema" :key="index">
            <p>{{cinemas.cinemaName}} <span class="money"> <span class="mon">58</span>元起</span></p>
            <div class="money">{{cinemas.address}}</div>
            <div>
              <div class="money"><span class="mar">退票</span><span class="mar">改签</span><span class="mar">IMAX厅</span></div>

              <div class="money"><span class="mar red">特</span>特惠</div>
              <div class="money">场次：{{cinemas.shows[0].dateShowTimeMap["1504108800"]}}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="周日9-10" name="eleventh">
          <div class="cinema" v-for="(cinemas,index) in cinema" :key="index">
            <p>{{cinemas.cinemaName}} <span class="money"> <span class="mon">58</span>元起</span></p>
            <div class="money">{{cinemas.address}}</div>
            <div>
              <div class="money"><span class="mar">退票</span><span class="mar">改签</span><span class="mar">IMAX厅</span></div>

              <div class="money"><span class="mar red">特</span>特惠</div>
              <div class="money">场次：{{cinemas.shows[0].dateShowTimeMap["1504108800"]}}</div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>


    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: 'dyy',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                activeName: 'first',
              cinema:[],
              do:[]
            }
        },
      methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        },
        dis:function () {
          this.$refs.b.style.display = "none";
          this.$refs.a.style.display = "none";
        },
        sw:function () {
          this.$refs.a.style.display = "block";
          this.$refs.b.style.display = "block";
        }
      },
      mounted:function () {
        axios.get("http://localhost:8888/cinema")
          .then(function (response) {
            console.log(response.data);
            if(response.status === 200){
              this.cinema = response.data;
              this.cinema = this.cinema.cinema.returnValue;
              this.cinema = this.cinema.mtopCinemas;
              for(var cinemas in this.cinema){
              this.do = this.cinemadisplaySupports;
//              console.log(cinemas)
              }
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
  .cancel{
    display: none;
    position: absolute;
    top: 0;
    right:0;
    z-index: 2;
    background: white;
    width: 10%;
    padding: 0.5rem;
    color: #90b4fc;
  }

  .input{
    display: none;
    background: url("../assets/search.png") no-repeat 0 center;
    background-color: white;
    position: absolute;
    z-index: 2;
    top:0;
    left:0;
    width:77%;
    padding:.6rem 0 ;
    padding-left: 1.5rem;
  }
  .d_hd{
    display: flex;
    position: absolute;
    right:0;
    top:10px;
    width:50%;
    background: white;
  }
  .d_l,.d_r{
    padding-left: 2.5rem;
  }
  .d_l{
    background: url("../assets/choose.png") no-repeat 1.3rem/30% 100%;
  }
  .d_r{
    background: url("../assets/search.png") no-repeat 1.3rem/30% 100%;
  }

  .dyy{
    /*width: 100%;*/
    /*z-index: 50;*/
    /*background: white;*/
    /*position: absolute;*/
    /*top:0;*/
    font-size: .875rem;
  }
  #jt{
    width:0.5rem;
  }
  .el-menu{

    border:none;
  }
  .el-menu-item{
    font-size: .875rem;
    line-height: 2rem;
    height:2rem;
  }
  .el-menu-item:last-child {
    float: right;
    background: url("../assets/choose.png") no-repeat left/30% 80%;
  }
  .el-menu-item:nth-child(2){
    float: right;
    border-left: 1px solid #ccc;
    background: url("../assets/search.png") no-repeat left/30% 80%;
  }
    .cinema{
      border-bottom: 1px solid gainsboro;
      margin-left: 15px;
      margin-bottom: .5rem;
      text-align: left;
      padding-bottom: .5rem;
    }
  .cinema p{
    width: 50%;
    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.875rem;
    /*line-height: .rem;*/
    font-weight: 700;
  }
  .money{
    font-size: .5rem;
    color: #888;
    margin-top:.2rem;
  }
  .mon{
    color: #ff4d64;
  }
  .mar{
    padding: 0 3px;
    margin-right: 5px;
    border:1px solid #90b4f3;
    border-radius: .4rem;
    color: #90b4f3;
  }
  .red{
    background: #ff4d64;
    color: white;
    border: none;
    border-radius:.2rem;

  }



</style>
