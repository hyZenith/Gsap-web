// this is how gsap is written
// ---->To
// gsap.to("#box",{
// // Properties
//     x:500,
//     duration:2,
//     delay:2,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:0.5

// })
//----->From
// gsap.from("#box",{
//     x:500,
//     duration:2,
//     delay:2,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:0.5
// }),
/*

gsap.to("h1",{
    x:400,
    duration:2,
    delay:1,
    // backgroundColor:"blue",
    // rotate:360,
    stagger:0.5,//kitne time interval mein  chalna chahiye
    repeat:2, // ye repeat krega
    yoyo:true,//reverse in backward dirchaln
}) */
var tl = gsap .timeline()

tl.to("h1",{
    x:600,
})

tl.to("h2",{
    x:700,
})

tl.to("h3",{
    x:800,
})