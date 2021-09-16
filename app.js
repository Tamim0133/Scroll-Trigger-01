const slides = document.querySelectorAll(".slide");
const burger = document.querySelector(".burger");
gsap.registerPlugin(ScrollTrigger);
gsap.to(
  ".reveal-1",

  {
    x: "100%",
    duration: 1.5,
    ease: "power1.inOut",
    scrollTrigger: {
      start: "top 10% ",
      end: "top 50%",
      toggleActions: "play none resume reverse",
    },
  }
);
slides.forEach((slide) => {
  let reveal = slide.querySelector(".reveal");
  console.log(reveal);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: reveal,
      // markers: true,
      pin: slide,
      scrub: 1,
      toggleActions: "play none resume reverse",
      start: "top 40%",
      end: "top top",
      ease: "power1.inOut",
    },
  });
  tl.to(reveal, {
    x: "100%",
  });
  tl.fromTo(
    slide,
    {
      scale: 0.75,
      opacity: 0.5,
    },

    {
      scale: 1,
      opacity: 1,
    },
    "-=0.25"
  );
});