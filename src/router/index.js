import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import My from '@/components/My'
import MyTaoBao from '@/components/MyTaoBao'
import WillCome from '@/components/WillCome'
import Detail from '@/components/Detail'
import Dyy from '@/components/Dyy'
import Go from '@/components/go'
import Seat from '@/components/selectSeat'
import Play from '@/components/player'
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
      path:'/go',
      name:'go',
      component:Go
    },
    {
      path:'/seat',
      name:'seat',
      component:Seat
    },
    {
      path:'/play',
      name:'play',
      component:Play
    }
  ]
})
