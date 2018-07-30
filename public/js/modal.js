
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}
var max_images=13;
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var max=9;
  if (document.URL>="http://localhost/gallery") {
    max=max_images;
  }
  if (n > max) {slideIndex = 1}
  if (n < 1) {slideIndex = max}
  document.getElementById("imageid").src=document.getElementById(slideIndex).src;

}
