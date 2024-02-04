document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    // Get references to the elements
    const navItems = document.querySelectorAll('nav ul li');
    const about = document.querySelector(".about-us")
    const aboutImage = document.querySelector(".about-img");
    const menu = document.querySelectorAll(".menu div");
   
    // Define the animation
    const navAnimation = gsap.timeline({ paused: true })
        .from(navItems, { opacity: 0, y: -20, stagger: 0.2, duration: 0.5 })
        .from('.hero', { opacity: 0, x: "-100%", duration: 1, ease: "power4.out" })
        .from(about, {
            opacity: 0,
            y: 100, // Move from the right
            duration: 1,
            scrollTrigger: {
              trigger: about,
              start: "top 80%", // Animation starts when 80% of the hero image is visible
              end: "top 20%", // Animation ends when 20% of the hero image is visible
              scrub: 1
            }
          })
          .from(aboutImage, {
            opacity: 0,
            x: 100, 
            duration: 1,
            scrollTrigger: {
              trigger: aboutImage,
              start: "top 80%", 
              end: "top 20%",
              scrub: 1
            }
          })
    
          .from(menu, { opacity: 0, x: 100, stagger: 0.2, duration: 0.5,
            scrollTrigger: {
                trigger: menu,
                start: "top 80%", 
                end: "top 20%",
                scrub: 1
              }
        })

        .from('.info',{
            opacity: 0,
            y: 100, 
            duration: 2,
            scrollTrigger: {
                trigger: '.info',
                start: "top 80%", 
                end: "top 20%",
                scrub: 1
              }
        })

        .from('.f-1', {
            opacity:0,
            y:100,
            duration:2,
            scrollTrigger: {
                trigger: '.food',
                start: "top 80%", 
                end: "top 20%",
                scrub: 1
              }
        })

        .from('.s-1', {
            opacity:0,
            x:100,
            duration:2,
            scrollTrigger: {
                trigger: '.s-1',
                start: "top 80%", 
                end: "top 20%",
                scrub: 1
              }
        })
        
        .from('.f-2', {
            opacity:0,
            x:100,
            duration:2,
            scrollTrigger: {
                trigger: '.f-2',
                start: "top 80%", 
                end: "top 20%",
                scrub: 1
              }
        })

        .from('.s-2', {
            opacity:0,
            x:-100,
            duration:2,
            scrollTrigger: {
                trigger: '.s-2',
                start: "top 80%", 
                end: "top 20%",
                scrub: 1
              }
        })

        .from('.f-3', {
            opacity:0,
            y:100,
            duration:2,
            scrollTrigger: {
                trigger: '.f-3',
                start: "top 80%", 
                end: "top 20%",
                scrub: 1
              }
        })

        .from('.s-3', {
            opacity:0,
            x:100,
            duration:2,
            scrollTrigger: {
                trigger: '.s-3',
                start: "top 80%", 
                end: "top 20%",
                scrub: 1
              }
        })

        .from('.container', {
            opacity:0,
            scale:.1,
            duration:.5
        })

    navAnimation.play();

   

  

















    });