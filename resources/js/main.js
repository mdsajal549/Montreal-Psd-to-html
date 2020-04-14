/*sticky menu*/
$(".js-function").waypoint(function (direction) {
    if (direction == "down") {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
});

/*owl carosel*/

/*smooth-scroll*/
$('a').smoothScroll();


/*hamburger - menu*/


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/*cunter js*/

$('.counter').counterUp({
    delay: 5,
    time: 1500
});



/*particle js*/


/*mixitup js*/




var mixer = mixitup('.grid-work-col-4');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});


/*carosel*/


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
