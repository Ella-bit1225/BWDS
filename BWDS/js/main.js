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


// 取得所有下拉按鈕
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.stopPropagation(); // 防止事件冒泡
        
        // 找到當前按鈕底下的選單
        const currentMenu = this.nextElementSibling;
        
        // 關閉其他正在打開的選單（若希望一次只能開一個）
        document.querySelectorAll('.drop-down-menu').forEach(menu => {
            if (menu !== currentMenu) {
                menu.classList.remove('show');
            }
        });
        
        // 切換目前選單的顯示狀態
        currentMenu.classList.toggle('show');
    });
});

// 點擊畫面其他任何地方時，關閉所有下拉選單
window.addEventListener('click', function() {
    document.querySelectorAll('.drop-down-menu').forEach(menu => {
        menu.classList.remove('show');
    });
});