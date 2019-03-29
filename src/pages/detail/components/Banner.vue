<template>
  <div>
    <div class="banner">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" />
      <div class="banner-info">
        <div class="banner-tittle">
          xxx
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          vvv
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
