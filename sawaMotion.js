/* 
Made by Sawacrow
https://github.com/sawacrow/SawaMotion/
https://www.buymeacoffee.com/sawacrow If you wanna support , you can buy me a pizza :)
*/

gsap.registerPlugin(ScrollTrigger);

//fade in
if (document.getElementsByClassName('animate-on-scroll-fade').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-fade").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 1;
        const delay = element.dataset.delay ? parseFloat(element.dataset.delay) : 0;
        const start = element.dataset.start ? element.dataset.start : "top 80%";

        gsap.fromTo(element, {
            opacity: 0
        }, {
            duration: duration,
            delay: delay,
            opacity: 1,
            ease: "sine.inOut",
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse"
            }
        });
    })
}


//fadeout
if (document.getElementsByClassName('animate-on-scroll-fade-out').length > 0) {

    gsap.utils.toArray(".animate-on-scroll-fade-out").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 1;
        const delay = element.dataset.delay ? parseFloat(element.dataset.delay) : 0;
        const scale = element.dataset.scale ? parseFloat(element.dataset.scale) : 1;
        const start = element.dataset.start ? element.dataset.start : "top 80%";


        gsap.fromTo(element, {
            opacity: 1,
            scale: scale,

        }, {
            duration: duration,
            delay: delay,
            opacity: 0,
            scale: 1,
            ease: "sine.inOut",
            stagger: 1,
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse"
            }
        });
    })
}


//zoom in
if (document.getElementsByClassName('animate-on-scroll-zoom').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-zoom").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 1;
        const delay = element.dataset.delay ? parseFloat(element.dataset.delay) : 0;
        const start = element.dataset.start ? element.dataset.start : "top 80%";
        const scaleFrom = element.dataset.scaleFrom ? parseFloat(element.dataset.scaleFrom) : 0;
        const scaleTo = element.dataset.scaleTo ? parseFloat(element.dataset.scaleTo) : 1;

        gsap.fromTo(element, {
            scale: scaleFrom
        }, {
            duration: duration,
            delay: delay,
            scale: scaleTo,
            ease: "sine.inOut",
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse"
            }
        });
    })
}


//zoom out
if (document.getElementsByClassName('animate-on-scroll-zoom-out').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-zoom-out").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 1;
        const start = element.dataset.start ? element.dataset.start : "top 80%";

        gsap.fromTo(element, {scale: 1}, {duration: duration, scale: 0.5, ease: "sine.inOut", scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse"
            }});
    })
}


//slide left
if (document.getElementsByClassName('animate-on-scroll-slide-left').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-slide-left").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 1;
        const delay = element.dataset.delay ? parseFloat(element.dataset.delay) : 0;
        const start = element.dataset.start ? element.dataset.start : "top 80%";

        gsap.fromTo(element, {x: -1000}, {
            duration: duration,
            delay: delay,
            x: 0,
            ease: "sine.inOut",
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse"
            }
        });
    })
}

//slide right
if (document.getElementsByClassName('animate-on-scroll-slide-right').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-slide-right").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 1;
        const start = element.dataset.start ? element.dataset.start : "top 80%";
        gsap.fromTo(element, {x: 1000}, {duration: duration, x: 0, ease: "sine.inOut", scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse"
            }});
    })
}


//slide up
if (document.getElementsByClassName('animate-on-scroll-slide-up').length > 0) {

    gsap.utils.toArray(".animate-on-scroll-slide-up").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 0.75;
        const start = element.dataset.start ? element.dataset.start : "top 80%";
        var tler = gsap.from(element, {
            y: 50,
            duration: duration,
            autoAlpha: 0,
            ease: "sine.out",
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse",
            }
        });
    });
}

//slide down
if (document.getElementsByClassName('animate-on-scroll-slide-down').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-slide-down").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 0.75;
        const start = element.dataset.start ? element.dataset.start : "top 80%";
        var tler = gsap.from(element, {
            y: -50,
            duration: duration,
            autoAlpha: 0,
            ease: "sine.out",
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse",
            }
        });
    });
}

//flip
if (document.getElementsByClassName('animate-on-scroll-flip').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-flip").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 0.75;
        const start = element.dataset.start ? element.dataset.start : "100px 100%";

        var tler = gsap.from(element, {

            ease: "power3.out",
            duration: duration,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: "50% 50% -100px",
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse",
            }
        });
    })
}

//rotate
if (document.getElementsByClassName('animate-on-scroll-rotate').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-rotate").forEach(element => {
    const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 0.75;
    const start = element.dataset.start ? element.dataset.start : "100px 100%";
        var tler = gsap.from(element, {

            ease: "power3.out",
            duration:duration,
            autoAlpha: 0,
            rotation: 360,
            transformOrigin: "50% 50%",
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse",
            }
        });
    })
}

//shake
if (document.getElementsByClassName('animate-on-scroll-shake').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-shake").forEach(element => {
    const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 0.5;
    const start = element.dataset.start ? element.dataset.start : "100px 100%";
        var tler = gsap.from(element, {

            ease: "power3.out",
            duration: duration,
            autoAlpha: 0,
            x: -10,
            yoyo: true,
            repeat: 4,
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse",
            }
        });
    })
}

//wipe
if (document.getElementsByClassName('animate-on-scroll-wipe').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-wipe").forEach(element => {
const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 0.75;
const start = element.dataset.start ? element.dataset.start : "100px 100%";
        var tler = gsap.from(element, {

            ease: "power3.out",
            duration: duration,
            autoAlpha: 0,
            width: 0,
            transformOrigin: "0% 50%",
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse",
            }
        });
    })
}

//fly in
if (document.getElementsByClassName('animate-on-scroll-fly').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-fly").forEach(element => {
const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 0.75;
const start = element.dataset.start ? element.dataset.start : "100px 100%";

        var tler = gsap.from(element, {

            ease: "power3.out",
            duration: duration,
            autoAlpha: 0,
            x: "-100%",
            stagger: 0.15,
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse",
            }
        });
    })
}


//spin
if (document.getElementsByClassName('animate-on-scroll-spin').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-spin").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 0.75;
        const start = element.dataset.start ? element.dataset.start : "100px 100%";
        var tler = gsap.from(element, {
            rotation: 360,
            duration: duration,
            autoAlpha: 0,
            ease: "sine.out",
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse",
            }
        });
    });
}

//flash
if (document.getElementsByClassName('animate-on-scroll-flash').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-flash").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 0.1;
        const start = element.dataset.start ? element.dataset.start : "top 80%";
        var tler = gsap.fromTo(element, {
            opacity: 1
        }, {
            opacity: 0,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse"
            }
        });
    });
}

//dissolve
if (document.getElementsByClassName('animate-on-scroll-dissolve').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-dissolve").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) :1;
        const start = element.dataset.start ? element.dataset.start : "top 80%";
        var tler = gsap.from(element, {
            opacity: 0,
            duration: duration,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: element,
                start: start,
                toggleActions: "play none none reverse"
            }
        });
    });
}

//bounce
if (document.getElementsByClassName('animate-on-scroll-bounce').length > 0) {

    gsap.utils.toArray(".animate-on-scroll-bounce").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 1;
        const start = element.dataset.start ? element.dataset.start : "top 80%";
        gsap.from(element, {duration: duration, y: "-100%", ease: "bounce.out", scrollTrigger: {
            trigger: element,
            start: start,
            toggleActions: "play none none reverse"
        }});
    })
}

//scale
if (document.getElementsByClassName('animate-on-scroll-scale').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-scale").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 1;
        const start = element.dataset.start ? element.dataset.start : "top 80%";
        gsap.from(element, {duration: duration, scale: 0, ease: "sine.inOut", scrollTrigger: {
            trigger: element,
            start: start,
            toggleActions: "play none none reverse"
        }});
    })
}

//staggered
if (document.getElementsByClassName('animate-on-scroll-staggered').length > 0) {

    gsap.utils.toArray(".animate-on-scroll-staggered").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 1;
        const start = element.dataset.start ? element.dataset.start : "top 80%";
        gsap.from(element, {duration: duration, opacity: 0, y: "-50px", stagger: 0.2, ease: "sine.inOut", scrollTrigger: {
            trigger: element,
            start: start,
            toggleActions: "play none none reverse"
        }});
    })
}

//color change
if (document.getElementsByClassName('animate-on-scroll-color').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-color").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 1;
        const start = element.dataset.start ? element.dataset.start : "top 80%";
        const color = element.dataset.color ? element.dataset.color : "#000000";
        const bgcolor = element.dataset.bgcolor ? element.dataset.bgcolor : "#ffffff";
        gsap.from(element, {duration: duration, backgroundColor: bgcolor, color: color, ease: "sine.inOut", scrollTrigger: {
            trigger: element,
            start: start,
            toggleActions: "play none none reverse"
        }});
    })
}

//skew
if (document.getElementsByClassName('animate-on-scroll-skew').length > 0) {
    gsap.utils.toArray(".animate-on-scroll-skew").forEach(element => {
        const duration = element.dataset.duration ? parseFloat(element.dataset.duration) : 1;
        const start = element.dataset.start ? element.dataset.start : "top 80%";
        gsap.from(element, {duration: duration, skewX: "45deg", ease: "sine.inOut", scrollTrigger: {
            trigger: element,
            start: start,
            toggleActions: "play none none reverse"
        }});
    })
}
///staggered row
if (document.getElementsByClassName('animate-on-scroll-staggered-row').length > 0) {
    const rows = gsap.utils.toArray('.animate-on-scroll-staggered-row');

    const tl = [];

    rows.forEach((row, index) => {

        tl.push(gsap.timeline({
            scrollTrigger:{
                trigger: row,
                start: "top 100%",
                end: "bottom bottom",
                markers: false,
                toggleActions: 'play none none reverse'
            }
        }))


        const elements = row.querySelectorAll(":scope >*");
        elements.forEach((element, i) => {
            tl[index].from(element, {
                opacity: 0,
                y: "-50px",
                duration: 1,
                ease: "sine.inOut",
                stagger: 0.2
            });
        })

    })





}


