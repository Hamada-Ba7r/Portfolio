//************************** scroll header
window.onscroll = function(){
    if(window.scrollY > 0){
        document.querySelector(".header").style = "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        
    }else{
        document.querySelector(".header").style = "box-shadow: none"
    }
}
//********************* navbar scroll open
document.querySelector(".menu-icon").onclick = function(){
    document.querySelector(".links").classList.toggle("open");
}
//**************** text animation
var typed = new Typed(".home-content-text",{
    strings: [ "Front-End" , "Web Developer" ] ,
    typeSpeed: 50, 
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});
// ************** SKILL ANIMATIONS 
let skills = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function (){
    if(window.scrollY >= skills.offsetTop - 100 ){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }else{

    }
}