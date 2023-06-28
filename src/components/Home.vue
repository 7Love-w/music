<<<<<<< HEAD
<template>
    <div>
        <the-header></the-header>
        <the-aside></the-aside>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import TheHeader from './TheHeader';
import TheAside from './TheAside';
import bus from "../assets/js/bus";

export default {
    components:{
        TheHeader,
        TheAside
    },
    data(){
        return {
            collapse: false
        }
    },
    created(){
        //通过Bus进行组件间的通信，来折叠侧边栏
        bus.$on('collapse',msg =>{
            this.collapse = msg
        })
    }
}
</script>
=======
version https://git-lfs.github.com/spec/v1
oid sha256:361f35b307309ab749338c8267f73c6eb7f026a819aed18b307284c0492e804a
size 715
>>>>>>> c3222162 (code)
