document.querySelector('.justify').addEventListener('click', function() {
    let mobilemenu = document.querySelector('.header__mobile');
    mobilemenu.style.top = '0'
})
document.querySelector('.close').addEventListener('click', function() {
    let mobilemenu = document.querySelector('.header__mobile');
    mobilemenu.style.top = '-100%'
})