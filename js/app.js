/*
 * Archivo principal de JS
 */
 window.addEventListener("load", function(){
   document.getElementById('modal').style.display="none";

   window.addEventListener("scroll", function(){
     var currentScroll = window.pageYOffset || document.body.scrollTop;
       var header = document.getElementById("header");
       var menuPortafolio = document.getElementsByClassName('menu')[0];
       var menuAbout = document.getElementsByClassName('menu')[1];
       var menuContact = document.getElementsByClassName('menu')[2];
        if(currentScroll > 1){
       document.getElementById("nav").className = "container nav-fixed-top transition-3 nav-down-scroll";
       header.style.fontSize = "20px";
     }else{
       document.getElementById("nav").className = "container padding-25 nav-fixed-top transition-3  nav-up-scroll";
       header.style.fontSize = "27px";
     }
     if(currentScroll <=610){
       menuPortafolio.className="menu";
        menuAbout.className="menu";
        menuContact.className="menu";
     }
       if(currentScroll > 610 && currentScroll <= 1464){
         menuPortafolio.className="menu active";
         menuAbout.className="menu";
         menuContact.className="menu";
       }
       else if(currentScroll > 1464 && currentScroll <= 2090){
         menuPortafolio.className="menu";
         menuContact.className="menu";
         menuAbout.className="menu active";
       }
       else if(currentScroll > 2090){
         menuContact.className="menu active";
         menuAbout.className="menu";
         menuPortafolio.className="menu";
       }
   }, false);
});

var img=document.querySelector('.grilla');
img.addEventListener('click',function(event){
  event.preventDefault();
    if(event.target.className == "caption" || event.target.className== "caption" || event.target.className== "fa fa-search-plus fa-3x"){
      var img = event.target.parentNode.childNodes[3].src;
      document.getElementById("nav").style.display = "none";
      document.getElementById('img-modal').src = img;
      document.getElementById('modal').style.display = "block";
    }
  });

var close=document.getElementById('close');
close.addEventListener('click', function(){
  document.getElementById("nav").style.display = "block";
  document.getElementById('modal').style.display = "none";
});
