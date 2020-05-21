document.addEventListener('DOMContentLoaded',function(){
const images = ['img1.jpg',"img2.jpg","img3.jpg"];
const image = images[Math.floor(Math.random()*images.length)] ;
document.getElementById("image").setAttribute("src",`./images/${image}`)},false);
