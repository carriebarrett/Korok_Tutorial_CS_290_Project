// Slideshow is similar to https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 1;
document.addEventListener("DOMContentLoaded", showDivs(slideIndex));
setInterval(plusDivs, 4000); //calls the plusDivs function every 4 seconds, advancing the slideshow

// increases the slideIndex by one and then calls showDivs with that new index
function plusDivs() {
  slideIndex += 1;
  showDivs(slideIndex);
}
// decreases the slideIndex by one and then calls showDivs with that new index
function minusDivs() {
  slideIndex -= 1;
  showDivs(slideIndex);
}

function showDivs(currentIndex) {
  var mySlidesList = document.getElementsByClassName("mySlides");// creates something like an array of all mySlides elements
  if (currentIndex > mySlidesList.length) {slideIndex = 1} // if the index is greater than the number of items in mySlidesList, set the index back to one to start over at the beginning
  if (currentIndex < 1) {slideIndex = mySlidesList.length} ;// if the index is less than one set the index to the last item in mySlidesList
  for (var i = 0; i < mySlidesList.length; i++) { // hides all the mySlides elements
    mySlidesList[i].style.display = "none";
  }
  mySlidesList[slideIndex-1].style.display = "block"; // displays just the element we want
}
