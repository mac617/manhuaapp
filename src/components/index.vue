<template>
  <div class="index">
    <section class="one">
    <!-- 版头 -->
    <div class="header">
        <a class="logo">
            <!-- <img src="../assets/image/mc.png" class="logo"> -->
            Mc.demo
        </a>
        <div class="padding"></div>
        <router-link to="/search">
            <img class="search" src="../assets/image/Search-48.png">
        </router-link>
<!--         <a href="#">
            <img class="menu" src="../assets/image/Menu-48.png">
        </a> -->
    </div>

    <!-- 轮播 -->
    <!-- Swiper -->
    <swiper :options="swiperOption" class="swiper-wrapper">
    <swiper-slide class="swiper-item">
        <router-link :to="{ path:'page', query: { href: '/manhua/94/' }}">
            <img src="../assets/image/onepiece.jpg">
        </router-link>
    </swiper-slide>
    <swiper-slide class="swiper-item">
        <router-link :to="{ path:'page', query: { href: '/manhua/14286/' }}">
            <img src="../assets/image/onepunch.jpg">
        </router-link>
    </swiper-slide>
    <swiper-slide class="swiper-item">
        <router-link :to="{ path:'page', query: { href: '/manhua/195/' }}">
            <img src="../assets/image/yinhun.jpg">
        </router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    </section>
    <!-- 漫画展示列 -->
    <div id="fuck">
    <section class="two">
        <ul class="comic-list">
            <!-- 漫画展示列栏目 -->
            <div class="sub-title">
                <p class="title-content">
                    <strong>热门连载</strong>
                </p>
                <small class="l-flex"></small>
                <!-- <img class="more" src="../assets/image/Settings-48.png"> -->
            </div>
            <!-- 漫画简介 -->
            <li v-for="hot in hot_content">
                <router-link :to="{ path:'page', query: { href: hot.href }}">
                    <div class="index-comic-cover">
                        <img class="cover-image" :src="hot.src">
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">{{ hot.name }}</strong>
                        <small class="comic-desc"> {{ hot.desc }}</small>
                    </div>
                </router-link>
            </li>
        </ul>
    </section> 

    <!-- 漫画展示列 -->
    <section class="three">
        <ul class="comic-list">
            <!-- 漫画展示列栏目 -->
            <div class="sub-title">
                <p class="title-content">
                    <strong>每日推荐</strong>
                </p>
                <small class="l-flex"></small>
                <!-- <img class="more" src="../assets/image/Settings-48.png"> -->
            </div>
            <!-- 漫画简介 -->
            <li v-for="news in news_content">
                <router-link :to="{ path:'page', query: { href: news.href }}">
                    <div class="index-comic-cover">
                        <img class="cover-image" :src="news.src">
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">{{ news.name }}</strong>
                        <small class="comic-desc">{{ news.desc }}</small>
                    </div>
                </router-link>
            </li>       
        </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      hot_content: [],
      news_content: [],
      swiperOption: {
        loop: true,
        autoplay: 3500
      }
    }
  },
  created () {
    this.get_data()
  },
  mounted () {
    this.scale()
  },
  methods: {
    get_data: function () {
      var that = this
      that.$api.get('/content', 'index', function (data) {
        data.splice(10, 6)
        that.hot_content = data.splice(0, 6)
        that.news_content = data.splice(6, 6)
      })
    },
    scale: function () {
      var meta = document.querySelector('meta[content]')
      meta.content = 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/index.css'


</style>
