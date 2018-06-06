<template>
    <div class="homepage-container">
        <div class="homepage">
            <img :src="require('../assets/images/bgBottom.png')" class="bg-bottom" alt="">
            <div class="homepage-wrapper">
                <div class="title">
                    <router-link class="title-wrapper" :to="rootPath+'personal'"> 
                        <div class="avatar">
                            <img :src="userInfo.headimgurl?userInfo.headimgurl:require('../assets/images/avatar.png')" alt="">
                        </div>
                        <div class="info">
                            <div class="nickname">{{userInfo.nickname}}</div>
                            <div class="desc">您的会员权限还剩
                                <span class="special-color">{{userInfo.vip_day}}</span>天</div>
                        </div>
                    </router-link>  
                    

                    <div  class="button common-button" @click="handleOpen">分享续费
                        <img  :src="require('../assets/images/button-circle.png')"  alt="">
                    </div>
                </div>
                <div class="types">
                    <div class="common-list">
                        <ul class="clearfix">
                            <li v-for="(item,index) in typeList" :key="index">
                                <router-link to='/story'>
                                    <img :src="item.src" alt="">
                                </router-link>
                                <p>{{item.title}}</p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="hot">
                    <div class="hot-title common-title">
                        <img :src="require('../assets/images/hot.png')" alt=""> 热门故事
                    </div>
                    <div class="hot-list common-list">
                        <ul class="clearfix">
                            <li v-for="(item,index) in hotList" :key="index">
                                <a :href='item.url'>
                                    <img :src="item.cover" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="recommend">
                    <div class="recommend-title common-title">
                        <img :src="require('../assets/images/hot.png')" alt=""> 精品系列推荐
                    </div>
                    <ul class="recommend-list common-list-column">
                        <li v-for="(item,index) in seriesList" :key="index">
                            <router-link :to="rootPath+'subscribe/'+item.id">
                                <img :src="item.cover" alt="">
                                <div>
                                    <p class="title">{{item.title}}</p>
                                    <p class="desc">{{item.intro}}</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <poster v-model="showPoster"></poster>
    </div>
    
</template>


<script>
import poster from "../components/Poster";
import jsonp from "jsonp";
import { HOMEPAGE_DATA,USER_INFO } from "../api/config";
import { rootPath } from "../api/rootPath";
export default {
  name: "Homepage",
  components: {
    poster
  },
  data() {
    return {
      rootPath: "/kada/index/",
      showPoster: false,
      typeList: [
        {
          src: require("../assets/images/ani-1.png"),
          title: "2-3岁"
        },
        {
          src: require("../assets/images/ani-2.png"),
          title: "2-3岁"
        },
        {
          src: require("../assets/images/ani-3.png"),
          title: "2-3岁"
        },
        {
          src: require("../assets/images/ani-4.png"),
          title: "社会认知"
        },
        {
          src: require("../assets/images/ani-5.png"),
          title: "自我成长"
        },
        {
          src: require("../assets/images/ani-6.png"),
          title: "艺术启蒙"
        },
        {
          src: require("../assets/images/ani-7.png"),
          title: "科学探索"
        },
        {
          src: require("../assets/images/ani-8.png"),
          title: "语言文化"
        }
      ],
      userInfo:{
          "nickname":"",
          "headimgurl":"",
          "vip_day":"0",
          "read_nums":"0",
          "read_long":""
      },
      hotList: [],
      seriesList: []
    };
  },
  methods: {
    handleOpen() {
      this.showPoster = true;
    },
    getUserInfo() {
      jsonp(USER_INFO, (error, data) => {
        if (data && data.res) {
          this.userInfo = data.res;
          localStorage.setItem("userinfo", JSON.stringify(data.res));
        }
      });
    },
    getListData() {
      jsonp(HOMEPAGE_DATA, (error, data) => {
        if (data && data.res) {
          this.hotList = data.res.hot;
          this.seriesList = data.res.series;
        }
      });
    }
  },
  mounted() {
      this.getUserInfo()
      this.getListData()
  }
};
</script>
<style lang="less" scoped>
@import "../assets/less/css3.less";
@import "../assets/less/common.less";
.homepage-container {
  height: 100%;
}
.homepage {
  z-index: 1;
  min-height: 100%;
  .linear-gradient(#00a3ef,#bfecff);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#00a3ef),
    to(#bfecff)
  );
  background-image: -webkit-linear-gradient(top, #00a3ef, #bfecff);
  position: relative;
  padding: 0.5333rem 0.5333rem 2.7733rem;
  box-sizing: border-box;
  .bg-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
  &-wrapper {
    & > .title {
      height: 2.368rem;
      background: url(../assets/images/nav.png) no-repeat;
      background-size: 100% 100%;
      padding: 0.1067rem 0.1867rem;
      box-sizing: border-box;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      .title-wrapper {
        display: flex;
        display: -webkit-flex;
        align-items: center;
      }
      .avatar {
        height: 2.0693rem;
        width: 2.0693rem;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        background-color: #58c9f7;
        img {
          position: absolute;
          height: 100%;
          width: 100%;
        }
      }
      .info {
        flex-grow: 1;
        padding-left: 0.5rem;
        .nickname {
          font-size: 0.64rem;
          color: #ffffff;
          letter-spacing: -0.0085rem;
          line-height: 0.64rem;
        }
        .desc {
          font-size: 0.512rem;
          color: #ffffff;
          letter-spacing: -0.0068rem;
          line-height: 0.512rem;
          margin-top: 0.2rem;
          .special-color {
            font-size: 1.0667rem;
            color: #4bf9ff;
            letter-spacing: -0.0143rem;
            line-height: 0.64rem;
            vertical-align: middle;
          }
        }
      }

      .button {
        line-height: 1.856rem;
        height: 1.856rem;
        width: 4.16rem;
      }
    }
    .types {
      width: 100%;
      height: 13.5253rem;
      margin-top: 0.32rem;
      background: url(../assets/images/column.png) no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 2rem 1rem;
      ul {
        margin-top: 0.6rem;
        li {
          p {
            margin-top: 0.5rem;
            white-space: nowrap;
            text-align: center;
            font-size: 0.5973rem;
            color: #ffffff;
            letter-spacing: -0.0079rem;
            line-height: 0.5973rem;
            text-shadow: 0 0.0213rem 0.0427rem #004485;
          }
        }
      }
    }
    .common-title {
      font-size: 0.768rem;
      color: #ffffff;
      letter-spacing: -0.0102rem;
      line-height: 0.768rem;
      margin-bottom: 0.64rem;
      img {
        height: 0.9813rem;
        width: 0.9813rem;
        vertical-align: bottom;
      }
    }
    .hot,
    .recommend {
      margin-top: 0.64rem;
    }
    .recommend {
      a {
        height: 100%;
        width: 100%;
        display: inline-block;
      }
    }
  }
}
</style>

