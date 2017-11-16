<template>
    <div class="my">
        <div class="head">
          <router-link to="/"><img src="../assets/zuo.png" alt=""></router-link>
          <span>登录</span>
        </div>
        <div class="logo">
          <img src="../assets/my_taobao.png" alt="">
        </div>
      <div class="input">
        <input type="text" v-model="user" placeholder="手机号/邮箱/会员名">
        <input type="text" v-model="pass" placeholder="请输入密码">
        <div class="i">
          <span class="i_l">免费注册</span>
          <span class="i_r">忘记密码</span>
          <div>

            <button @click="click(user,pass)">登录</button>
            <button class="btn">短信验证</button>
          </div>
          <p>注：用户名和密码均为1111</p>
        </div>
      </div>
    </div>

</template>

<script>

    export default {
        name: 'My',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                user:null,
                pass:null
            }
        },
      methods:{
          click:function (u,p) {
            console.log(u,p);
            if(u == '1111' && p == '1111'){
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              var _this = this;
              function ok() {
                return _this.$router.push({name: 'MyTaoBao'})
              }
              setTimeout(ok,1000)
            }else if(u === null||p === null){
              this.$message('请输入用户名和密码');
            }else{
              this.$message.error('用户名或密码错误');


            }

          }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header{
    display: none;
  }
  #fo{
    display: none;
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
    .my{
      /*overflow: hidden;*/
      position: absolute;
      top:0;
      height:100%;
      left: 0;
      right: 0;
      z-index: 200;
      background-color: white;
    }
    .head{
      width:100%;
      /*background: url("../assets/zuo.png") no-repeat left;*/
      height:2rem;
      line-height: 2rem;
      color: #798c8d;
      font-size: 100%;
      border-bottom: 0.5px solid #f2f2f2;
    }
  .head span{
    text-align: center;
    font-weight: bolder;

  }
  .head a img{
    position: absolute;
    left:10px;
    top:10px;

  }
  /*.logo{*/
    /**/
  /*}*/
  .logo img{
    width: 4.2rem;
    height:4.2rem;
    margin: 2rem auto 0;
  }
  .input{
    margin-left: 15px;
    margin-right: 15px;
  }
input{
  display: block;
  border: none;
  width:100%;
  padding: .7rem 0;
  padding-left: 5px;
  margin-top: 1.5rem;
  margin-bottom: .5rem;
  border-bottom: 1px solid #ff4d64;
  /*  取消输入框高亮，焦点*/
  /*-webkit-tap-highlight-color: rgba(255, 255, 255, 0);*/
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  -webkit-appearance:none;
  outline: none;
}
.i{
  overflow: hidden;
  font-size: .6rem;
}
  .i .i_l{
    float: left;
  }
  .i_r{
    float: right;
  }
  button{
    width: 100%;
    padding: .5rem 0;
    margin-top: 1.8rem;
    font-size: 1.1rem;
    color: #fff;
    border-radius: 2rem;
    background-color: orangered;
    border: none;

    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
    -webkit-appearance:none;
    outline: none;
  }
  .btn{
    border:1px solid #ff4d64;
    background-color: white;
    color: #ff4d64;
  }
  .i p{
    color: #ff4d64;
    text-align: left;
    margin-top: 1.1rem;
  }
</style>
