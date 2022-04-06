const banner = document.getElementsByClassName('page-banner')[0];
console.log(banner);
const buttons = document.querySelectorAll('.page-slinks div');
console.log(buttons);


const slides = [ '/images/banner.png', '/images/banner-2.png', '/images/banner-3.png', '/images/banner-4.svg' ];

let curSlide = 3;
console.log(curSlide);
console.log(slides[curSlide]);

function increment () {
    curSlide += 1;
    if (curSlide > slides.length - 1) {
        curSlide = 0;
    }
    return curSlide;
}
function decrement () {
    curSlide -= 1;
    if (curSlide < slides.length) {
        curSlide = slides.length -1;
    }
    return curSlide;
}

function chain (curSlide) {
    console.log(curSlide);
    banner.style.backgroundImage = `url("${slides[curSlide]}")`;
    console.log(banner.style.backgroundImage);
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
    }
    buttons[curSlide].classList.add('active');
    return slides[curSlide];
}

const intervalId = setInterval(function() {
    chain(increment());
}, 15000)

