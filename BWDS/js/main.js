const swiper = new Swiper('.swiper', {

    loop:true,

    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    
    navigation: {
        nextEl: '.my-next',
        prevEl: '.my-prev',
    },

});

const member = document.querySelector('.member');

member.addEventListener('mouseover', () => {
    member.src = 'images/member/pi2.png';
});

member.addEventListener('mouseout', () => {
    member.src = 'images/member/pi.png';
});

const cart = document.querySelector('.cart');

cart.addEventListener('mouseover', () => {
    cart.src = 'images/member/sc2.png';
});

cart.addEventListener('mouseout', () => {
    cart.src = 'images/member/sc.png';
});