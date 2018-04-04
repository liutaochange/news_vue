<template>
  <div class="list">
    <div class="list_center">
      <ul class="list_item">
        <li class="articleItem" v-for="(Item,index) in list" :key="index" @click="toDetails(index)">
          <div class="articleLeft">
            <p class="articleTit">{{Item.articletitle}}</p>
            <div class="articleInfo">
              <span>{{Item.createtime}}</span>
              <div class="linkNum">
                <img src="images/dianzan.png" alt="图片" />
                <p>{{Item.clickup}}</p>
              </div>
            </div>
          </div>
          <div class="articleRight">
            <img :src="Item.articleimg" alt="图片">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import scroll from 'components/scroll'
import {getBanner} from 'api/index'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this._getBanner()
  },
  methods: {
    _getBanner () {
      getBanner().then((res) => {
        console.log(res.data)
      })
    },
    toDetails (index) {

    }
  }
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
        .articleItem{
          float: left;
          width: 100%;
          box-sizing: border-box;
          border-bottom:  1px solid #f2f2f2;
          position: relative;
          cursor: pointer;
        }
        .articleLeft{
          margin-right: 2.2rem;
        }
        .articleRight{
          float: right;
          width: 2rem;
          height: 1.4rem;
        }
        .articleRight img{
          float: left;
          width: 100%;
          height: 100%;
        }
        .articleTit{
          font-size: .28rem;
          color: #161616;
          line-height: .36rem;
          text-overflow: ellipsis;
          float: left;
          overflow: hidden;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        .articleInfo{
          position: absolute;
          bottom: 0.14rem;
          left: 0;
          font-size: 0;
        }
        .articleInfo span {
          width: auto;
          color: #bbb;
          font-size: 0.28rem;
          margin-right: .12rem;
          display: inline-block;
          max-width: 4rem;
          vertical-align: middle;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .articleInfo .linkNum {
          width: auto;
          display: inline-block;
          max-width: 5rem;
          vertical-align: middle;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 0;
          margin-left: .2rem;
        }
        .articleInfo .linkNum img{
          display: inline-block;
          vertical-align: middle;
          width: .2rem;
          height: .2rem;
          margin-right: 0.12rem;
        }
        .articleInfo .linkNum p{
          display: inline-block;
          vertical-align: middle;
          font-size: 0.28rem;
          color: #bbb;
        }
      }
    }
  }
</style>
