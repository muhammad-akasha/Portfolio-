// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
  

let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  if (window.scrollY >= 200) {
    navbar.style.position = "fixed";
    navbar.style.width = "100%";
    navbar.classList.add("animate__animated", "animate__fadeInDown");
    navbar.style.setProperty("transition", "all ease 0.3s", "important");
    navbar.style.zIndex = "9999999999999";
    navbar.style.setProperty( "background"," linear-gradient(to right, #59c173, #a17fe0, #5d26c1)","important")
  } else {
    navbar.style.position = "relative";
    navbar.style.removeProperty("width");
    navbar.style.removeProperty("transition");
    navbar.classList.remove("animate__animated", "animate__fadeInDown");
    navbar.style.background = "#000"
  }
});
let gif = document.querySelector(".for-load-screen");
window.onload = function(){
  gif.classList.add("for-load-gif");
  setTimeout(function(){
    gif.classList.remove("for-load-gif");
  },3000);
}