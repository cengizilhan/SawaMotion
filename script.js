function gsapLayoutAnims() {

    gsap.registerPlugin(ScrollTrigger);
    if (document.getElementsByClassName('fade-on-first-load').length > 0) {
        gsap.utils.toArray(".fade-on-first-load").forEach(x => {

            var tler = gsap.from(x, {

                ease: "sine.inOut", //y: 50,
                duration: 0.75, autoAlpha: 0,

            });
        })
    }
    if (document.getElementsByClassName('slide-on-first-load').length > 0) {
        gsap.utils.toArray(".slide-on-first-load").forEach(x => {

            var tler = gsap.from(x, {

                ease: "sine.inOut", y: 50, duration: 0.75, autoAlpha: 0,

            });
        })
    }
    if (document.getElementsByClassName('animate-on-scroll').length > 0) {
        gsap.utils.toArray(".animate-on-scroll").forEach(x => {

            var tler = gsap.from(x, {

                ease: "sine.inOut", y: 50, duration: 0.75, autoAlpha: 0, scrollTrigger: {
                    trigger: x, start: "10px 80%", end: "+=100", //only to down
                    toggleActions: "play none none reverse", end: "top 100%",

                }
            });
        })
    }
    if (document.getElementsByClassName('animate-on-scroll-x').length > 0) {
        gsap.utils.toArray(".animate-on-scroll-text-delay-x").forEach(x => {

            var tler = gsap.from(x, {

                ease: "sine.inOut", //y: 50,
                duration: 0.75, autoAlpha: 0, scrollTrigger: {
                    trigger: x, //start: "100px 50%", delay
                    start: "100px 100%", end: "+=100", //only to down
                    toggleActions: "play none none reverse", end: "top 100%",

                }
            });
        })
    }


    if (document.getElementsByClassName('text-appear').length > 0) {
        gsap.registerPlugin(SplitText);

        var tltext = gsap.timeline(), mySplitText = new SplitText(".text-appear", {type: "words,chars"}),
            chars = mySplitText.chars; //an array of all the divs that wrap each character

        gsap.set(".text-appear", {perspective: 400});

        //console.log(chars);

        tltext.from(chars, {
            duration: .3, opacity: .15,

            ease: "back", stagger: 0.01
        });

    }
    if (document.getElementsByClassName('page-transition-text').length > 0) {
        //GSAP LAYOUT- SPLIT TEXT END

        //GSAP OPEN ANIM START
        gsap.registerPlugin(SplitText);

        var tltext = gsap.timeline(), mySplitText = new SplitText(".page-transition-text", {type: "words,chars"}),
            chars = mySplitText.chars; //an array of all the divs that wrap each character

        gsap.set(".page-transition-text", {perspective: 400});

        //console.log(chars);

    }
    if (document.getElementsByClassName('animCounter').length > 0) {
        //Number Counter
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".animCounter").forEach(box => {
            var tler = gsap.from(box, {
                textContent: "0", duration: 1.5, ease: "power1.inOut", modifiers: {
                    textContent: value => formatNumber(value, 0) + "+"
                }, scrollTrigger: {
                    trigger: box,
                    start: "top 100%",
                    end: "+=100",
                    toggleActions: "play none none reverse",
                    end: "top 100%",

                }
            });
        })

        function formatNumber(value, decimals) {
            let s = (+value).toLocaleString('en-US').split(".");
            return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
        }
    }
}
gsapLayoutAnims();