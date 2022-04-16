const scrollContainer = document.querySelector("scroll_view");

scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY * 0.30;
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 2,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
