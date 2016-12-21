<template>
  <div id="comic">
    <meta name="referrer" content="never">
    <transition name="up">
      <section class="top-bar" v-if="show">
        <a class="top-back" v-on:click="Back"></a>
        <label class="top-ep">
          <span>{{ ep_name }}</span>
          <span>{{ ' - '+ (count+1) +'/'+comic_content.length }}</span>
        </label>
      </section>
    </transition>
    <transition name="down">
      <section class="bottom-bar" v-if="show">
        <router-link class="bottom-page" :to="{ path:'chapter', query: { href: comic_href, chapter_list: chapter_list }}"></router-link>
        <router-link class="bottom-home" to="/"></router-link>
        <a class="bottom-left" v-on:click="Left"></a>
        <a class="bottom-right" v-on:click="Right"></a>
      </section>
    </transition>
    <section class="comic-contents" v-on:click="show = ! show">
      <img :src="comic" class="comic_img" ref="comic_img" data-original="../assets/image/attack_titan.jpg" v-for="comic in comic_content.slice(0, page)">
    </section>
    <div class="availHeight"></div>
    <div class="scrollTop"></div>
    <div class="scrollHeight"></div>
    <transition name="prompt">
      <section v-if="prompt" class="prompt">
        <div class="prompt_word">已经没有更多了，洗洗睡吧!</div>
      </section>
    </transition>
    <transition name="bottom-ep">
      <section v-if="!show" class="bottom-ep">
        <div class="bottom-ep-word">{{ ep_name }} {{(count+1) +'/'+comic_content.length }}</div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'comic',
  data () {
    return {
      comic_content: [],
      ep_name: [],
      page: 3,
      comic_href: this.$route.query.href.match(/\/manhua\/.*?\//g)[0],
      chapter_list: this.$route.query.chapter_list,
      num: this.$route.query.num,
      show: true,
      tur: true,
      prompt: false,
      turn: true,
      count: 0,
      reverse: this.$route.query.reverse
    }
  },
  created () {
    this.get_data()
    this.OnScroll()
    this.meta()
  },
  mounted () {
    this.counter()
  },
  methods: {
    get_data: function () {
      var that = this
      var href = '/content/' + that.$route.query.href
      // console.log(that.num)
      // console.log(href)
      // console.log(that.chapter_list.length)
      setTimeout(function () {
        that.$api.get(href, 'comic', function (data) {
          that.comic_content = data[0]
          that.ep_name = data[1]
        // console.log(that.comic_content)
        })
      }, 100)
    },
    Back: function () {
      // window.location.href = document.referrer
      window.history.back()
    },
    Left: function () {
      var that = this
      if (that.reverse === true) {
        if (that.num === 0) {
          that.prompt = true
          setTimeout(function () { that.prompt = false }, 2000)
        } else {
          var Lrehref = '/content/' + that.chapter_list[that.num - 1]
          // console.log(that.chapter_list)
          // console.log(that.num)
          // console.log(href)
          that.$api.get(Lrehref, 'comic', function (data) {
            that.comic_content = data[0]
            that.ep_name = data[1]
            that.num--
            that.page = 2
            document.body.scrollTop = 0
            that.count = 0
            // console.log(that.num)
          })
        }
      } else {
        if (that.num !== that.chapter_list.length - 1) {
          var Lhref = '/content/' + that.chapter_list[that.num + 1]
          // console.log(that.chapter_list)
          // console.log(that.num)
          // console.log(href)
          that.$api.get(Lhref, 'comic', function (data) {
            that.comic_content = data[0]
            that.ep_name = data[1]
            that.num++
            that.page = 2
            document.body.scrollTop = 0
            that.count = 0
            // console.log(that.num)
          })
        } else {
          that.prompt = true
          setTimeout(function () { that.prompt = false }, 2000)
        }
      }
    },
    Right: function () {
      var that = this
      if (that.reverse === true) {
        if (that.num === that.chapter_list.length - 1) {
          that.prompt = true
          setTimeout(function () { that.prompt = false }, 2000)
        } else {
          var Rrehref = '/content/' + that.chapter_list[that.num + 1]
          // console.log(that.chapter_list)
          // console.log(that.num)
          // console.log(href)
          that.$api.get(Rrehref, 'comic', function (data) {
            that.comic_content = data[0]
            that.ep_name = data[1]
            that.num++
            that.page = 2
            document.body.scrollTop = 0
            that.count = 0
            // console.log(that.num)
          })
        }
      } else {
        if (that.num !== 0) {
          var Rhref = '/content/' + that.chapter_list[that.num - 1]
          // console.log(that.chapter_list)
          // console.log(that.num)
          // console.log(href)
          that.$api.get(Rhref, 'comic', function (data) {
            that.comic_content = data[0]
            that.ep_name = data[1]
            that.num--
            that.page = 2
            document.body.scrollTop = 0
            that.count = 0
            // console.log(that.num)
          })
        } else {
          that.prompt = true
          setTimeout(function () { that.prompt = false }, 2000)
        }
      }
    },
    OnScroll: function () {
      var that = this
      window.addEventListener('scroll', function () {
        // document.querySelector('.availHeight').innerHTML = 'availHeight:' + window.screen.availHeight
        // document.querySelector('.scrollTop').innerHTML = 'scrollTop:' + document.body.scrollTop
        // document.querySelector('.scrollHeight').innerHTML = 'scrollHeight:' + document.body.scrollHeight
        if (that.tur === true && window.screen.availHeight + document.body.scrollTop >= document.body.scrollHeight / 2) {
          setTimeout(function () {
            that.page++
            // console.log(that.page)
            that.tur = true
          }, 700)
          that.tur = false
        }
        that.show = false
      })
    },
    // timer: function () {
    //   var that = this
    //   if (that.show === false) {
    //     clearTimeout(that.time)
    //   }
    //   that.time = setTimeout(function () {
    //     that.show = false
    //     console.log('time')
    //   }, 3000)
    // },
    img_error: function () {
      console.log('cuowu')
    },
    onoff: function () {
      var that = this
      // console.log('dddd')
      if (that.turn) {
        var tim = setTimeout(function () {
          that.show = false
          that.turn = true
          // console.log('haha')
        }, 3000)
        that.turn = false
        // console.log(that.turn)
      } else {
        clearTimeout(tim)
        // console.log(that.turn)
      }
    },
    counter: function () {
      var that = this
      window.addEventListener('scroll', function () {
        // var ImgHeight = document.getElementsByClassName('comic_img')[0].style.heightdocument.body.scrollTop.offsetTop
        // if (document.body.scrollTop > that.$refs.comic_img[that.count].offsetTop + that.$refs.comic_img[that.count].height / 2) {
        //   that.count++
        // }
        for (var i = 0; i < that.$refs.comic_img.length; i++) {
          if (document.body.scrollTop > that.$refs.comic_img[that.count].offsetTop + that.$refs.comic_img[that.count].height / 2) {
            that.count++
          }
          if (document.body.scrollTop < that.$refs.comic_img[that.count].offsetTop - that.$refs.comic_img[that.count].height / 2) {
            that.count--
          }
        }
      })
    },
    meta: function () {
      // var that = this
      var meta = document.querySelector('meta[content]')
      meta.content = 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, user-scalable=yes'
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/comic.css';
</style>
