Shery.mouseFollower();
Shery.makeMagnet(".magnet");
shery.hoverWithMediaCircle(".hvr",{videos:["./buger/mini project 2.mp4", "./buger/mini project 1.mp4"] });
gsap.to("fleftel",{
    scrollTrigger:{
        trigger: "#fimage",
         pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
},
y:"-300%",
ease:Power1
})
let sections=document.querySelectorAll(".fleftel");
Shery.imageEffect(".images", {
    style: 5,
    slideStyle: (setScroll) => {
      sections.forEach(function(section ,index){
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function(prog){
            setScroll(prog.progress+index);
        },
      });
    });
      },
  });