let burgOpen = document.querySelector('.header__menu-mob');
let closeBurg = document.querySelector('.header__menu-close');
let burger = document.querySelector('.header__menu-mob-block');
let menuBurgerItem = document.querySelector('.header__menu-items-burg');

burgOpen.addEventListener('click', () => {
    burger.classList.add('active');
})

closeBurg.addEventListener('click', () => {
    burger.classList.remove('active');
})


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('._anim-items');
for (let elm of elements) {
    observer.observe(elm);
}



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

menuBurgerItem.addEventListener('click', (e) => {
    burger.classList.remove('active');
})