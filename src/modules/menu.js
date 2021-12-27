const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul > li > a');

    const body = document.querySelector('body')

     const toggleMenu = () => {
        body.addEventListener('click', (e) => {
            if (e.target.closest('.menu')) {
                menu.classList.add('active-menu');
            } else if (e.target.closest('.close-btn')) {
                menu.classList.remove('active-menu');  
            } else if (e.target.closest('menu')) {
                menuItems.forEach((menuItem) => {
                    if(menuItem === e.target) {
                        e.preventDefault();
                        let idAnchor = menuItem.getAttribute('href');
                        document.querySelector(idAnchor).scrollIntoView({
                            block: 'start',
                            behavior: 'smooth'
                        });
                        menu.classList.remove('active-menu');
                    } 
                });
             } else if (!e.target.closest('menu')) {
                menu.classList.remove('active-menu'); 
            }
            });
    };
    toggleMenu(); 























    


   
    const scrollImg = document.querySelector('main > a');   
    const serviceBlock = document.querySelector('#service-block');
    
    const clicker = (e) => {
        e.preventDefault();
        serviceBlock.scrollIntoView({block: 'start', behavior: 'smooth'});
    };
    scrollImg.addEventListener('click', clicker); 
     
};

export default menu;