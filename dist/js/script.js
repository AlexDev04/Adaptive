const banner = document.getElementsByClassName('page-banner')[0];
console.log(banner);

const buttonsNode = document.querySelectorAll('.page-slinks div');
const buttons = Array.prototype.slice.call(buttonsNode);
console.log(buttons);

const buttonL = document.getElementById('buttonL');
const buttonR = document.getElementById('buttonR');
console.log(buttonL + ' ' + buttonR);



const slides = [ '/images/banner.webp', '/images/banner-2.webp', '/images/banner-3.webp', '/images/banner-4.webp' ];

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
    if (curSlide < 0) {
        curSlide = slides.length -1;
    }
    return curSlide;
}

function chain (curSlide) {
    console.log(curSlide);
    banner.style.backgroundImage = `url("${slides[curSlide]}")`;
    console.log(banner.style.backgroundImage);
    buttons.forEach((el) => el.classList.remove('active'));
    buttons[curSlide].classList.add('active');
    return slides[curSlide];
}

let intervalSelf = setInterval(function() {
    chain(increment());
}, 10000)

buttons.forEach((el) => {
    el.addEventListener('click', () => {
        curSlide = el.dataset.num;
        chain(curSlide);
        clearInterval(intervalSelf);
        intervalSelf = setInterval(function() {
            chain(increment());
        }, 10000)
    })
})

buttonL.addEventListener('click', () => {
    chain(decrement());
    clearInterval(intervalSelf);
    intervalSelf = setInterval(function() {
        chain(increment());
    }, 10000)
})

buttonR.addEventListener('click', () => {
    chain(increment());
    clearInterval(intervalSelf);
    intervalSelf = setInterval(function() {
        chain(increment());
    }, 10000)
})



