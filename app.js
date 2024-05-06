const tl = gsap.timeline({
    defaults: { duration: 0.35, ease: "power3.easeOut"},
});
const home = document.querySelector(".home");
const messages = document.querySelector(".messages");
const notification = document.querySelector(".notification")

gsap.set(".feather", { scale: 0, transformOrigin: "center" });
home.addEventListener('click', () => {
    gsap.fromTo('.home-svg', {scale: 1}, {scale:0.85, yoyo: true, repeat: 1})
    gsap.fromTo('.feather', {y:-5, scale: 0,}, {y:20, scale: 1.5, duration: 1, stagger: 0.2})
})
gsap.fromTo('.right-feather', {x:0}, {x:5})
gsap.fromTo('.left-feather', {x:0}, {x:-5})

//messages 
gsap.set('.flap', {transformOrigin: 'top'})
messages.addEventListener('click', () => {
    tl.fromTo(".messages-svg", {scale: 1}, {scale:0.9});
    tl.fromTo(".flap", { scale: 1 }, {scale: -1}, "<50%");
    tl.fromTo(".messages-svg", {scale: 0.9}, {scale:1});
    tl.fromTo(".note", { y: 0, opacity: 1 }, { y: -40, opacity:0 });
    tl.to(".flap", { scale: 1, duration: 0.8, delay: 0.1 });
});

gsap.set(".bell", {transformOrigin: 'top'})
gsap.set(".wave", {transformOrigin: 'bottom', opacity: 0})

notification.addEventListener('click', () => {
tl.fromTo(".bell", {rotate:-5}, {rotate: 0, duration: 2, ease: "elastic.out(5, 0.2)"});
// tl.fromTo(".bell", {rotate: 12}, {rotate: 0, ease: "linear"});
// tl.fromTo(".bell", {rotate: 0}, {rotate: -12, ease: "sine.out"});
// tl.fromTo(".bell", {rotate: -12}, {rotate: 10, ease: "linear", duration: 0.7});
// tl.fromTo(".bell", {rotate: 10}, {rotate: 0, ease: "sine.out", duration: 0.7});
gsap.fromTo(".wave", { scale:0, opacity: 1 }, { scale:1.3, opacity: 0, duration: 1 });
gsap.fromTo(".ringer", {x:-1}, {x:0, ease: "elastic.out(5, 0.2)", duration: 2})
});



