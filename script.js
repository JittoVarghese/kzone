//.html extension  remover
// Check if the URL contains '.html'
(function () {
  const currentPath = window.location.pathname;

  // Redirect /index.html to /
  if (currentPath === '/index.html') {
    window.history.replaceState(null, '', '/');
  }

  // Handle navigation to other .html pages by removing the .html extension
  else if (currentPath.endsWith('.html')) {
    const newPath = currentPath.slice(0, -5); // Remove '.html'
    window.history.replaceState(null, '', newPath);
  }

  // Ensure the root URL stays as '/' for the index page
  else if (currentPath === '/index') {
    window.history.replaceState(null, '', '/');
  }
})();


//.html extension  remover




const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
//Navigations section Ends


//accordion sections  starts
const faqs=document.querySelectorAll(".faq");

faqs.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    });
});
//accordions sections ends



// Scroll Animations


// gsap.set(".photo:not(:first-child)", {opacity:0, scale:0.5})

// const animation = gsap.to(".photo:not(:first-child)", {
// 	opacity:1, scale:1, duration:1, stagger:1
// })

// ScrollTrigger.create({
// 	trigger:".gallery",
// 	start:"top top",
// 	end:"bottom bottom",
// 	pin:".right",
// 	animation: animation,
// 	scrub:true,
// 	markers:true
// })




/* ScrollTrigger Docs

https://greensock.com/docs/v3/Plugins/ScrollTrigger

*/





/* 

learn more GreenSock and ScrollTrigger

https://www.creativeCodingClub.com

new lessons weekly
less than $1 per week

*/
// Scroll Animations

















 



/* ScrollTrigger Docs

https://greensock.com/docs/v3/Plugins/ScrollTrigger

*/





/* 

learn more GreenSock and ScrollTrigger

https://www.creativeCodingClub.com

new lessons weekly
less than $1 per week

*/