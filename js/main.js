
let burger_menu = document.querySelector('.header__burg'),
    header_menu = document.querySelector('.header__menu'),
    main = document.body;

burger_menu.addEventListener("click", function(){
burger_menu.classList.toggle('active');
header_menu.classList.toggle('active');
main.classList.toggle('lock');
});