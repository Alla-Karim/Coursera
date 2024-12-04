function images(){
Tab = [ "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]
  
img =document.querySelectorAll(".ensemble img")
for(var i=0;i<img.length;i++){
    rand="images/"+Tab[Math.floor(Math.random()*Tab.length)];  
    img[i].setAttribute("src",rand)
    img[i].setAttribute("alt","messi")
    img[i].setAttribute("tabindex","0")
    if(document.hasFocus)console.log("focus")
}}
function vide(){
img.setAttribute("alt","Mettez votre souris ici");
img.setAttribute("src","")

}