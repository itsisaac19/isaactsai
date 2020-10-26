
function scrollCalc (){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        var scollHeight = $(document).height(); 
        var maxMove = 3000;
        var rotateVal =  0 + (($(document).scrollTop()* maxMove) / scollHeight);



          var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
          //document.getElementById("ww").innerHTML = scrollBottom


        var opacity = (scrollBottom - 240) / 100

        //console.log(opacity)
        
        $("#middleGrid").css("transform", "translateY("+(-rotateVal)+"px)");
        document.getElementById("middleGrid").style.filter = "opacity("+opacity+")";
        //console.log(document.documentElement.scrollTop)
    
      } else {
        $("#middleGrid").css("transform", "translateY(0px)");
    
      }

      if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        //alert("burh")
        //console.log(document.documentElement.scrollTop)
    
      } else {

    
      }

}