// Slideshow is similar to https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 1;
document.addEventListener("DOMContentLoaded", showDivs(slideIndex));
setInterval(plusDivs, 4000);

function plusDivs() {
  slideIndex += 1;
  showDivs(slideIndex);
}

function minusDivs() {
  slideIndex -= 1;
  showDivs(slideIndex);
}

function showDivs(currentIndex) {
  var mySlidesList = document.getElementsByClassName("mySlides");
  if (currentIndex > mySlidesList.length) {slideIndex = 1}
  if (currentIndex < 1) {slideIndex = mySlidesList.length} ;
  for (var i = 0; i < mySlidesList.length; i++) {
    mySlidesList[i].style.display = "none";
  }
  mySlidesList[slideIndex-1].style.display = "block";
}
