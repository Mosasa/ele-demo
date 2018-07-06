<template>
  <div id="app">
    <router-link to="/login">/login</router-link>
    <transition name="router-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade">
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './style/common'
.router-fade-enter, .router-fade-leave-active{
  //name+enter:匹配transition切换（离开）进来的时刻(一瞬间)
  opacity : 0;
}
.router-fade-enter-active{
  //name+enter+active:匹配页面在进入的过程中,完全进入后会移除这个类名
  transition: opacity 3s;
}
.router-fade-leave{
  transition : opacity 3s;
}

</style>
