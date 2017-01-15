<template class="page-color">
  <div class="color">
    <header class="head">
        <div id="back" v-on:click="WebBack">
            <img src="../assets/image/Previous_48px.png">
        </div>
<!--         <div class="chapter-back" v-on:click="ChapterBack">
            <img src="../assets/image/Previous_48px.png">
        </div> -->
        <h1 class="top-title">{{ page.name }}</h1>
        <div class="padding"></div>
        <router-link to="/search">
            <img class="search" src="../assets/image/Search-48.png">
        </router-link>
        <!-- <a href="#">
            <img class="menu" src="../assets/image/Menu-48.png">
        </a> -->
    </header>
    <article>
        <div class="lay-head">
            <section class="mod-head">
                <div class="head-banner">
<!--                     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="33rem" height="23rem">
                      <defs>
                        <filter id="f1" x="0" y="0">
                          <feImage :xlink:href="page.src" width="33rem" height="23rem" preserveAspectRatio="xMidYMid slice"></feImage>
                          <feGaussianBlur stdDeviation="30"></feGaussianBlur>
                        </filter>
                      </defs>
                      <rect width="33rem" height="23rem" x="0" y="0" stroke="green" stroke-width="3" filter="url(#f1)" />
                    </svg> -->
                    <img class="bg" :src="page.src">
                </div>
                <div class="head-info">
                    <div class="head-info-cover">
                        <img :src="page.src">
                    </div>
                    <div class="head-info-detail">
                        <ul>
                            <li class="head-info-title">
                                <h1>{{ page.name }}</h1>
                                <!-- <span class="head-info-grade">{{ page.score }}</span> -->
                            </li>
                            <li class="head-info-author">
                                <label class="head-info-author-label">作者:</label>
                                <span class="head-info-author-size">{{ page.author }}</span>
                                <!-- <span class="head-info-tags-size">热血</span>
                                <span class="head-info-tags-size">搞笑</span> -->
                            </li>
                            <li class="head-info-tags">
                                标签:{{ page.type }}
                            </li>
                            <li class="head-info-tags">
                                最新：{{ page.newsep }}
                            </li>
                            <li class="head-info-hot">
                                更新时间：<span class="info-number">{{ page.update }}</span>
                            </li>
                            <!-- <li class="head-info-mt">
                                月票:
                                <span class="info-number">...</span>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </section>
            <!-- <section class="app-guiding">
                <a class="app-guiding-download">
                    <img class="app-guiding-img" src="../assets/image/panda.png" height="268" width="268">
                </a>
                <a class="app-guiding-close" v-on:click="AppGuiding"></a>     
            </section> -->
            <section class="mod-tab">
                <div class="tab-list">
                    <li class="tab-list-item" id="detail" href="#" v-on:click="ClickTags('0', $event)">详情</li>
                    <li class="tab-list-item" id="list" href="#" v-on:click="ClickTags('1', $event)">目录</li>
                </div>      
            </section>
        </div>

        <div class="comic-detail">
            <section class="mod-detail">
                <i class="detail-icon">蛤</i>
                <div class="detail-summary">
                    <p>{{ page.desc }}</p>
                </div>
            </section>
            <section class="ep">
                <div class="update-box">
                    <div class="update-info">
                        <span class="update-time">{{ page.update }}</span>
                        <span class="update-ep">更新到{{ page.newsep }}</span>
                    </div>
                </div>
                <div class="chapter-little-box">
                    <ul class="chapter-list">
                        <li class="chapter-item" v-for="(ep, index) in ep_content">
                            <router-link :to="{ path:'comic', query: { href: ep.href, chapter_list: chapter_list, num: index }}" class="chapter-link">{{ ep.title }}</router-link>
                        </li>
                    </ul>
                </div>
                <router-link :to="{ path:'chapter', query: { href: chapter_href, chapter_list: chapter_list, name: page.name }}" class="more">加载更多</router-link>
            </section>
            <!-- <section class="mod-recommend">
                <h2>骚年们都在看</h2>
                <ul class="list-recommend">
                    <li class="comic-item">
                        <a class="comic-link">
                            <div class="comic-cover">
                                <img class="comic-image" src="../assets/image/0.jpg">
                            </div>
                            <div class="comic-info">
                                <strong class="comic-title">寄生少年</strong>
                                <small class="comic-desc">女屌丝的办公室恋情</small>
                            </div>
                        </a>
                    </li>

                    <li class="comic-item">
                        <a class="comic-link">
                            <div class="comic-cover">
                                <img class="comic-image" src="../assets/image/0.jpg">
                            </div>
                            <div class="comic-info">
                                <strong class="comic-title">寄生少年</strong>
                                <small class="comic-desc">女屌丝的办公室恋情</small>
                            </div>
                        </a>
                    </li>

                    <li class="comic-item">
                        <a class="comic-link">
                            <div class="comic-cover">
                                <img class="comic-image" src="../assets/image/0.jpg">
                            </div>
                            <div class="comic-info">
                                <strong class="comic-title">寄生少年</strong>
                                <small class="comic-desc">女屌丝的办公室恋情</small>
                            </div>
                        </a>
                    </li>

                </ul>
            </section> -->
        </div>
        <section class="mod-toolBar">
            <div class="lay-flex" v-for="start in chapter_content[chapter_content.length-1]">
<!--                 <div class="lay-box">
                    <a class="btn_toolFav"></a>
                    <a class="btn_toolShare"></a>
                    <a class="btn_toolDownload"></a>
                </div> -->
                <router-link class="btn_toolRead" :to="{ path:'comic', query: { href: start, chapter_list: chapter_list, num: 0, reverse: true }}">开始阅读</router-link>
            </div>
        </section>
    </article>
    
    </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      page: [],
      ep_content: [],
      chapter_content: [],
      chapter_href: this.$route.query.href,
      chapter_list: [],
      reverse_chapter_list: []
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
      // this.chapter_href = that.$route.query.href
      var href = '/content/' + that.$route.query.href
      // console.log(href)
      that.$api.get(href, 'page', function (data) {
        that.page = data[0]
        that.ep_content = data[1].slice(0, 9)
        // console.log(that.ep_content)
        if (that.ep_content.length < 9) {
          var more = document.querySelector('.more')
          more.style.display = 'none'
        }
        that.chapter_content = data[1]
        // console.log(that.chapter_content[1].href)

        for (var i = 0; i < data[1].length; i++) {
          that.chapter_list.push(data[1][i].href.toString())
        }
        // console.log(that.reverse_chapter_list)
      })
    },
    AppGuiding: function () {
      var AppGuiding = document.getElementsByClassName('app-guiding')
      AppGuiding[0].style.opacity = '0'
      AppGuiding[0].style.visibility = 'hidden'
      setTimeout(function () {
        AppGuiding[0].style.display = 'none'
      }, 300)
    },
    ClickTags: function (onoff) {
      var taglist = document.getElementsByClassName('tab-list-item')
      var ep = document.querySelector('.ep')
      var detail = document.querySelector('.mod-detail')
      if (onoff === '0') {
        taglist[0].className = 'tab-list-item'
        taglist[1].className = 'tab-list-item'
        taglist[onoff].classList.add('active')
        detail.style.display = 'block'
        ep.style.display = 'none'
      } else {
        taglist[0].className = 'tab-list-item'
        taglist[1].className = 'tab-list-item'
        taglist[onoff].classList.add('active')
        detail.style.display = 'none'
        ep.style.display = 'block'
      }
    },
    WebBack: function () {
      // window.location.href = document.referrer
      window.history.back()
    },
    scale: function () {
      var meta = document.querySelector('meta[content]')
      meta.content = 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
    }
    // route: function () {
    //   console.log(this.$route.query)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/page.css'
</style>
