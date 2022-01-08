import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calculator';
import sendForm from './modules/sendForm';


timer('00:00:00 31 January 2022');
menu();
modal();
//validation();
tabs();
/* class Slider {
    constructor() {
    slider('dot', 'portfolio-btn');
    }
}
new Slider(). */slider();
calc(100); //передадим в функцию стоимость одного квадратного метра площади
 sendForm({ formId: 'form1', someElem: [
    {
        type: 'block',
        id: 'total'

    }
] }) //передадим объект, у которого будет formId и добавим массив someElem? который будет содержать какие либо данные из каких либо полей, например калькулятор, или другой инпут

sendForm({ formId: 'form2', someElem: [
    {
       type: 'input',
       id: 'form2-message' 
    }
] })
sendForm({ formId: 'form3' }) 