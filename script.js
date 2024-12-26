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


const details = gsap.utils.toArray(".contentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")


gsap.set(photos, {yPercent:101})

const allPhotos = gsap.utils.toArray(".desktopPhoto")


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 600px)", () => {

  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")
	
  ScrollTrigger.create({
	trigger:".twoside",
	start:"top top",
	end:"bottom bottom",
	pin:".contentRightSide"
})

//create scrolltrigger for each details section
//trigger photo animation when headline of each details section 
//reaches 80% of window height
details.forEach((detail, index)=> {

	let headline = detail.querySelectorAll(".lefttextheading")
	let animation = gsap.timeline()
	   .to(photos[index], {yPercent:0})
	   .set(allPhotos[index], {autoAlpha:0})
	ScrollTrigger.create({
		trigger:headline,
		start:"top 80%",
		end:"top 80%",
		animation:animation,
		scrub:true,
		markers:false
	})
})
	
	
  
  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
	  console.log("mobile")
  };
});


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