<<<<<<< HEAD
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        HOST: 'http://127.0.0.1:8888',
        isPlay: false,          //是否播放中
        url: '',                //歌曲地址
        id: ''                  //歌曲id
    },
    getters: {
        isPlay: state => state.isPlay,
        url: state => state.url,
        id: state => state.id
    },
    mutations: {
        setIsPlay: (state,isPlay) => {state.isPlay = isPlay},
        setUrl: (state,url) => {state.url = url},
        setId: (state,id) => {state.id = id}
    }
})

export default store
=======
version https://git-lfs.github.com/spec/v1
oid sha256:360b1fb4994a93cecf1311f3b92484c98f5e7755c7e57fd67857947512f0d65e
size 641
>>>>>>> c3222162 (code)
