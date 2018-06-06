<template>
    <div class="poster" v-show="visible">
        <div class="container">
            <div class="title">长按保存下方图片发送给朋友</div>
            <div class="pic"> 
                <img class="pic-compose" src="" alt="">
            </div>
            <div class="desc">
                <p class="shadow-special">限时活动</p>
                <p>每推荐2个人加入咔哒故事</p>
                <p>就可以获得7天会员权限</p>
                <p class="price">故事市场价<span class="price-special">30</span>元/系列</p>
            </div>
            <img class="close" @click="handleClose" :src="require('../assets/images/close.png')" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:'poster',
    props:{
        value: {
        type: Boolean,
        default:false
      }
    },
    data(){
        return{
            visible:false
        }
        
    },
    watch:{
        value(val){
            this.visible=val;
        },
        visible(val) {
            this.$emit('input', val);
      }
    },
    methods:{
        handleClose(){
            this.visible=false;
        }
    },
    mounted() {
        if (this.value) {
        this.visible = true;
        }
  }
};
</script>
<style lang='less' scoped>
.poster {
//   visibility: hidden;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  .container {
    position: relative;
    .title {
      font-size: 0.6827rem;
      color: #ffffff;
      letter-spacing: -0.0122rem;
      text-align: center;
    }
    .pic {
      width: 9.024rem;
      height: 16.064rem;
      margin: 0.533rem 0 0.4693rem;
      background-color: #fff;
    }
    .desc {
      p {
        font-size: 0.64rem;
        color: #ffffff;
        letter-spacing: -0.0113rem;
        text-align: left;
        line-height: 1.0667rem;
        &.shadow-special {
          color: #ffcc00;
        }
      }

      .price {
        margin-top: 0.5333rem;
        &-special {
          margin-left: 0.32rem;
          color: #ffcd06;
          font-size: 1.28rem;
        }
      }
    }
    .close {
      height: 1.7067rem;
      width: 1.7067rem;
      position: absolute;
      top: -0.3rem;
      right: -2.5rem;
    }
  }
}
</style>



