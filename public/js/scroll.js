
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
      }
      if ($(this).scrollTop() < size) {
         nav.classList.remove("changeColor");
         logo.src="/images/logo2.png";
      }
   });
});

function Scroll(id) {
  id.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

$(document).ready(function() {
  var s = skrollr.init();
})