import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import game from '@/components/game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/game',
      name: 'game',
      component: game,
    },
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld,
    }
   
    
  ]
})
