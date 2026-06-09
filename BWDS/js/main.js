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