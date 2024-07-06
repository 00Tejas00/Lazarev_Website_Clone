
function LocomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  
  

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}


function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(100%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("#nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}



function navanimation() {
  var nav = document.querySelector("#nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "25vh",
    });

    tl.to(".nav-elem h5", {
      display: "block",
    });

    tl.to(".nav-elem h5 span", {
      y: 0,
      // duration:0.4,
      delay: 0,
      stagger: {
        amount: 0.4,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-elem h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-elem h5", {
      display: "none",
      duration: 0.1,
    });

    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.1,
    });
  });
}

function page2() {
  var rightelem = document.querySelectorAll(".right-elems");

  rightelem.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      // console.log(elem.childNodes[4])
      gsap.to(elem.childNodes[1], {
        opacity: 1,
        scale: 1,
        duration: 0.5,
      });
      gsap.to(this, { borderTop: "2px solid white" });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[1], {
        opacity: 0,
        scale: 0,
        duration: 0.5,
      });
      gsap.to(this, { borderTop: "2px solid #272727" });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[1], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 90,
      });
    });
  });
}

function page3_video_animation() {
  var page3_center = document.querySelector("#page3-center");
  var video = document.querySelector("#Page3Video");

  page3_center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
      // duration:0.5
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0) scaleY(0)",
      opacity: 0,
      borderRadius: 0,
      // duration:0.5
    });
  });
}

function page6_animation() {
  var page6_left = document.querySelector("#page6-left");

  page6_left.addEventListener("mouseenter", function () {
    gsap.to(this, { borderTop: "2px solid black", duration: 0.2 });
  });
  page6_left.addEventListener("mouseleave", function () {
    gsap.to(this, { borderTop: "2px solid #E6E6E6", duration: 0.2 });
  });

  var page6_right = document.querySelectorAll("#page6-right");

  page6_right.forEach(function (elem) {
    elem.childNodes[3].addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.childNodes[3].addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].load();
    });
  });
}

function page8Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}


loadingAnimation();

navanimation();

page2();

page3_video_animation();

page6_animation();

page8Animations();

LocomotiveAnimation();
