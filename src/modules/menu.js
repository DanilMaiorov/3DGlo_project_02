const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul > li > a');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);
    
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (e) => {
            e.preventDefault();
            let idAnchor = menuItem.getAttribute('href');
            document.querySelector(idAnchor).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
            handleMenu(); 
        });
    });

    const scrollImg = document.querySelector('main > a > img'); 
    const serviceBlock = document.querySelector('#service-block');
    
    const clicker = (e) => {
        e.preventDefault();
        serviceBlock.scrollIntoView({block: 'start', behavior: 'smooth'});
    };
    scrollImg.addEventListener('click', clicker);
     
};

export default menu;