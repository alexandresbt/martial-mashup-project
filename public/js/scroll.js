
if ($(window).scrollTop() > $(window).height()) {
  document.getElementById("navbar").className += " changeColor";
}

$(function() {
   $(window).scroll(function () {
     var size = $(window).height();
     var nav = document.getElementById("navbar");
     var logo = document.getElementById("logo");
      if ($(this).scrollTop() > size) {
         nav.className += " changeColor";
         logo.src="/images/logo.png";
      }else if ($(this).scrollTop() <= size) {
         nav.classList.remove("changeColor");
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
    console.log("salut");
    img.classList.remove("img");
    img.className += "img-phone";;
  }
})

$("#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7").click(function() {
  document.getElementById('scroll').click();
})