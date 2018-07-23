
if ($(window).scrollTop() > $(window).height()) {
  document.getElementById("navbar").className += " changeColor";
}

$(function() {
   $(window).scroll(function () {
     var size = $(window).height();
     var d = document.getElementById("navbar");
     //d.className += " otherclass";
      if ($(this).scrollTop() > size) {
         d.className += " changeColor";
      }
      if ($(this).scrollTop() < size) {
         d.classList.remove("changeColor");
      }
   });
});

function Scroll(id) {
  id.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

$(document).ready(function() {
  var s = skrollr.init();
})


function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}
var max_images=9;
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > max_images) {slideIndex = 1}
  if (n < 1) {slideIndex = max_images}
  document.getElementById("imageid").src=document.getElementById(slideIndex).src;

}
