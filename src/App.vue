<template>
  <div id="app">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
<!--   <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    this.suit()
  },
  methods: {
    suit: function () {
      // var that = this
      var clientWidth = document.body.clientWidth
      // console.log(clientWidth)
      document.documentElement.style.fontSize = clientWidth / 320 * 10 + 'px'
      // console.log(document.documentElement.style.fontSize)
    }
  }
}
</script>

<style>
</style>
