<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/Login.vue'], resolve)
    },

    {
      path: '/Home',
      component: resolve => require(['../components/Home.vue'], resolve),
      children:[
        {
          path: '/Info',
          component: resolve => require(['../pages/InfoPage.vue'], resolve)
        },
        {
          path: '/Consumer',
          component: resolve => require(['../pages/ConsumerPage.vue'], resolve)
        },
        {
          path: '/Singer',
          component: resolve => require(['../pages/SingerPage.vue'], resolve)
        },
        {
          path: '/SongList',
          component: resolve => require(['../pages/SongListPage.vue'], resolve)
        },
        {
          path: '/Song',
          component: resolve => require(['../pages/SongPage.vue'], resolve)
        },
        {
          path: '/ListSong',
          component: resolve => require(['../pages/ListSongPage.vue'], resolve)
        },
        {
          path: '/Collect',
          component: resolve => require(['../pages/CollectPage.vue'], resolve)
        },
        {
          path: '/Comment',
          component: resolve => require(['../pages/CommentPage.vue'], resolve)
        }

      ]
    }

    

  ]
})
=======
version https://git-lfs.github.com/spec/v1
oid sha256:ba93bdc2b63819a0d3e4d4f3629a99168ed91b042bc2cc8d00e2fde92bc30184
size 1430
>>>>>>> c3222162 (code)