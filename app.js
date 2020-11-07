
function navSlide(){
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('nav-links li');

  function animateLinks() {

    //Toggle Nav
    nav.classList.toggle('.nav-active');

    //Animate links
    navLinks.forEach((link,index)=>{
     if(link.style.animation){
       link.style.animation=''
     }
     else{
       link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+1.5}s`;
     }
    });


  burger.addEventListener('click',animateLinks());

    //Burger animation

    burger.classList.toggle('toggle');


  }

}

navSlide();
console.log('hey!');
