<template>
  <div id="search">
    <section class="search-bar">
        <form class="search-form">
            <a id="back" v-on:click="Back">
                <img class="search-bar-back" src="../assets/image/Previous_48px.png">
            </a>
            <div class="search-txt">
                <div class="search-hit-box">
                    <div class="search-hit-flex1">
                    </div>
                    <i class="icon"></i>
                    <span class="search-hit-txt">漫画名</span>
                    <div class="search-hit-flex2"></div>
                </div>
                <div class="search-txt-box">
                    <div class="txt-input-pad"></div>
                    <input class="txt-input" v-on:click="IconBack" v-on:blur="IconReturn" type="search" v-on:keydown.enter="Search($event)" name="">
                    <a id="txt-input-clear" class="txt-input-clear"></a>
                </div>
            </div>
            <input class="search-bar-btn" type="button" value="搜索" v-on:click="Search" name="">
        </form>
    </section>

    <section class="hot-bar">
        <div class="hot-bar-head">
            <i class="hot-bar-image"></i>
            <span class="hot-bar-title">热门搜索</span>
        </div>
        <ul class="hot-bar-search-list">
            <li class="item"><router-link class="link" :to="{ path:'page', query: { href: '/manhua/94/' }}">海贼王</router-link></li>
            <li class="item"><router-link class="link" :to="{ path:'page', query: { href: '/manhua/1806/' }}">火影忍者</router-link></li>
            <li class="item"><router-link class="link" :to="{ path:'page', query: { href: '/manhua/195/' }}">银魂</router-link></li>
            <li class="item"><router-link class="link" :to="{ path:'page', query: { href: '/manhua/106/' }}">死神</router-link></li>
            <li class="item"><router-link class="link" :to="{ path:'page', query: { href: '/manhua/1807/' }}">妖精的尾巴</router-link></li>
            <li class="item"><router-link class="link" :to="{ path:'page', query: { href: '/manhua/1992/' }}">进击的巨人</router-link></li>
            <li class="item"><router-link class="link" :to="{ path:'page', query: { href: '/manhua/14286/' }}">一拳超人</router-link></li>
            <li class="item"><router-link class="link" :to="{ path:'page', query: { href: '/manhua/854/' }}">名侦探柯南</router-link></li>
            <li class="item"><router-link class="link" :to="{ path:'page', query: { href: '/manhua/875/' }}">七龙珠</router-link></li>
            <li class="item"><router-link class="link" :to="{ path:'page', query: { href: '/manhua/18712/' }}">刃牙道</router-link></li>
            <li class="item"><router-link class="link" :to="{ path:'page', query: { href: '/manhua/46/' }}">美食的俘虏</router-link></li>

        </ul>
    </section>
      <ul class="search-list">
        <li v-for="search in search_content" class="search-item">
          <router-link class="search-link" :to="{ path:'page', query: { href: search.href }}">
            <div class="search-cover">
              <img class="search-image" :src="search.src">
            </div>
            <div class="search-content">
              <strong class="search-title">{{ search.name }}</strong>
              <small class="search-author">作者:{{ search.author }}</small>
              <small class="search-type">类别:{{ search.type }}</small>
              <small class="search-newsep">更新至:{{ search.newsep }}</small>
              <small class="search-update">更新于:{{ search.update }}</small>
            </div>
          </router-link>
        </li>
      </ul>
    <section>
      
    </section>
    </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      search_content: []
    }
  },
  created () {
  },
  mounted () {
    this.scale()
  },
  methods: {
    get_data: function () {
      var that = this
      var href = '/content/' + that.$route.query.href
      console.log(href)
      that.$api.get(href, 'page', function (data) {
        that.page = data[0]
        that.ep_content = data[1]
      })
    },
    IconBack: function () {
      var onoff = true
      if (onoff === true) {
        var SearchHitFlex1 = document.getElementsByClassName('search-hit-flex1')
        var icon = document.getElementsByClassName('icon')
        var SearchHitTxt = document.getElementsByClassName('search-hit-txt')
        var SearchTxtBox = document.getElementsByClassName('search-txt-box')
        // var SearchHitBox = document.getElementsByClassName('search-hit-box')
        var TxtInputClear = document.getElementsByClassName('txt-input-clear')
        SearchHitFlex1[0].style.transform = 'translate3d(-96%,0,0)'
        SearchTxtBox[0].style.opacity = '1'
        icon[0].style.visibility = 'hidden'
        SearchHitTxt[0].style.visibility = 'hidden'
        SearchHitTxt[0].style.opacity = '0'
        TxtInputClear[0].style.visibility = 'visible'
        TxtInputClear[0].style.opacity = '1'
        onoff = false
      }
    },
    IconReturn: function () {
      var SearchHitFlex1 = document.getElementsByClassName('search-hit-flex1')
      var SearchHitTxt = document.getElementsByClassName('search-hit-txt')
      var SearchTxtBox = document.getElementsByClassName('search-txt-box')
      // var SearchHitBox = document.getElementsByClassName('search-hit-box')
      SearchHitFlex1[0].style.transform = 'translate3d(0%,0,0)'
      SearchTxtBox[0].style.opacity = '0'
      SearchHitTxt[0].style.visibility = 'visible'
      SearchHitTxt[0].style.opacity = '1'

      // onoff = true
    },
    Back: function () {
      // window.location.href = document.referrer
      window.history.back()
    },
    Search: function (event) {
      event.preventDefault()
      var HotBar = document.getElementsByClassName('hot-bar')
      var TxtInput = document.getElementsByClassName('txt-input')[0].value
      HotBar[0].style.opacity = '0'
      HotBar[0].style.visibility = 'visible'
      HotBar[0].style.display = 'none'
      var that = this
      var href = '/content/' + 'search/q_' + TxtInput
      console.log(href)
      that.$api.get(href, 'search', function (data) {
        that.search_content = data
      })
    },
    prevent: function () {
      return false
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
@import '../assets/css/search.css'


</style>
