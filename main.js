function start () {

  //EVERYTHING ON HOMEPAGE START
  var img = document.getElementById('outlineRec')
  var name = document.getElementById('adventures')

  var divideLine1 = document.getElementById('lineOne')
  var divideLine2 = document.getElementById('lineTwo')
  var subTitle = document.getElementById('portfolioSubTitle')
  var paraExplain = document.getElementById('portfolioExplain')

  //SLIDE IN ELEMENTS

  setTimeout(function() {
    img.style.top = '0px'
    img.style.filter = "opacity(1)"
  }, 500)

  setTimeout(function() {
    name.style.top = '0px'
    name.style.filter = "opacity(1)"
  }, 800)

  setTimeout(function() {
    subTitle.style.top = '0px'
    subTitle.style.filter = "opacity(1)"
  }, 1300)

  setTimeout(function() {
    paraExplain.style.top = '0px'
    paraExplain.style.filter = "opacity(1)"
  }, 1400)

}

function freshWebsite() {
  window.location = "https://freshweather.co"
}