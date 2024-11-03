TweenMax.staggerFrom(".images > div",0.8,
    {
        x:"-80",
        opacity:0,
        ease: "Power3.easeOut",
        delay:1
    },0.8
);
TweenMax.staggerTo(".images > div",0.4,
    {
        scale:"0",
        opacity:0,
        ease: "Power3.easeOut",
        delay:4
    },0.4
);
TweenMax.to(".overlay",1.2,{
    top:"-100%",
    ease: "Expo.easeOut",
    delay:8,
})


// Cursor animation 
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    
    // Use GSAP to smoothly move the circle to the cursor's position
    gsap.to(cursor, {
      duration: 0.2, // Smooth movement delay
      x: e.clientX,
      y: e.clientY,
      ease: "power2.out"
    });
  });
  


//   Navbar Animation 
// scripts.js
gsap.registerPlugin(ScrollTrigger);

// Target the navbar
const navbar = document.querySelector('.nav_bar');

// ScrollTrigger to hide the navbar on sections with the 'no-navbar' class
gsap.utils.toArray('.no-navbar').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => {
      gsap.to(navbar, { y: '-105px', duration: 0.5 }); // Hide navbar
    },
    onLeaveBack: () => {
      gsap.to(navbar, { y: '0%', duration: 0.5 }); // Show navbar
    }
  });
});

// To make sure the navbar is visible on non-hidden sections
gsap.utils.toArray('.section:not(.no-navbar)').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => {
      gsap.to(navbar, { y: '0%', duration: 0.5 }); // Show navbar
    },
    onLeaveBack: () => {
      gsap.to(navbar, { y:'-105px', duration: 0.5 }); // Hide navbar
    }
  });
});


// Scroll triger animation 
gsap.to(".page-4 h1",{
  transform: "translateX(-240%)",
  scrollTrigger:{
    trigger:".page-4",
    // markers:true,
    scroller:"body",
    start:"top 0%",
    end:"top -240%",
    scrub:2,
    pin:true,
  }
})

// Swiper js code 
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});



// image reload prblem solving
// Array of image URLs to preload
const imagesToPreload = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "t_1.jpg",
  "k.jpg",
];

// Function to preload all images
function preloadImages(images, callback) {
  let loadedImages = 0;
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        callback(); // Run callback when all images are loaded
      }
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
    };
  });
}

// Call the function on page load or when clicking a button
window.addEventListener("DOMContentLoaded", () => {
  preloadImages(imagesToPreload, () => {
    document.body.classList.add("images-loaded");
    // Code here to reveal the website content, e.g., removing a loading screen
  });
});
