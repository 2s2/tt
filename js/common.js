const navigation = document.querySelector('.js-header');
const menu = document.querySelector('.js-navigation-menu');
const burgerBtn = document.querySelector('.js-burger-button');
const input = document.querySelector('.js-header-search');
const footerBlocks = document.querySelectorAll('.js-footer-information');

input.addEventListener('focus', () => {
    navigation.classList.add('is-searching');
}, true);

input.addEventListener('blur', () => {
    navigation.classList.remove('is-searching');
}, true);

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('is-burger');
    burgerBtn.classList.toggle('is-burger');
});

footerBlocks.forEach(item => {
    const title = item.querySelector('.footer__information-block-title');

    title.addEventListener('click', () => item.classList.toggle('is-open-block'));
});



// Language switcher
const currentLang = document.querySelector('.js-lang-button');
const langList = document.querySelector('.js-lang-list');
const english = document.getElementById('en');
const ukraine = document.getElementById('ua');
const poland = document.getElementById('pl');

(function () {
    currentLang.innerHTML = 'EN';
    english.classList.add('lang-switcher__item-lang--current');
})();

currentLang.addEventListener('click', () => {
    langList.classList.toggle('lang-switcher__list--open')
});

english.addEventListener('click', function() {
        change(english, ukraine, poland);
    }, false
);

ukraine.addEventListener('click', function() {
        change(ukraine, english, poland);
    }, false
);

poland.addEventListener('click', function() {
        change(poland, english, ukraine);
    }, false
);

function change(lang_on, lang_off1, lang_off2) {
    if (!lang_on.classList.contains('lang-switcher__item-lang--current')) {
        lang_on.classList.add('lang-switcher__item-lang--current');
        lang_off1.classList.remove('lang-switcher__item-lang--current');
        lang_off2.classList.remove('lang-switcher__item-lang--current');
    }

    if (lang_on.innerHTML === 'English') {
        currentLang.innerHTML = 'EN';
        langList.classList.remove('lang-switcher__list--open');
    }

    else if (lang_on.innerHTML === 'Ukraine') {
        currentLang.innerHTML = 'UA';
        langList.classList.remove('lang-switcher__list--open');
    }

    else if (lang_on.innerHTML === 'Poland') {
        currentLang.innerHTML = 'PL';
        langList.classList.remove('lang-switcher__list--open');
    }
}
