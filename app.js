/*hamburger = document.querySelector(".hamburger");
hamburger.onclick =  function(){
  navBar = document.querySelector(".navBar");
  navBar.classList.toggle("active");
}*/

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