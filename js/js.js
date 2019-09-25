(function () {
    var hamburgerMenu = document.querySelector('.hamburger-menu'),
        flag = false;
    // console.log(window.matchMedia('(max-width: 767px)'));
    hamburgerMenu.addEventListener('click', classMode);

    function classMode() {
        var page = $('body, html');
        page.toggleClass('active');
        hamburgerMenu.classList.toggle('active');
        animateBtnMenu();
    }

    function animateBtnMenu() {
        $('.menu-bottoms').slideToggle(500, function () {
            flag = (!flag) ? true : false;
            if (!flag) {
                console.log(this);
                this.style = '';
                console.log(this);
            }
        });
    }

    $('.layer-wrapper').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: 0,//дописати
        nextArrow: 0,//дописати
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

})();