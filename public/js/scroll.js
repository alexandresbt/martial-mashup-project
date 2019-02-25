
if ($(window).scrollTop() > $(window).height()) {
  document.getElementById("navbar").className += " changeColor";
  document.getElementById("logo").src="/images/logo.png";
}

$(function() {
   $(window).scroll(function () {
     var size = $(window).height();
     var nav = document.getElementById("navbar");
     var logo = document.getElementById("logo");
      if ($(this).scrollTop() > size && !nav.classList.contains("changeColor")) {
        nav.classList.remove("navbar-dark");
        nav.className += " changeColor navbar-light";
        logo.src="/images/logo.png";
      }else if ($(this).scrollTop() <= size && nav.classList.contains("changeColor")) {
         nav.classList.remove("changeColor");
         nav.classList.remove("navbar-light");
         nav.className += " navbar-dark";
         logo.src="/images/logo2.png";
      }
   });
});

function Scroll(id) {
  id.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


$(document).ready(function() {
  var width = $(window).width();
  var limit = 1250;
  if (width > limit) {
    var s = skrollr.init([smoothScrolling=true]);
  }else {
    var img = document.getElementById("mainimg");
    img.classList.remove("img");
    img.className += "img-phone";;
  }
})

$("#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7").click(function() {
  if ($('#scroll:visible').length != 0){
    console.log("salu2");
    document.getElementById('scroll').click();
  }
})