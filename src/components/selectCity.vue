<template>
  <div class="nav_left">
    <!--<img src="./img/logo.png" alt="taoPP" class="logo">-->
    <div class="city_button" @click="slideCityHandle">{{chooseCity}}</div>

    <transition name='move'>
      <div class="selectCity" v-show="isSelect">

        <!-- 左边布局 -->
        <div class="section" v-for="(cityArr,key) in cityData">
          <p class="city_key" :id="key">{{key.toUpperCase()}}</p>
          <ul>
            <li class="city_value" v-for="(city,index) in cityArr" v-on:click="chooseCityHandle(city)">{{city}}</li>
          </ul>
        </div>

        <!-- 右边首字母列表 -->
        <div class="city-firstletter">
          <ul>
            <li v-for="(cityArr,key) in cityData">
              <a :href="'#'+key" @click="chooseLetterHandle(key.toUpperCase())">{{key.toUpperCase()}}</a>
            </li>
          </ul>
        </div>

        <!-- 中间显示 -->
        <transition name='chooseLetter'>
          <p id="chooseLetter" v-show="chooseLeterShow">
            <span>{{chooseLetter}}</span>
          </p>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
  import cityData from '../assets/cityData.js'
  console.log(cityData)

  export default {
    data: function () {
      return {
        isSelect: false,
        cityData: cityData,
        chooseCity: '',
        chooseLetter: 'A',
        chooseLeterShow: false
      }
    },
    mounted: function () {
      // 本地读出来
      console.log(window.sessionStorage)
      var city = window.sessionStorage.chooseCity
//      console.log(city)
      // 获取新浪返回当前城市数据
      this.chooseCity = city
    },
    methods: {
      // 展示城市页面
      slideCityHandle: function () {
        this.isSelect = true
      },
      chooseCityHandle: function (city) {
        this.chooseCity = city
        // 隐藏
        this.isSelect = false
        // 本次选择存到session或者storage,下次使用，不在用定位获取的
        window.sessionStorage.chooseCity = city
      },
      chooseLetterHandle (letter) {
        this.chooseLetter = letter
        this.chooseLeterShow = true

        setTimeout(() => {
          this.chooseLeterShow = false
        }, 400)
      }
    }
  }
</script>
<style scoped>
  .nav_left {
    display: flex;
    justify-content: left;
    align-items: center;
    font-family: "微软雅黑";
  }

  .nav_left .logo {
    padding: 2px;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 4px;
    background: #90b4fc;
    margin: .3rem 15px;
  }

  .city_button {
    max-width: 70px;
    font-size: .8rem;
    padding-right: 1.1rem;
    color: #90b4fc;
    /*background: url("./img/down.png") no-repeat right center/.7rem auto;*/
  }

  .selectCity {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: white;
    box-sizing: border-box;
    /* border: 1px solid red; */
    left: 0;
    top: 0;
    overflow: scroll;
    padding: .5rem;

    /* transform: translateX(-1000px); */

  }

  .city_key {
    color: #00C7C7;
    font-size: 1.5rem;

    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e8ecf1;
    width: 100%;
  }

  .city_value {
    color: #afafaf;
    width: 95%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e8ecf1;
    cursor: pointer;
  }

  .city-firstletter {
    position: fixed;
    width: 40px;
    top: 0;
    bottom: 0;
    right: 0px;

    text-align: center;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; */
    overflow: scroll;
  }

  .city-firstletter li a {
    color: #00C7C7;
    font-size: 18px;
    padding: 2px 8px;
    display: inline-block;
    font-weight: lighter;
  }


  #chooseLetter {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    color: #00C7C7;
    font-size: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #chooseLetter span {
    border: 2px solid #00C7C7;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }
  /* 显示字母动画 */

  .chooseLetter-enter-active,
  .chooseLetter-leave-active {
    transition: opacity .5s
  }

  .chooseLetter-enter,
  .chooseLetter-leave-to {
    opacity: 0
  }


  /* 城市列表出来动画 */
  .move-enter-active,
  .move-leave-active {
    transition: all .8s;
  }

  .move-enter,.move-leave-to {
    transform: translateX(2000px);
    opacity: 0;

  }

  .move-enter-to,.move-leave{
    transform: translateX(0px);
    opacity: 1;
  }

</style>
