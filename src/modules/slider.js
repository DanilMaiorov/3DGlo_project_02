
//LESSON 23
/* const slider = (dot, portfolioBtn, activeSlide = 'portfolio-item-active', dotActive = 'dot-active') => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const timerInterval = 2000;
    let currentSlide = 0;
    let interval;
    let dotContainer = document.querySelector('.portfolio-dots');
    let dots = [];

    const dotAdd = () => {
      slides.forEach(() => {
      const newDot = document.createElement('li');
        newDot.classList.add(dot);
        dots.push(newDot);
        dotContainer.append(newDot);
        dots[0].classList.add(dotActive);
      });
    };  
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };
    const nextSlide = (elems, index, strClass) => { 
        elems[index].classList.add(strClass);
    };
    const autoSlide = () => {
        prevSlide(slides, currentSlide, activeSlide);
        prevSlide(dots, currentSlide, dotActive);
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, activeSlide);
        nextSlide(dots, currentSlide, dotActive);
    };
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.matches(dot)) {
            return;
        } else if (e.target.matches(portfolioBtn)) {
            return;
        }
        prevSlide(slides, currentSlide, activeSlide);
        prevSlide(dots, currentSlide, dotActive);
        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains(dot)) {
            dots.forEach((dot, index) => {
                if (e.target === dot) { 
                    currentSlide = index;
                }
            });
        } 
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        nextSlide(slides, currentSlide, activeSlide);
        nextSlide(dots, currentSlide, dotActive);   
    });
    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.classList.contains(dot)) {
            stopSlide();
        } else if (e.target.classList.contains(portfolioBtn)) {
            stopSlide();
        }
    }, true);
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.classList.contains(dot)) {
            startSlide(timerInterval);
        } else if (e.target.classList.contains(portfolioBtn)) {
            startSlide(timerInterval);
        }
        
    }, true);
    startSlide(timerInterval);
    dotAdd();
  };
  export default slider; */

   const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const timerInterval = 2000;
    let currentSlide = 0;
    let interval;
    let dotContainer = document.querySelector('.portfolio-dots');
    let dots = [];

    const dotAdd = () => {
      slides.forEach(() => {
      const newDot = document.createElement('li');
        newDot.classList.add('dot');
        dots.push(newDot);
        dotContainer.append(newDot);
        dots[0].classList.add('dot-active');
      });
    };  
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };
    const nextSlide = (elems, index, strClass) => { 
        elems[index].classList.add(strClass);
    };
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) { 
                    currentSlide = index;
                }
            });
        } 
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');   
    });
    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot,.portfolio-btn')) {
            startSlide(timerInterval);
            }
    }, true);
    startSlide(timerInterval);
    dotAdd();
  };
  export default slider; 