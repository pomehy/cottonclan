let currentPage = location.href;
let mainNavLinks = document.querySelectorAll('.main-nav__link');
let mainNavLength = mainNavLinks.length;

for (let i = 0; i < mainNavLength; i++) {    
    if (mainNavLinks[i].href === currentPage) {
        mainNavLinks[i].classList.add('active');
    }
};
