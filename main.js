function start () {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("backgroundColor").className = "yel";
      } else {
        document.getElementById("backgroundColor").className = "defaultbg";
      }
    setTimeout(function() {
        document.getElementById("graphicDesigner").classList.remove("universalHide")
        document.getElementById("graphicDesigner").classList.add("universalShow")
        setTimeout(function() {
            document.getElementById("and").classList.remove("universalHide")
            document.getElementById("and").classList.add("universalShow")
            setTimeout(function() {
                document.getElementById("webDeveloper").classList.remove("universalHide")
                document.getElementById("webDeveloper").classList.add("universalShow")
            }, 500)
        }, 500)
    }, 100);
    setTimeout(function() {
        document.getElementById("divideMiddleBottom").classList.remove("divideHide")
        document.getElementById("divideMiddleBottom").classList.add("divideShow")
    }, 100);

    setTimeout(function() {
        document.getElementById("isaactsai").innerHTML = "ISAAC TSAI"
        document.getElementById("isaactsai").classList.add("isaactsaiType")
        setTimeout(function() {
            document.getElementById("isaactsai").innerHTML = "ISAAC TSAI"
            document.getElementById("isaactsai").classList.remove("isaactsaiType")
        }, 2000);
    }, 2000);

    setTimeout(function() {
        document.getElementById("ellipse").classList.remove("ellipseStart")
        document.getElementById("ellipse").classList.add("ellipseDelay")
    }, 2001);
}



window.onscroll = function() {scrollAnimation();

    scrollCalc();

};

function scrollAnimation() {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    document.getElementById("backgroundColor").className = "yel";

  } else {
    document.getElementById("backgroundColor").className = "defaultbg";

  }
}

