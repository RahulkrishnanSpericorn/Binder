$(document).ready(function(){
    $('.customer-logos').slick({
        nextArrow: '<div class="nxt-arw"></div>',
        prevArrow: '<div class="prv-arw "></div>',
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 7
            }
        },{
            breakpoint: 1270,
            settings: {
                slidesToShow: 6
            },
        },{
            breakpoint: 1000,
            settings: {
                slidesToShow: 5
            },
        },{
            breakpoint: 992,
            settings: {
                slidesToShow: 6
            },
        },{
            breakpoint: 780,
            settings: {
                slidesToShow: 4
            },
        },{
            breakpoint: 700 ,
            settings: {
                slidesToShow: 2
            },
        },{
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            },
        }]
    });
});