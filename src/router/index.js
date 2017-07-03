import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import edit from '@/components/edit'
import photoAlbum from '@/components/photoAlbum'
import support from '@/components/support'
import articleOne from '@/components/articleOne'
import articleTwo from '@/components/articleTwo'
import articleThree from '@/components/articleThree'
import articleFour from '@/components/articleFour'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: home,
      children: [
        {path: '/home/articleOne',component:articleOne},
        {path: '/home/articleTwo',component:articleTwo},
        {path: '/home/articleThree',component:articleThree},
        {path: '/home/articleFour',component:articleFour}
      ]
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
