<template>
  <div class="foot_wamp">
    <div class="foot_center">
      <router-link tag="div" class="foot_item" to="/home">
        <img src="../assets/images/home_1.png" alt="图片" />
        <p>首页</p>
      </router-link>
      <router-link tag="div" class="foot_item" to="/news">
        <img src="../assets/images/news_1.png" alt="图片" />
        <p>资讯</p>
      </router-link>
      <router-link tag="div" class="foot_item" to="/footerball">
        <img src="../assets/images/football_1.png" alt="图片" />
        <p>足球</p>
      </router-link>
      <router-link tag="div" class="foot_item" to="/basketball">
        <img src="../assets/images/basketball_1.png" alt="图片" />
        <p>篮球</p>
      </router-link>
      <router-link tag="div" class="foot_item" to="/video">
        <img src="../assets/images/video_1.png" alt="图片" />
        <p>视频</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      index: 0
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~assets/scss/footer.scss"
</style>
