import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import My from '@/components/My'
import MyTaoBao from '@/components/MyTaoBao'
import WillCome from '@/components/WillCome'
import Detail from '@/components/Detail'
import Dyy from '@/components/Dyy'
import City from '@/components/selectCity'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    },
    {
      path:'/my',
      name:'my',
      component:My
    },
    {
      path:'/mytaobao',
      name:'MyTaoBao',
      component:MyTaoBao
    },
    {
      path:'/will',
      name:'will',
      component:WillCome
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail
    },
    {
      path:'/dyy',
      name:'dyy',
      component:Dyy
    },
    {
      path:'/city',
      name:'city',
      component:City
    }
  ]
})
