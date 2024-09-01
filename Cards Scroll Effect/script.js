var tl = gsap.timeline({scrollTrigger : {
    scroller : "body",
    trigger : ".page1",
    start : "50% 50%",
    end : "150% 50%",
    scrub : true,
    pin : true,
}});

tl.to(".img2" , {
    marginTop : "-70vh",
    scale : "1.1",
});
tl.to(".img3" , {
    marginTop : "-70vh",
    scale : "1.2",
});