<template>
<div class="collection common-wrapper">
        <div class="collection-button">
            <div class="button1 common-button" :class="{active:!showStory}" @click="handleSeries">
                系列订阅
                <img :src="require('../assets/images/button-circle.png')" alt="">
            </div>
            <div class="button2 common-button" :class="{active:showStory}" @click="handleStory">
                故事收藏
                <img :src="require('../assets/images/button-circle.png')" alt="">
            </div>
        </div>
        <div class="collection-list  wrapper"  ref="wrapper" v-show="showStory">
                <ul class="common-list-column">
                    <li v-for="(item,index) in storyList" :key="index">
                        <router-link to='/subscribe'>
                            <img :src="item.src" alt="">
                            <div>
                                <p class="title">{{item.title}}</p>
                                <p class="desc">{{item.desc}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
                
        </div>
        <div class="collection-list  wrapper"  ref="wrapper" v-show="!showStory">
            <ul class="common-list clearfix" >
                <li v-for="(item,index) in seriesList" :key="index">
                    <a href="">
                        <img :src="item.src" alt="">
                    </a>
                </li>
            </ul>
        </div>


    </div>
</template>


<script>
import BScroll from 'better-scroll'
export default {
  name: "Collection",
  data() {
    return {
      showStory: false,
      seriesList: [
        {
            url:'',
            src: require("../assets/images/post-1.png")
        },
        {
            url:'',
            src: require("../assets/images/post-2.png")
        },
        {
            url:'',
            src: require("../assets/images/post-3.png")
        },
        {
            url:'',
            src: require("../assets/images/post-4.png")
        },
        {
            url:'',
            src: require("../assets/images/post-1.png")
        },
        {
            url:'',
            src: require("../assets/images/post-1.png")
        }
      ],
      storyList:[
          {
              src:require('../assets/images/intro-1.png'),
              title:'彼得兔的故事',
              desc:'一个兔子的故事，从前有个小兔子'
          },
          {
              src:require('../assets/images/intro-2.png'),
              title:'彼得兔的故事',
              desc:'一个兔子的故事，从前有个小兔子'
          },
          {
              src:require('../assets/images/intro-1.png'),
              title:'彼得兔的故事',
              desc:'一个兔子的故事，从前有个小兔子'
          }
      ]
    };
  },
  methods: {
    handleSeries(){
        this.showStory=false;
    },
    handleStory(){
        this.showStory=true;
    }
  },
  mounted() {
    this.$nextTick(() => {
     this.scroll = new BScroll(this.$refs.wrapper);
    })
  }
};
</script>
<style lang="less" scoped>
@import "../assets/less/css3.less";
@import "../assets/less/common.less";
.collection {
  min-height: 100%;
  .linear-gradient(#00a3ef,#bfecff);
  padding: 0.5333rem 0.5333rem 0;
  box-sizing: border-box;
  &-button {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-around;
    margin: 1.024rem 0.5rem 0.64rem;
    .common-button {
      width: 5.9733rem;
      height: 2.1333rem;
      line-height: 2.1333rem;
    }
  }
  &-list {
    height: calc(~"100vh - 4.6506rem");
    height: -webkit-calc(~"100vh - 4.6506rem");
    overflow: hidden;
    .series,.story {
      margin-top: 0.64rem;
    }
    ul{
        li{
            a{
                height: 100%;
                width:100%;
                display: inline-block;
            }
        }
    }
  }
}
</style>

