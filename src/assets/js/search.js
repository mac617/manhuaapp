var onoff = true
var TxtInput = document.getElementsByClassName('txt-input')
TxtInput[0].onclick = function IconBack () {
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
}

TxtInput[0].onblur = function IconReturn () {
  var SearchHitFlex1 = document.getElementsByClassName('search-hit-flex1')
  var SearchHitTxt = document.getElementsByClassName('search-hit-txt')
  var SearchTxtBox = document.getElementsByClassName('search-txt-box')
  // var SearchHitBox = document.getElementsByClassName('search-hit-box')
  SearchHitFlex1[0].style.transform = 'translate3d(0%,0,0)'
  SearchTxtBox[0].style.opacity = '0'
  SearchHitTxt[0].style.visibility = 'visible'
  SearchHitTxt[0].style.opacity = '1'

  onoff = true
}

var TxtInputClear = document.getElementsByClassName('txt-input-clear')
TxtInputClear[0].onclick = function IconReturn () {
  var SearchHitFlex1 = document.getElementsByClassName('search-hit-flex1')
  var SearchHitTxt = document.getElementsByClassName('search-hit-txt')
  var SearchTxtBox = document.getElementsByClassName('search-txt-box')
  // var search_hit_box = document.getElementsByClassName('search-hit-box')
  SearchHitFlex1[0].style.transform = 'translate3d(0%,0,0)'
  SearchTxtBox[0].style.opacity = '0'
  SearchHitTxt[0].style.visibility = 'visible'
  SearchHitTxt[0].style.opacity = '1'

  onoff = true
}

var back = document.getElementById('back')
back.onclick = function back () {
  window.location.href = document.referrer
}
