(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(".owl-carousel").owlCarousel({
            items: 4,
            loop: true,
            margin: 30,
            nav: true,
            navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],


        });
    });



}(jQuery));