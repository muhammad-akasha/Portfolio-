let navbar = document.getElementById("navbar");
let navbarbtn = document.querySelector(".navbar-toggler");
window.addEventListener("scroll", function() {
  if (window.scrollY >= 200) {
    navbar.style.position = "fixed";
    navbar.style.width = "100%";
    navbar.classList.add("animate__animated", "animate__fadeInDown");
    navbar.style.setProperty("transition", "all ease 0.3s", "important");
    navbar.style.zIndex = "99999999";
    navbarbtn.style.setProperty("background","none","important")
    navbar.style.setProperty( "background"," linear-gradient(to right, #59c173, #a17fe0, #5d26c1)","important")
  } else {
    navbar.style.position = "relative";
    navbar.style.removeProperty("width");
    navbar.style.removeProperty("transition");
    navbar.classList.remove("animate__animated", "animate__fadeInDown");
    navbar.style.background = "#000"
    navbarbtn.style.setProperty("background","#f3f3f3","important")
  }
});


let gif = document.querySelector(".for-load-screen");
document.addEventListener("DOMContentLoaded", function() {
  let html = document.documentElement;
  html.style.overflow = "hidden";
  setTimeout(function(){
    gif.style.display = "none";
    gif.style.zIndex = "9999999999999";
    html.style.overflow = "auto";
  },3000);
});



let btnofLoad = document.getElementById("loadmore");
let moreDesign = document.getElementById("moreDesign");
btnofLoad.addEventListener("click",function(){
  setTimeout(() =>{
   if (moreDesign.style.display === "none"){
    moreDesign.style.display = "flex"; // Set display to flex immediately
    btnofLoad.innerHTML = "Show Less";
  }else{
    moreDesign.classList.add("fadeOutUp")
    moreDesign.style.display = "none"; // Set display to none
    btnofLoad.innerHTML = "Show More";
    }
  },300)
})



let aboutImg = document.querySelector(".about-img");
let firstImg = document.querySelector(".items-img");
let secondImg = document.querySelector(".items-img-1");
let thirdImg = document.querySelector(".items-img-2");
let logos1 = document.querySelector(".social-1")
let logos2 = document.querySelector(".social-2");
let logos3 = document.querySelector(".social-3");

window.addEventListener("scroll", function() {
  let scrollPos = window.scrollY;
  aboutImg.style.top = -(scrollPos / 6 - 100 ) + "px";
  firstImg.style.top = -(scrollPos / 6 - 1100 ) + "px";
  secondImg.style.top = -(scrollPos / 6 - 1250 ) + "px";
  thirdImg.style.top = -(scrollPos / 6 - 1400 ) + "px";
  logos1.style.left = (scrollPos / 10 - 650 ) + "px";
  logos2.style.right = (scrollPos / 10 - 760 ) + "px";
  logos3.style.left = (scrollPos / 10 - 850 ) + "px";
});


