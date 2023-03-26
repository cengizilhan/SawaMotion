# SawaMotion Animation Library based by Gsap.js


This is a library based on GSAP.js. You can use it by adding a class to an element and triggering animation with the ScrollTrigger. The animation starts when the object appears during scrolling.


## Example

To use it, simply add the following class, for example:

    <h1 class="animate-on-scroll-fade">sawacrow</h1>


## Optional Attributes
Optionally, you can also add parameters such as data-duration and data-start.

    <h1 class="animate-on-scroll-fade" data-duration="1" data-start="top 80%">sawacrow</h1>  


The data-duration parameter specifies how long the animation will take to complete.  
The data-start parameter specifies the starting point of the animation (top, bottom, center, 80%, etc.). For more detailed information, please refer to the GSAP.js ScrollTrigger documentation.

## Installion

To use this library, you need to:

Include GSAP.js and GSAP Scroll Trigger in your project.  
Include the SawaMotion.js file in your project.  
Here is an example:

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>  
    <script src="sawaMotion.js"></script>

## Class List

1. 'animate-on-scroll-fade'
2. 'animate-on-scroll-fade-out'
3. 'animate-on-scroll-zoom'
4. 'animate-on-scroll-zoom-out'
5. 'animate-on-scroll-slide-left'
6. 'animate-on-scroll-slide-right'
7. 'animate-on-scroll-slide-up'
8. 'animate-on-scroll-slide-down'
9. 'animate-on-scroll-flip'
10. 'animate-on-scroll-rotate'
11. 'animate-on-scroll-shake'
12. 'animate-on-scroll-wipe'
13. 'animate-on-scroll-fly'
14. 'animate-on-scroll-spin'
15. 'animate-on-scroll-flash'
16. 'animate-on-scroll-dissolve'
17. 'animate-on-scroll-bounce'
18. 'animate-on-scroll-scale'
19. 'animate-on-scroll-staggered'
20. 'animate-on-scroll-color'
21. 'animate-on-scroll-skew'
22. 'animate-on-scroll-staggered-row'
