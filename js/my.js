// responsive nav bar
function navShow(){
    document.getElementById("navbar").style.display = "block";
}
function navHide(){
    document.getElementById("navbar").style.display = "none";
}

// Home Project owl Slider 
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        item : 3,
        loop : true,
        dotsEach : true,
        margin : 30,
        autoplay : true,
        autoplayTimeout : 3000,
        responsive:{
            0:{
                items:1,
            },
            700:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
})