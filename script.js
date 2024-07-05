let swiper; 
const screenWidth = window.window.innerWidth;
const buttonShowMore  = document.querySelector('.show-more-button');
const buttonShowMoreText = buttonShowMore.querySelector('.show-more-button__text');
const navMenu = document.querySelector('.nav-menu');
const swiperOptions = {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 16,
    slidesPerView: 'auto',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

if (screenWidth < 768) {
    swiper = new Swiper('.swiper', swiperOptions);
};

const resizeScreen = function (evt) {
    if (swiper && evt.target.innerWidth >= 768) {
            swiper.enable();
            swiper.destroy(true, true);
            swiper = null;
    } else if(!swiper && evt.target.innerWidth < 768) {
       swiper = new Swiper('.swiper', swiperOptions);
    };
};

const toggleContainer = function () {
    if (navMenu.classList.contains('nav-menu')) {
        navMenu.classList.remove('nav-menu');
        navMenu.classList.add('nav-menu--opened');
        buttonShowMoreText.textContent = 'Скрыть';
        buttonShowMoreText.style.backgroundImage = 'url("image/Hide.png")';
    } else {
        navMenu.classList.remove('nav-menu--opened');
        navMenu.classList.add('nav-menu');
        buttonShowMoreText.textContent = 'Показать все';
        buttonShowMoreText.style.backgroundImage = 'url("image/Expand.png")';
    }
};

window.addEventListener('resize', resizeScreen);
buttonShowMore.addEventListener('click', toggleContainer);