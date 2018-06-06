<template>
    <div class="subscribe common-wrapper">
        <div class="subscribe-header" :style="{background:['../assets/images/intro-2.png']}">
            <!-- <img :src="require('../assets/images/intro-2.png')" alt=""> -->
            <div>
                <p class="title">小兔子的故事</p>
                <p class="desc">
                    <span class="special">8478</span>
                    人订阅
                </p>
            </div>
        </div>
        <div class="subscribe-content">
            <div class="subscribe-button">
                <div class="button1 common-button">
                    系列订阅
                    <img :src="require('../assets/images/button-circle.png')" alt="">
                </div>
                <div class="button2 common-button active">
                    故事收藏
                    <img :src="require('../assets/images/button-circle.png')" alt="">
                </div>
            </div>
            <div class="subscribe-list">
                <div class="intro">
                    <img :src="require('../assets/images/detail.jpg')" alt="">
                </div>
                <div class="series common-list">
                    <ul class="clearfix">
                        <li>
                            <img :src="require('../assets/images/post-1.png')" alt="">
                        </li>
                        <li>
                            <img :src="require('../assets/images/post-2.png')" alt="">
                        </li>
                        <li>
                            <img :src="require('../assets/images/post-3.png')" alt="">
                        </li>
                        <li>
                            <img :src="require('../assets/images/post-4.png')" alt="">
                        </li>
                        <li>
                            <img :src="require('../assets/images/post-1.png')" alt="">
                        </li>
                        <li>
                            <img :src="require('../assets/images/post-2.png')" alt="">
                        </li>
                        <li>
                            <img :src="require('../assets/images/post-3.png')" alt="">
                        </li>
                        <li>
                            <img :src="require('../assets/images/post-4.png')" alt="">
                        </li>
                        <li>
                            <img :src="require('../assets/images/post-3.png')" alt="">
                        </li>
                        <li>
                            <img :src="require('../assets/images/post-4.png')" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="subscribe-footer clearfix">
            <div class="send">
                <img :src="require('../assets/images/share.png')" alt="">
                送给其他宝宝
            </div>
            <div class="order">订阅</div>
        </div>
    </div>
</template>


<script>
export default {
  name: "Subscibe",
  data() {
    return {
      msg: ""
    };
  }
};
</script>
<style lang="less" scoped>
@import '../assets/less/css3.less';
@import '../assets/less/common.less';
.subscribe{
    min-height: 100%;
    background-color: #f3f5f8;
    box-sizing: border-box;
    &-header{
        margin-bottom: 0.4267rem;
        overflow: hidden;
        width:100%;
        
        img{
            width:100%;
            height: 5.7173rem;
        }
        >div{
            background-color: #fff;
            padding:0.768rem;
            box-sizing: border-box;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-content: space-between;
            .title{
                font-size: 0.7253rem;
                color: #475764;
                letter-spacing: -0.0096rem;
                text-align: left;
                line-height: 0.7253rem;
            }
            .desc{
                text-align: right;
                .special{
                    font-size: 0.8533rem;
                    color: #00B4FF;
                }
                font-size: 0.64rem;
                color: #A7B3BD;
                letter-spacing: -0.0085rem;
                line-height: 0.7253rem;
            }
        }
    }
    &-content{
        .subscribe-button{
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-content: space-around;
            padding:0.4267rem 0.5rem;
            background-color: #fff;
            .common-button{
                width:5.9733rem;
                height: 2.1333rem;
                line-height: 2.1333rem;
            }
        }
        .subscribe-list{
            .intro{
                display: none;
                img{
                    width:100%;
                }
            }
            .series{
                background-color: #fff;
                padding: 0.64rem 0.5333rem 2.56rem;
                height: calc(100vh - 13.5rem);
                height: -webkit-calc(100vh - 13.5rem);
            }
        }
    }
    &-footer{
        position: fixed;
        bottom:-0.1rem;
        height: 2.1333rem;
        width:100%;
        >div{
            float: left;
            width:50%;
            font-size: 0.6827rem;
            line-height: 2.1333rem;
            text-align: center;
        }
        .send{
            // box-shadow: 0 -0.2rem 0.3rem rgba(0, 0, 0, 0.1);
            background-color: #fff;
            img{
                vertical-align: middle;
                width:0.64rem;
                height: 0.6827rem;
                margin-right:0.32rem;
            }
        }
        .order{
            background: #F6A900;
            color: #fff;
        }
    }
    
}
</style>

