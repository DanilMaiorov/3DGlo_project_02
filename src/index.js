import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calculator';


timer('00:00:00 31 december 2021');
menu();
modal();
validation();
tabs();
class Slider {
    constructor() {
    slider('dot', 'portfolio-btn');
    }
}
new Slider().slider();
calc(100); //передадим в функцию стоимость одного квадратного метра площади