<template>
  <div class="header">
    <div class="header-center">
      <div class="tab-item" v-for="(item,index) in data" :key="index" :class="getCls(index)" @click="changeSelect(index)">
        <span class="tab-link">{{item}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => ['赛车', '赛场', '热点', '推荐']
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      index: this.currentIndex
    }
  },
  methods: {
    getCls (index) {
      if (this.index === index) {
        return 'active'
      } else {
        return ''
      }
    },
    changeSelect (index) {
      this.index = index
      this.getCls(index)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~assets/scss/header.scss"
</style>
