const tl = gsap.timeline();

tl.to(".steps", {
  y: "-950px",
  duration: 20,
  repeat: -1,
  ease: "none"
});

function play() {
  var audio = new Audio('music/Ambient.mp3');
  audio.play();
}

window.addEventListener("click", () => {
   play()
});
