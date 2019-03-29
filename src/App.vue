<template>
  <div id="app">
    <!--路由被加载一次后，被存储，下次刷新，不再重新请求-->
    <keep-alive>
      <!--显示的是当前路由地址对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
