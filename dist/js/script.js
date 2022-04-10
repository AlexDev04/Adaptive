const banner = document.getElementsByClassName('page-banner')[0];

const buttonsNode = document.querySelectorAll('.page-slinks div');
const buttons = Array.prototype.slice.call(buttonsNode);


const buttonL = document.getElementById('buttonL');
const buttonR = document.getElementById('buttonR');




const slides = [ '/images/banner.webp', '/images/banner-2.webp', '/images/banner-3.webp', '/images/banner-4.webp' ];

let curSlide = 3;


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
    banner.style.backgroundImage = `url("${slides[curSlide]}")`;
    buttons.forEach((el) => el.classList.remove('active'));
    buttons[curSlide].classList.add('active');
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



