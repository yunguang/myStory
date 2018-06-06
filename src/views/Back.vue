<template>
    <div class="back-container">
        <div class="back common-wrapper">
            <div class="back-content">
                <ul>
                    <li>
                        <img :src="require('../assets/images/repeat.png')" alt="">
                        <p>重新播放</p>
                    </li>
                    <li>
                        <img :src="require('../assets/images/return.png')" alt="">
                        <p>返回上层</p>
                    </li>
                </ul>
                <div class="share">
                    <div class="button common-button" @click="handleOpen">
                        分享
                        <img :src="require('../assets/images/button-circle.png')" alt="">
                    </div>
                    <div class="more">
                        获取更多权限
                    </div>
                </div>
            </div>
        </div>
        <poster v-model="showPoster"></poster>
    </div>
    
</template>


<script>
import poster from '../components/Poster'
export default {
  name: "Back",
  components:{
      poster
  },
  data(){
    return {
      showPoster:false
    }
  },
  methods:{
    handleOpen(){
      this.showPoster=true;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/less/css3.less";
@import "../assets/less/common.less";
.back-container {
  height: 100%;
}
.back {
  min-height: 100%;
  .linear-gradient(#00a3ef,#bfecff);
  &-content {
    ul {
      padding: 5.8667rem 2.4533rem 2.9867rem;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      li {
        img {
          height: 4.2667rem;
          width: 4.2667rem;
        }
        p {
          text-align: center;
          font-size: 0.768rem;
          color: #ffffff;
          letter-spacing: -0.0137rem;
          line-height: 0.768rem;
          margin-top: 0.64rem;
        }
      }
    }
  }
  .share {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .common-button {
      width: 7.1253rem;
      height: 2.1333rem;
      line-height: 2.1333rem;
      margin-bottom: 0.5333rem;
      font-size: 0.7253rem;
      letter-spacing: -0.0096rem;
    }
    .more {
      text-align: center;
      font-size: 0.768rem;
      color: #ffffff;
      letter-spacing: -0.0137rem;
      line-height: 0.768rem;
    }
  }
}

</style>

