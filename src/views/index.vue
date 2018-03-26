<template>
  <div class="index">
    <head-con></head-con>
    <div class="index-main">
      <div class="index-main-cen">
        <news-list></news-list>
      </div>
    </div>
    <loading></loading>
  </div>
</template>
<script>
import headCon from 'components/header'
import loading from 'components/loading'
export default {
  components: {
    headCon,
    loading
  }
}
</script>
<style lang="scss" scoped>
  @import "~assets/scss/common.scss";
  .index{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 640px;
    .index-main{
      position: fixed;
      width: 100%;
      left: 0;
      right: 0;
      top: pxTorem(78px);
      bottom: pxTorem(96px);
      .index-main-cen{
        width: 100%;
        max-width: 640px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
      }
    }
  }
</style>
