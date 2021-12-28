import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';


timer('00:00:00 31 december 2021');
menu();
modal();
validation();
tabs();
slider('portfolio-item-active', 'dot-active', 'dot', '.portfolio-btn', '.dot');