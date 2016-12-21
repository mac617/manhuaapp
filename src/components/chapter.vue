<template>
<div>
    <header class="head">
        <div id="back" v-on:click="WebBack">
            <img src="../assets/image/Previous_48px.png">
        </div>
        <h1 class="top-title">{{ name }}</h1>
        <div class="padding"></div>
        <router-link to="/search">
            <img class="search" src="../assets/image/Search-48.png">
        </router-link>
        <!-- <a href="#">
            <img class="menu" src="../assets/image/Menu-48.png">
        </a> -->
    </header>
    <!-- 漫画ep表 -->
    <div class="chapter">
        <section  class="chapter-info">
            <span class="chapter-count">共{{ chapter_content.length }}话</span>
            <!-- <span class="sort">正序</span> -->
        </section>
        <section>
            <ul class="chapter-list normal">
                <li v-for="(chapter, index) in chapter_content" class="chapter-item">
                    <router-link :to="{ path:'comic', query: { href: chapter.href, chapter_list: chapter_list, num:index }}" class="chapter-link">{{ chapter.title }}</router-link>
                </li>
            </ul>
            <ul class="chapter-list reverse"></ul>
        </section>
    </div>
<!--     <section class="mod-toolBar">
            <div class="lay-flex">
                <div class="lay-box">
                    <a class="btn_toolFav"></a>
                    <a class="btn_toolShare"></a>
                    <a class="btn_toolDownload"></a>
                </div>
                <a class="btn_toolRead">开始阅读</a>
            </div>
    </section> -->
</div>
</template>

<script>
export default {
  name: 'chapter',
  data () {
    return {
      chapter_content: [],
      chapter_list: this.$route.query.chapter_list,
      name: this.$route.query.name
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
      var href = '/content/' + that.$route.query.href
      // console.log(href)
      that.$api.get(href, 'chapter', function (data) {
        that.chapter_content = data
      })
    },
    WebBack: function () {
      // window.location.href = document.referrer
      window.history.back()
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
@import '../assets/css/chapter.css'

</style>
