<template>
  <div class="index">
    <div class="header">
      <div class="tab-item">
        <span class="tab-link">赛车</span>
      </div>
      <div class="tab-item">
        <span class="tab-link">赛场</span>
      </div>
      <div class="tab-item">
        <span class="tab-link">热点</span>
      </div>
      <div class="tab-item">
        <span class="tab-link">本地</span>
      </div>
    </div>
    <div class="index-main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <footer></footer>
    </div>
    <loading></loading>
  </div>
</template>
<script>
  import footer from "../components/footer"
  import loading from "../components/loading"
</script>
<style lang="scss" scoped>
  @import "../assets/scss/header.scss";
</style>
