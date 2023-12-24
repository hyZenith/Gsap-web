var tl = gsap.timeline()

tl.from("#nav img,#nav h3, #nav h4, #nav button",{
    y:-100,
    duration:1,
    delay:0.7,
    opacity:0,
    stagger:0.2
})


tl.from("#main2 h1",{
    y:100,
   opacity:0,
   stagger:0.5
})


tl.from("#main2>img",{
    scale:0,
    opacity:0,
    stagger:1,  
    duration:0.5 
})

tl.from("#main2 h5",{
    scale:0,
    opacity:0,

})

tl.to("#main2 h5",{
    y:30,
    repeat:-1,
    duration:0.5,
    yoyo:true
})