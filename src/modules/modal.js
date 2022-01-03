
import { animate } from './helpers'

const modal = () => {

    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    //const closeBtn = modal.querySelector('.popup-close'); //можем его удалить, потому как получаем его теперь в обработчике события при закрытии модального окна
    const screenWidth = document.documentElement;
    
    buttons.forEach(btn => { 
        btn.addEventListener('click', () => {
            if (screenWidth.offsetWidth > 768 ) {
                animate({
                    duration: 500,
                    timing(timeFraction) {
                    return timeFraction;
                    },
                    draw(progress) {
                        modal.style.display = 'block';
                        modal.style.opacity = progress; 
                    }
                });
            } else {
                modal.style.opacity = '1';
                modal.style.display = 'block';
            }
        });
    });  
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            if (screenWidth.offsetWidth > 768 ) {
                animate({
                    duration: 500,
                    timing(timeFraction) {
                    return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = 1 - progress; 
                        setTimeout(() => {
                            modal.style.display = 'none';
                        }, 500);
                    } 
                  });
        } else {
            modal.style.display = 'none';
        }
    };
});
}

export default modal;


/*
buttons.forEach(btn => { 
        btn.addEventListener('click', () => {

            if(screenWidth.offsetWidth < 768) {
                modal.style.opacity = '1';
                modal.style.display = 'block';
            } else {
                modal.style.opacity = '0'; 
                modal.style.display = 'block';
                setTimeout(() => {
                    modal.style.opacity = '1'; 
                    modal.style.transition = '.6s all';
                }, 1);
            }
        });
    });

/*     closeBtn.addEventListener('click', () => {  //сделали делигирование событий на всё модальное окно сразу
        if(screenWidth.offsetWidth < 768) {
            modal.style.display = 'none';
        } else {
            modal.style.opacity = '0';
            modal.style.transition = '.6s all';
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 600);
        }
    }); 

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            if (screenWidth.offsetWidth < 768) {
                modal.style.display = 'none';
            } else {
                modal.style.opacity = '0';
                modal.style.transition = '.6s all';
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 600);
            }
        }
    });*/