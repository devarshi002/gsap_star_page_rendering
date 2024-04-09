const letters = document.querySelectorAll("#deva span");

letters.forEach((letter, index) => {
    gsap.from(letter, {
        y: "-100",
        opacity: 0,
        duration: 1,
        delay: index * 0.3,
        ease: "ease.out"
    });
});

gsap.to("#floatingImg", {
    x: 100,
    y: 100,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".main2",
        start: "50% 50%",
        end:"250% 50%",
        scrub: true,
        pin: true,
        
    }
})

tl.to(".svg",{
    maskSize: "300%"
},'a')

tl.to(".img",{
    backgroundSize: "100%",
},'a')

tl.to(".svg2",{
    maskSize: "300%"
},'b')

tl.to(".img2",{
    backgroundSize: "100%",
},'b')
