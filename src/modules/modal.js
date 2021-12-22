const modal = () => {

    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');


    const screenWidth = document.documentElement;
    
    buttons.forEach(btn => { 
        btn.addEventListener('click', () => {

            if(screenWidth.offsetWidth < 768) {
                modal.style.opacity = '1';
                modal.style.display = 'block';
            } else {
                modal.style.opacity = '0'; 
                modal.style.display = 'block';
                modal.style.transform = 'translate(0%, 0%)';
                setTimeout(() => {
                    modal.style.opacity = '1'; 
                    modal.style.transition = '.6s all';
                }, 1);
            }
        });
    });

    closeBtn.addEventListener('click', () => {

        if(screenWidth.offsetWidth < 768) {
            modal.style.display = 'none';
        } else {
            modal.style.transform = 'translate(-50%, calc(-50% + 100px))';
            modal.style.opacity = '0';
            modal.style.transition = '.6s all';
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 600);
        }
    });
};

export default modal;