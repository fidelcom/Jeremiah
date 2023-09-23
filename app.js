hamburger = document.querySelector(".hamburger");
hamburger.onclick =  function(){
  navBar = document.querySelector(".navBar");
  navBar.classList.toggle("active");
}

var magnifying_area = document.getElementById("magnifying_area");
var magnifying_img = document.getElementById("magnifying_img");

console.log(magnifying_area);

magnifying_area.addEventListener("mousemove",function(event){
  /*clientX = event.clientX - magnifying_area.offsetLeft
  clientY = event.clientY - magnifying_area.offsetTop

  mWidth = magnifying_area.offsetWidth
  mHeight = magnifying_area.offsetHeight

  clientX = clientX / mWidth * 100
  clientY = clientY / mHeight * 100
console.log(clientX, clientY, mHeight, mWidth);*/
console.log(magnifying_img);
  //magnifying_img.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)'
  magnifying_img.style.transform = 'scale(2)'
});

magnifying_area.addEventListener("mouseleave",function(){

  magnifying_img.style.transform = 'translate(-50%, -50%) scale(1)'
});

function longText() {
  let moreLongText = document.getElementById("moreLongText");
  let moreInfo = document.getElementById("moreInfo");

  if (moreLongText.style.display === "none") {
    moreInfo.innerHTML = "LESS INFO";
    moreLongText.style.display = "inline";
  } else {
    moreInfo.innerHTML = "MORE INFO →";
    moreLongText.style.display = "none";
  }
}

function myFunction() {
  var dot = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dot.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

function myFunctionn() {
  let dots = document.getElementById("dotss");
  let moreTexts = document.getElementById("moree");
  let btnTexts = document.getElementById("myBtnn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnTexts.innerHTML = "Read more";
    moreTexts.style.display = "none";
  } else {
    dots.style.display = "none";
    btnTexts.innerHTML = "Read Less";
    moreTexts.style.display = "inline";
  }
}

function read() {
  let dotss = document.getElementById("dotsss");
  let moreTextss = document.getElementById("moreee");
  let btnTextss = document.getElementById("myBtnnn");

  if (dotss.style.display === "none") {
    dotss.style.display = "inline";
    btnTextss.innerHTML = "Read more";
    moreTextss.style.display = "none";
  } else {
    dotss.style.display = "none";
    btnTextss.innerHTML = "Read Less";
    moreTextss.style.display = "inline";
  }
}