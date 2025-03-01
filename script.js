//.html extension  remover
// Check if the URL contains '.html'
(function () {
  const currentPath = window.location.pathname;

  // Redirect /index.html or /index to /
  if (currentPath === '/index.html' || currentPath === '/index') {
    window.history.replaceState(null, '', '/');
  }

  // Handle navigation to other .html pages by removing the .html extension
  else if (currentPath.endsWith('.html')) {
    const newPath = currentPath.slice(0, -5); // Remove '.html'
    window.history.replaceState(null, '', newPath);
  }

  // Ensure navigation back to the index page shows '/'
  window.addEventListener('popstate', () => {
    if (window.location.pathname === '/index') {
      window.history.replaceState(null, '', '/');
    }
  });
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


// scroll pinning animation
const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
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
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right"
})

//create scrolltrigger for each details section
//trigger photo animation when headline of each details section 
//reaches 80% of window height
details.forEach((detail, index)=> {

	let headline = detail.querySelector("h1")
	let animation = gsap.timeline()
	   .to(photos[index], {yPercent:0})
	   .set(allPhotos[index], {autoAlpha:0})
	ScrollTrigger.create({
		trigger:headline,
		start:"top 80%",
		end:"top 50%",
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

// scroll pinning animation