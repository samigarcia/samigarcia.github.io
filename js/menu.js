(function() {
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const menuClose = document.querySelector('.nav_close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
    });

    menuClose.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });

})();