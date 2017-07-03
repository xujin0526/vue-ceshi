<template>
  <div id="app">
    <d-header></d-header>
    
    <router-view></router-view>
    <d-footer></d-footer>
  </div>
</template>

<script>

import dHeader from './components/header.vue'
import dFooter from './components/footer.vue'

export default {
  name: 'app',
  // 注册组件
  components:{
    dHeader,
    dFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  #app{
    width:100%;
    height:auto;
    margin:0 auto;
    margin-bottom:1.25rem;
  }
  li{
    list-style:none;
  }
</style>
