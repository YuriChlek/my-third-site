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

})();