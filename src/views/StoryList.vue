<template>
    <div class="story-list common-wrapper">
        <ul class="common-list-column">
            <li>
                <img :src="require('../assets/images/intro-1.png')" alt="">
                <div>
                    <p class="title">彼得兔的故事</p>
                    <p class="desc">一个兔子的故事，从前有个小兔子</p>
                </div>
            </li>
            <li>
                <img :src="require('../assets/images/intro-2.png')" alt="">
                <div>
                    <p class="title">彼得兔的故事</p>
                    <p class="desc">一个兔子的故事，从前有个小兔子</p>
                </div>
            </li>
            <li>
                <img :src="require('../assets/images/intro-2.png')" alt="">
                <div>
                    <p class="title">彼得兔的故事</p>
                    <p class="desc">一个兔子的故事，从前有个小兔子</p>
                </div>
            </li>
        </ul>

    </div>
</template>


<script>
export default {
  name: "StoryList",
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
.story-list{
    min-height: 100%;   
    .linear-gradient(#00a3ef,#bfecff);
    padding:0.5333rem 0.5333rem 2.7733rem;
    box-sizing: border-box; 
}
</style>

