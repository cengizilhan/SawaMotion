

gsap.registerPlugin(ScrollTrigger);
//fade in
if (document.getElementsByClassName('animate-on-scroll-fade').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-fade").forEach(element => {
        gsap.fromTo(element, {opacity: 0}, {duration: 1, opacity: 1, ease: "sine.inOut", scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }});
    })
}

//fadeout
if (document.getElementsByClassName('animate-on-scroll-fade-out').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-fade-out").forEach(element => {
        gsap.fromTo(element, {opacity: 1}, {duration: 1, opacity: 0, ease: "sine.inOut", scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }});
    })
}


//zoom in
if (document.getElementsByClassName('animate-on-scroll-zoom').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-zoom").forEach(element => {
        gsap.fromTo(element, {scale: 0}, {duration: 1, scale: 1, ease: "sine.inOut", scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }});
    })
}

//zoom out
if (document.getElementsByClassName('animate-on-scroll-zoom-out').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-zoom-out").forEach(element => {
        gsap.fromTo(element, {scale: 1}, {duration: 1, scale: 0.5, ease: "sine.inOut", scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }});
    })
}

//slide left
if (document.getElementsByClassName('animate-on-scroll-slide-left').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-slide-left").forEach(element => {
        gsap.fromTo(element, {x: -1000}, {duration: 1, x: 0, ease: "sine.inOut", scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }});
    })
}

//slide right
if (document.getElementsByClassName('animate-on-scroll-slide-right').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-slide-right").forEach(element => {
        gsap.fromTo(element, {x: 1000}, {duration: 1, x: 0, ease: "sine.inOut", scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }});
    })
}

//slide up
if (document.getElementsByClassName('animate-on-scroll-slide-up').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-slide-up").forEach(x => {
        var tler = gsap.from(x, {
            y: 50,
            duration: 0.75,
            autoAlpha: 0,
            ease: "sine.out",
            scrollTrigger: {
                trigger: x,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });
    });
}

//slide down
if (document.getElementsByClassName('animate-on-scroll-slide-down').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-slide-down").forEach(x => {
        var tler = gsap.from(x, {
            y: -50,
            duration: 0.75,
            autoAlpha: 0,
            ease: "sine.out",
            scrollTrigger: {
                trigger: x,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });
    });
}

//flip
if (document.getElementsByClassName('animate-on-scroll-flip').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-flip").forEach(x => {

        var tler = gsap.from(x, {

            ease: "power3.out",
            duration: 0.75,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: "50% 50% -100px",
            scrollTrigger: {
                trigger: x,
                start: "100px 100%",
                toggleActions: "play none none reverse",
            }
        });
    })
}

//rotate
if (document.getElementsByClassName('animate-on-scroll-rotate').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-rotate").forEach(x => {

        var tler = gsap.from(x, {

            ease: "power3.out",
            duration: 0.75,
            autoAlpha: 0,
            rotation: 360,
            transformOrigin: "50% 50%",
            scrollTrigger: {
                trigger: x,
                start: "100px 100%",
                toggleActions: "play none none reverse",
            }
        });
    })
}

//shake
if (document.getElementsByClassName('animate-on-scroll-shake').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-shake").forEach(x => {

        var tler = gsap.from(x, {

            ease: "power3.out",
            duration: 0.5,
            autoAlpha: 0,
            x: -10,
            yoyo: true,
            repeat: 4,
            scrollTrigger: {
                trigger: x,
                start: "100px 100%",
                toggleActions: "play none none reverse",
            }
        });
    })
}

//wipe
if (document.getElementsByClassName('animate-on-scroll-wipe').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-wipe").forEach(x => {

        var tler = gsap.from(x, {

            ease: "power3.out",
            duration: 0.75,
            autoAlpha: 0,
            width: 0,
            transformOrigin: "0% 50%",
            scrollTrigger: {
                trigger: x,
                start: "100px 100%",
                toggleActions: "play none none reverse",
            }
        });
    })
}

//fly in
if (document.getElementsByClassName('animate-on-scroll-fly').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-fly").forEach(x => {

        var tler = gsap.from(x, {

            ease: "power3.out",
            duration: 0.75,
            autoAlpha: 0,
            x: "-100%",
            stagger: 0.15,
            scrollTrigger: {
                trigger: x,
                start: "100px 100%",
                toggleActions: "play none none reverse",
            }
        });
    })
}


//spin
if (document.getElementsByClassName('animate-on-scroll-spin').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-spin").forEach(x => {
        var tler = gsap.from(x, {
            rotation: 360,
            duration: 0.75,
            autoAlpha: 0,
            ease: "sine.out",
            scrollTrigger: {
                trigger: x,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });
    });
}

//flash
if (document.getElementsByClassName('animate-on-scroll-flash').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-flash").forEach(x => {
        var tler = gsap.fromTo(x, {
            opacity: 1
        }, {
            opacity: 0,
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: x,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

//dissolve
if (document.getElementsByClassName('animate-on-scroll-dissolve').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-dissolve").forEach(x => {
        var tler = gsap.from(x, {
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: x,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

//bounce
if (document.getElementsByClassName('animate-on-scroll-bounce').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-bounce").forEach(element => {
        gsap.from(element, {duration: 1, y: "-100%", ease: "bounce.out", scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }});
    })
}

//scale
if (document.getElementsByClassName('animate-on-scroll-scale').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-scale").forEach(element => {
        gsap.from(element, {duration: 1, scale: 0, ease: "sine.inOut", scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }});
    })
}

//staggered
if (document.getElementsByClassName('animate-on-scroll-staggered').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-staggered").forEach(element => {
        gsap.from(element, {duration: 1, opacity: 0, y: "-50px", stagger: 0.2, ease: "sine.inOut", scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }});
    })
}

//color change
if (document.getElementsByClassName('animate-on-scroll-color').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-color").forEach(element => {
        gsap.from(element, {duration: 2, backgroundColor: "#dc3545", color: "#000000", ease: "sine.inOut", scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }});
    })
}

//skew
if (document.getElementsByClassName('animate-on-scroll-skew').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-skew").forEach(element => {
        gsap.from(element, {duration: 1, skewX: "45deg", ease: "sine.inOut", scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }});
    })
}


/*
<div><h1 class="animate-on-scroll-fade">animate-on-scroll-fade</h1></div>
<div><h1 class="animate-on-scroll-pop-up">animate-on-scroll-fade-out</h1></div>


* */

/*
Fade In From Top: The element fades in while sliding down from the top of the screen.

Fade In From Bottom: The element fades in while sliding up from the bottom of the screen.

Fade In From Left: The element fades in while sliding in from the left side of the screen.

Fade In From Right: The element fades in while sliding in from the right side of the screen.

Slide In From Top: The element slides in from the top of the screen.

Slide In From Bottom: The element slides in from the bottom of the screen.

Slide In From Left: The element slides in from the left side of the screen.

Slide In From Right: The element slides in from the right side of the screen.

Scale In: The element grows from a small size to its full size while fading in.

Bounce In: The element bounces a few times before settling into its final position, giving it a playful and dynamic feel.

Flip In: The element flips over from one side to the other, revealing itself in a surprising and eye-catching way.

Rotate In: The element rotates into view, adding a sense of movement and energy to the animation.

Zoom In: The element zooms in from a larger size, giving it a dramatic and attention-grabbing effect.

Elastic In: The element stretches and bounces before settling into its final position, giving it a lively and organic feel.

Glitch In: The element appears to glitch or flicker before settling into its final position, giving it a futuristic and technological feel.
 */







