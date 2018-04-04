<template>
  <div class="loading">
    <img src="./loading.gif" alt="img" width="24" height="24">
    <p class="text">{{text}}</p>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '正在加载...'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~assets/scss/common.scss";
  .loading {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    img{
      display: inline-block;
      width: 24px;
      height: 24px;
      vertical-align: top;
    }
    p{
      width: 100%;
      font-size: pxTorem(26px);
      text-align: center;
      margin: 5px 0;
    }
  }
</style>
