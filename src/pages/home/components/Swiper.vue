<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!--<swiper-slide v-for="item of list" :key="item.id">-->
        <!--<img class="swiper-img" :src="item.imgUrl" />-->
      <!--</swiper-slide>-->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 分页器
        loop: true // 循环
      }
      // swiperList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553660858654&di=1d12f0b98490fff08e0c6a826cf61eb9&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F18%2F51%2F84%2F18518492-41f9b17397805f54d9367e7fbd2c09b1-0.jpg'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553660858764&di=5461f0f6c93bf470a330d25d0b38e23d&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F04%2F20%2F33%2Fc5a18789359b4fa3d5af6dcf3e2ebe74.jpg'
      //   }
      // ]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
