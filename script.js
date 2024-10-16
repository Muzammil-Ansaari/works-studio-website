// ----------- LOCOMOTIVE SCROLL ------------
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// --------------- JUMP TO PAGE -----------------

document.querySelector('#footer .top .to-the-top').addEventListener('click', function() {
    scroll.scrollTo(0)
})

document.querySelector('#page1 img').addEventListener('click', function() {
    scroll.scrollTo('#page2')
})

document.querySelector('#page2 img').addEventListener('click', function() {
    scroll.scrollTo('#page3')
})

// ----------- LOADING ANIMATION ------------

function loading() {
    let tl = gsap.timeline();

tl.to('#loader .yellow', {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: 'expo.out'
});

tl.to('#loader video', {
    top: "-100%",
    delay: 0.3,
    duration: 0.4,
    ease: 'expo.out'
});

tl.to('#loader h1', {
    color: '#000'
}, 'anim');

tl.to('#loader .black', {
    top: '-100%',
    ease: 'expo.out',
}, 'anim')

tl.to('#loader', {
    display: 'none',
    duration: 0.1
})

}
loading();

// --------------- PAGE2 JS CODE -----------------

let elems = document.querySelectorAll('.element');
elems.forEach(function(elem) {
    elem.addEventListener('mouseenter', function(e) {
        let bgImg = this.getAttribute('data-img');

        document.querySelector('#page2').style.backgroundImage = `url(./assets/${bgImg})`;
    })
})