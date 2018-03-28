<template>
  <div class="list">
    <div class="list_center">
      <div class="list_item"></div>
    </div>
  </div>
</template>
<script>
// import scroll from 'components/scroll'
export default {

}
</script>
<style lang="scss" scoped>
  @import "~assets/scss/common.scss";
  .list{
    position: fixed;
    top: pxTorem(78px);
    left: 0;
    right: 0;
    width: 100%;
    bottom: pxTorem(96px);
    .list_center{
      width: 100%;
      height: 100%;
      max-width: 640px;
      margin: 0 auto;
      overflow: hidden;
      .list_item{
        float: left;
        width: 100%;
        padding: .08rem .12rem;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
      }
    }
  }
</style>
