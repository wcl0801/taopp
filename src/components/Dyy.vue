<template>
    <div class="dyy">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="今天8-31" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="明天9-1" name="second">用户管理</el-tab-pane>
        <el-tab-pane label="后天9-2" name="third">配置管理</el-tab-pane>
        <el-tab-pane label="周日9-3" name="fourth">角色管理</el-tab-pane>
        <el-tab-pane label="周一9-4" name="fifth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="周二9-5" name="sixth">用户管理</el-tab-pane>
        <el-tab-pane label="周三9-6" name="seventh">配置管理</el-tab-pane>
        <el-tab-pane label="周四9-7" name="eighth">角色管理</el-tab-pane>
        <el-tab-pane label="周五9-8" name="nineth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="周六9-9" name="tenth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="周日9-10" name="eleventh">定时任务补偿</el-tab-pane>
      </el-tabs>


    </div>
</template>

<script>
    export default {
        name: 'dyy',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                activeName: 'first'
            }
        },
      methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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


</style>
