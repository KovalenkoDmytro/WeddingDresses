
window.addEventListener('load',()=>{
    const swiper = new Swiper(".swiper", {
        loop: true,
        effect: "fade",
        mousewheel: true,
        keyboard: {
            enabled: true,
        },
        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        // },

        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
            dynamicBullets: true,
        },
        navigation: {
            nextEl:'.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    const myLazyLoad = new LazyLoad();
})
