// slideshow is similar to https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideshowIndex = 0;
document.addEventListener("DOMContentLoaded", showImg(slideshowIndex));

function incrSlideshow(change) {
showImg(slideshowIndex += change);// shows the image with the next index
}

function showImg(index) {
var i;
var slideList = document.getElementsByClassName("mySlideshow");
if (n > slideList.length) {
  slideshowIndex = 1;
}
if (n < 0) {
  slideIndex = slideList.length - 1;
}
for (i = 0; i < slideList.length; i++) {
  slideList[i].style.display = "none";
}
slideList[slideshowIndex].style.display = "block";
}