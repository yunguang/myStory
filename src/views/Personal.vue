<template>
    <div class="personal-container">
        <div class="personal common-wrapper">
            <div class="personal-user">
                <div class="avatar">
                    <img :src="require('../assets/images/avatar1.png')" alt="">
                </div>
                <div class="nickname">富贵儿</div>
                <div class="remain">
                    会员剩余天数
                    <div class="remain-days">3</div>
                </div>
            </div>
            <div class="personal-data">
                <div class="amount">
                    <div class="num">
                        <div>{{readNum}}
                            <div class="special">本</div>
                        </div>
                    </div>
                    <div class="words">阅读本数</div>
                </div>
                <div class="time">
                    <div class="num">
                        <div>{{readHours}}
                            <div class="special">+</div>
                        </div>
                    </div>
                    <div class="words">阅读小时</div>
                </div>
            </div>
            <div class="personal-button">
                <div class="button1 common-button">我的收藏
                    <router-link to="/collection">
                        <img :src="require('../assets/images/button-circle.png')" alt="">
                    </router-link>
                </div>
                <div class="button2 common-button" @click="handleInvite">我的邀请
                    <img :src="require('../assets/images/button-circle.png')" alt="">
                </div>
                <div class="button3 common-button" @click="getPermission">获取权限
                    <img :src="require('../assets/images/button-circle.png')" alt="">
                </div>
            </div>
            <div class="personal-self">
                <div v-for="(item,index) in typeList" :class="item.sClass" :key="index">
                    <img :src="item.src" alt="" @click="handleBook(index)">
                    <p>{{item.title}}</p>
                </div>
            </div>
            <div class="personal-shadow" v-show="showShadow">
                <div class="book" v-show="showBook">
                    <div class="book-content">
                        <div class="title">{{bookItem.title}}</div>
                        <ul class="label" >
                            <li v-for="(item,index) in bookItem.label" :key="index">{{item}}</li>
                        </ul>
                        <div class="desc">{{bookItem.desc}}</div>
                    </div>
                    <img class="common-close" @click="handleClose" :src="require('../assets/images/close.png')" alt="">
                </div>
                <div class="invite" v-show="!showBook">
                    <div class="invite-content">
                        <div class="num">已邀请
                            <span class="special-color">101</span>人</div>
                        <div class="slide wrapper" ref="wrapper">
                            <div class="content">
                                <ul class="content">
                                    <li v-for="(item,index) in userList" :key="index">
                                        <div class="avatar">
                                            <img :src="item.headimgurl" alt="">
                                        </div>
                                        <div class="nickname">{{item.nickname}}</div>
                                        <div class="date">{{item.date}}</div>
                                    </li>
                                </ul>
                                <div class="loading-wrapper" v-show="isShowLoaded">{{loadWords}}</div>
                            </div>
                            
                        </div>
                    </div>
                    <img class="common-close" @click="handleClose" :src="require('../assets/images/close.png')" alt="">
                </div>
            </div>
        </div>
        <poster v-model="showPoster"></poster>
    </div>
    
</template>
<script>
import poster from "../components/Poster";
import BScroll from "better-scroll";
// import axios from "axios";
import { KADA_USER_LIST } from "../api/config";
import jsonp from "jsonp";
export default {
  name: "Personal",
  components: {
    poster
  },
  data() {
    return {
      showPoster: false,
      showShadow: false,
      showBook: false,
      readNum: 8,
      readHours: 300,
      bookItem: {
        title: "",
        label: [],
        desc: ""
      },
      bookIndex: 0,
      isShowLoaded: false,
      loadWords: "加载更多",
      isFirst: true,
      userList: [
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小李",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小李",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小李",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小李",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小李",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小李",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小李",
          date: "2018-06-05"
        }
      ],
      nextUserList: [
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小明",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小明",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小明",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小明",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小明",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小明",
          date: "2018-06-05"
        },
        {
          headimgurl:
            "http://cdn2.txbimg.com/avatar/001/10/42/36_avatar_small.jpg",
          nickname: "小明",
          date: "2018-06-05"
        }
      ],
      typeList: [
        {
          src: require("../assets/images/ani-4.png"),
          title: "自我成长",
          sClass: "self1 common-self"
        },
        {
          src: require("../assets/images/ani-5.png"),
          title: "自我成长",
          sClass: "self2 common-self"
        },
        {
          src: require("../assets/images/ani-6.png"),
          title: "自我成长",
          sClass: "self3 common-self"
        },
        {
          src: require("../assets/images/ani-7.png"),
          title: "自我成长",
          sClass: "self4 common-self"
        },
        {
          src: require("../assets/images/ani-8.png"),
          title: "自我成长",
          sClass: "self5 common-self"
        }
      ],
      bookList: [
        {
          title: "绘本1",
          label: ["艺术审美", "艺术审美", "艺术审美"],
          desc:
            "生命科学、自我发展、情绪管理和行为习惯四方面内容帮助孩子认识自我、了解生命，做自己身体和心灵的主人"
        },
        {
          title: "绘本2",
          label: ["艺术审美", "艺术审美", "艺术审美", "艺术审美"],
          desc:
            "生命科学、自我发展、情绪管理和行为习惯四方面内容帮助孩子认识自我、了解生命，做自己身体和心灵的主人"
        },
        {
          title: "绘本3",
          label: ["艺术审美", "艺术审美", "艺术审美"],
          desc:
            "生命科学、自我发展、情绪管理和行为习惯四方面内容帮助孩子认识自我、了解生命，做自己身体和心灵的主人"
        },
        {
          title: "绘本4",
          label: ["艺术审美", "艺术审美", "艺术审美"],
          desc:
            "生命科学、自我发展、情绪管理和行为习惯四方面内容帮助孩子认识自我、了解生命，做自己身体和心灵的主人"
        },
        {
          title: "绘本5",
          label: ["艺术审美", "艺术美", "艺术审美"],
          desc:
            "生命科学、自我发展、情绪管理和行为习惯四方面内容帮助孩子认识自我、了解生命，做自己身体和心灵的主人生命科学、自我发展、情绪管理和行为习惯四方面内容帮助孩子认识自我、了解生命，做自己身体和心灵的主人"
        }
      ],

      options: {
        // pullDownRefresh: {
        //   threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
        //   stop: 50 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        // },
        pullUpLoad: {
          threshold: -20, // 在上拉到超过底部 20px 时，触发 pullingUp 事件
          stop:-100
        },
        //          pullDownRefresh: false, //关闭下拉
        //          pullUpLoad: false, // 关闭上拉
        click: true,
        probeType: 3,
        startY: 0,
        scrollbar: false
      }
    };
  },
  methods: {
    //   关闭弹层
    handleClose() {
      this.showShadow = false;
    },
    //   打开我的邀请
    handleInvite() {
      this.showShadow = true;
      this.showBook = false;
      this.getInviteData();
    },
    getInviteData() {
      this.scrollInit();
      //   jsonp(KADA_USER_LIST, (error, data) => {
      //     if (data && data.res) {
      //       this.userList = this.userList.concat(data.res);
      //     }
      //   });
    },
    //   打开绘本
    handleBook(index) {
      this.showShadow = true;
      this.showBook = true;
      this.bookItem = this.bookList[index];
    },
    //   获取权限
    getPermission() {
      this.showPoster = true;
    },
    //  BScroll初始化
    scrollInit() {
      this.$nextTick(() => {
        //   this.scroll = new BScroll(this.$refs.wrapper, {});
        this._initScroll();
        // this.setData();
      });
    },
    _initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, this.options);
      // 下拉
      //   this.scroll.on("pullingDown", () => {
      //     // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
      //     this.userList = []; // 重置数据
      //     this.searchCondition.pageNo = 1; // 重置分页数
      //     this.setData(); //获取数据方法
      //   });
      //   上拉;
      this.scroll.on("pullingUp", () => {
        //   if (this.curPage < this.totalPage) {
        //判断是否继续上拉刷新
        if (this.isFirst) {
          this.isFirst = false;
          this.isShowLoaded = true;
          setTimeout(() => {
            this.isShowLoaded = false;
            this.setData(); //获取数据方法
          }, 5000);
        }

        //   }
      });
    },
    pullingDownUp() {
      this.scroll.finishPullDown();
      this.scroll.finishPullUp();
      this.scroll.refresh(); //重新计算元素高度
    },
    _initData() {},
    setData() {
      this.userList = this.userList.concat(this.nextUserList);
      //   axios.get("/data/userList.json", {}).then(res => {
      //     console.log(res);
      //     this.userList = res.data;
      //     this.$nextTick(() => {
      //       this.pullingDownUp();
      //     });
      //   });
      //   this.$http.post(url,()=>{
      //     this.goods = data
      //     this.$nextTick(() => {
      //       this.pullingDownUp()
      //     })
      //   }
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/less/css3.less";
@import "../assets/less/common.less";
.personal-container {
  height: 100%;
}
.personal {
  min-height: 100%;
  background: url("../assets/images/bg.jpg") no-repeat;
  background-size: cover;
  box-sizing: border-box;
  &-user {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 6.6133rem;
    .avatar {
      height: 2.3467rem;
      width: 2.3467rem;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      background-color: #fff;
      margin: 0.5333rem 0 0.4267rem;
      img {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
    }
    .nickname {
      margin-bottom: 0.32rem;
    }
    .remain {
      background: #0099ff;
      border-radius: 2.1333rem;
      padding-left: 0.6rem;
      box-sizing: border-box;
      text-align: start;
      width: 5.9093rem;
      height: 1.024rem;
      line-height: 1.024rem;
      position: relative;
      font-size: 0.64rem;
      color: #ffffff;
      letter-spacing: -0.0085rem;
      &-days {
        position: absolute;
        top: -0.3rem;
        right: -0.3rem;
        height: 1.6rem;
        width: 1.6rem;
        line-height: 1.7rem;
        border-radius: 50%;
        font-size: 1.0667rem;
        color: #0099ff;
        letter-spacing: -0.0143rem;
        text-align: center;
        background-color: #fff;
      }
    }
  }
  &-data {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 1rem 1rem;
    > div {
      .num {
        font-size: 1.7067rem;
        color: #ffffff;
        letter-spacing: -0.0228rem;
        line-height: 2.1333rem;
        text-align: center;
        > div {
          display: inline-block;
          position: relative;
          .special {
            position: absolute;
            right: -0.6rem;
            top: 0.5rem;
            letter-spacing: -0.0085rem;
            line-height: 0.64rem;
          }
        }
      }
      &.time {
        .special {
          font-size: 0.8rem;
        }
      }
      &.amount {
        .special {
          font-size: 0.64rem;
        }
      }
      .words {
        font-size: 0.6827rem;
        color: #ffffff;
        letter-spacing: -0.0092rem;
        line-height: 0.6827rem;
      }
    }
  }
  &-button {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.6rem 2.1333rem;
    .common-button {
      height: 1.7707rem;
      width: 4.48rem;
      line-height: 1.7707rem;
      a {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
  }
  &-self {
    position: relative;
    margin: 0 1.664rem;
    height: 14rem;
    .common-self {
      position: absolute;
      width: 3.6907rem;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      img {
        height: 3.6907rem;
        width: 3.6907rem;
        margin-bottom: 0.4267rem;
      }
      p {
        font-size: 0.6827rem;
        color: #ffffff;
        letter-spacing: -0.0092rem;
        text-align: center;
        line-height: 0.6827rem;
        text-shadow: 0 0.0213rem 0.0427rem rgba(0, 68, 133, 0.5);
      }
    }
    .self1 {
      top: 0;
      left: 4.48rem;
    }
    .self2 {
      top: 2.6667rem;
      left: 0;
    }
    .self3 {
      top: 2.6667rem;
      right: 0;
    }
    .self4 {
      top: 7.8933rem;
      left: 1.8773rem;
    }
    .self5 {
      top: 7.8933rem;
      right: 1.8773rem;
    }
  }
  &-shadow {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
    text-align: center;
    .common-close {
      margin-top: 0.64rem;
      height: 2.1333rem;
      width: 2.1333rem;
    }
    .book,
    .invite {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
    }
    .book {
      &-content {
        padding: 3rem 0.8rem 0;
        height: 15.4027rem;
        width: 12.544rem;
        background: url("../assets/images/wrap1.png") no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        .title {
          font-size: 1.0667rem;
          color: #ffffff;
          letter-spacing: -0.0143rem;
          line-height: 1.0667rem;
          text-shadow: 0 0.0427rem 0.0853rem #007eff;
        }
        .label {
          display: flex;
          display: -webkit-flex;
          align-items: center;
          justify-content: space-around;
          padding: 1rem 0 0.5rem;
          li {
            font-size: 0.5547rem;
            color: #ffffff;
            letter-spacing: -0.0075rem;
            line-height: 1.1733rem;
            height: 1.1733rem;
            width: 3.072rem;
            text-align: center;
            line-height: 1.1733rem;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 2.1333rem;
            .text-dot();
          }
        }
        .desc {
          font-size: 0.64rem;
          color: #ffffff;
          letter-spacing: -0.0085rem;
          line-height: 1.28rem;
          text-align: start;
          padding: 0 0.6rem;
          height: 5rem;
          .text-overflow(4);
        }
      }
    }
    .invite {
      &-content {
        padding: 3rem 0.8rem 0;
        height: 18.9653rem;
        width: 12.544rem;
        background: url("../assets/images/wrap2.png") no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        .num {
          font-size: 0.768rem;
          color: #ffffff;
          letter-spacing: -0.0122rem;
          .special-color {
            color: #ffcd06;
            font-size: 1.1947rem;
            vertical-align: middle;
          }
        }
        .slide {
          position: relative;
          height: 12rem;
          overflow: hidden;
          .loading-wrapper {
              text-align: center;
            height: 1.368rem;
            line-height: 1.368rem;
            color: #fff;
          }
          ul {
            li {
              height: 2.368rem;
              background-size: 100% 100%;
              padding: 0.1067rem 0.4867rem;
              box-sizing: border-box;
              display: flex;
              display: -webkit-flex;
              align-items: center;
              justify-content: space-between;
              .avatar {
                height: 1.92rem;
                width: 1.92rem;
                border-radius: 50%;
                overflow: hidden;
                position: relative;
                background-color: #fff;
                flex-shrink: 0;
                img {
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0;
                  left: 0;
                }
              }
              .nickname {
                flex-grow: 1;
                color: #fff;
                font-size: 0.64rem;
                color: #ffffff;
                letter-spacing: -0.0085rem;
                line-height: 1.28rem;
                text-align: start;
                padding: 0 0.6rem;
                .text-dot();
              }
              .date {
                color: #fff;
                font-size: 0.54rem;
                color: #ffffff;
                letter-spacing: -0.0085rem;
                text-align: end;
                flex-shrink: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>

