// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf);


var tl = gsap.timeline({scrollTrigger : {
    scroller : "body",
    trigger : ".imgContainer",
    start : "50% 50%",
    end : "150% 50%",
    scrub : true,
    pin : true,
}});

tl.to(".image" , {
    transform : "rotateX(0deg)",
} , "ha");

tl.to(".image2" , {
    opacity : 0,
} , "ha");