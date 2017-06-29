import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import edit from '@/components/edit'
import photoAlbum from '@/components/photoAlbum'
import support from '@/components/support'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/photoAlbum',
      name: 'photoAlbum',
      component: photoAlbum
    },
    {
      path: '/support',
      name: 'support',
      component: support
    }
  ]
})
