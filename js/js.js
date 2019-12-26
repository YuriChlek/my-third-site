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
        prevArrow: '<div class="prev right"><img src="/img/fa-angle-right.png" alt="prev"></div>',
        nextArrow: '<div class="prev left"><img src="/img/fa-angle-left.png" alt="prev"></div>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

})();