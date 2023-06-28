<<<<<<< HEAD
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
=======
version https://git-lfs.github.com/spec/v1
oid sha256:94e26861124651108bc0e5d95a20cb5cb8e78299ace81e9b33e097c04fe49023
size 365
>>>>>>> c3222162 (code)
