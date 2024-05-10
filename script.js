function loco(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}
function loadAnimation(){
var tl = gsap.timeline();
tl.from(".line h1" , {
  y:150,
  stagger:0.2,
  duration:0.6,
  delay:0.5,
})
tl.from("#line1-part1 , #line1-part2 " , {
  opacity:0,
  duration:0.5,
  onStart:function(){
    var h5 = document.querySelector("#line1-part1 h5");
    var count = 0 ;
    var counter = setInterval(function(){
      if(count<100){
        count+=1;
        console.log(count)
    
      }
      else{
        count=100
      }
      h5.textContent=count;
    },35)
  }
})
tl.to(" .line h2", {
  animationName:"anime",
  opacity:1
})

tl.to("#loader", {
  // opacity:0,
  delay: 3
})
tl.to("#loader" , {
  display:"none",
  y:-800,

})


tl.from(".content h1 , .content h2 , .content h3" ,{
  y:120,
  stagger:0.2

})
tl.from("#nav , #page2",{
  opacity:0,
  duration :0.9
}, "-=1.5")

document.addEventListener("mousemove",function(dets){
  gsap.to("#flag",{
    left:dets.x,
    top:dets.y
  })
})
document.querySelector("#content3").addEventListener("mouseenter" , ()=>{
  gsap.to("#flag" , {
    opacity:1
  })
})
document.querySelector("#content3").addEventListener("mouseleave" , ()=>{
  gsap.to("#flag" , {
    opacity:0
  })
})
gsap.from("#page3",{
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page3 #underline , #page3 h1 , #page3 #img-container",
    scroller:"#main",
    start:"top 85%"
  }
} )
gsap.from("#page3",{
  y:100,
  duration:1,
  scrollTrigger:{
    trigger:"#page3 h1",
    scroller:"#main",
    start:"top 85%"
  }
} )
gsap.from("#page4",{
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page4 #underline , #page4 h1 ",
    scroller:"#main",
    start:"top 85%"
  }
} )
gsap.from("#page4",{
  y:100,
  duration:1,
  scrollTrigger:{
    trigger:"#page4 h1",
    start:"top 85%",
    scroller:"#main",

  }
},100 )
gsap.from("#footer",{
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#footer h1 , #footer #underline",
    start:"top 85%",
    scroller:"#main",

  }
},100 )
gsap.from("#page4",{
  x:50,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#page4-content",
    scroller:"#main",
    start:"top 85%",

  }
})
gsap.from("#footer",{
  x:50,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#footer-content",
    scroller:"#main",
    start:"top 85%",

  }
})
}
function crsranimation(){
 
Shery.mouseFollower({
  skew:true,
  ease:"cubic-bezier(0.23, 1, 0.320, 1)",
  duration:0.2,

});
Shery.makeMagnet("#nav2 h5" );

var vidcontainer=document.querySelector("#video-container");
var video = document.querySelector("#video-container video");
vidcontainer.addEventListener("mouseenter" , function(){
  vidcontainer.addEventListener("mousemove" , function(dets){
    gsap.to(".mousefollower" , {
      opacity:0
    })
    gsap.to("#video-crsr",{
      top:dets.y - 200,
      left:dets.x - 500
    })
  })
})
vidcontainer.addEventListener("mouseleave",()=>{
  gsap.to(".mousefollower",{
    opacity:1
  })
  gsap.to("#video-crsr" , {
    top:"-15%",
    left:"70%"
  })
})

var flag=0
vidcontainer.addEventListener("click" , ()=>{
  if(flag == 0){
    video.play();
    video.style.opacity=1;
    document.querySelector("#video-crsr").innerHTML=`<i class="ri-pause-mini-fill"></i>`
    gsap.to("#video-crsr" , {
      scale:0.5
    })
    flag=1;
  }
  else{
    video.pause();
    video.style.opacity=1;
    document.querySelector("#video-crsr").innerHTML=`<i class="ri-play-mini-fill"></i>`
    gsap.to("#video-crsr" , {
      scale:1
    })
    flag=0;
  }
  
})

}
function sheryanime(){
  Shery.imageEffect("#img-div #imgs" , {
    style:5,
    config:{"a":{"value":1.83,"range":[0,30]},"b":{"value":-0.76,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8281089316320701},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.99,"range":[0,10]},"metaball":{"value":0.47,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.27,"range":[0,2]},"noise_scale":{"value":17.56,"range":[0,100]}},
    
    gooey:true
  })
}



crsranimation();
loco();
sheryanime();
loadAnimation();


